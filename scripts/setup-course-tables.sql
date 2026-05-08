-- =====================================================
-- Nemark Course Platform Tables
-- Run this SQL in Supabase SQL Editor
-- =====================================================

-- Course categories
CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT, -- material icon name
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Course level enum
CREATE TYPE course_level AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE course_status AS ENUM ('draft', 'published', 'archived');

-- Courses
CREATE TABLE IF NOT EXISTS courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    instructor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_description TEXT,
    description TEXT, -- full markdown description
    thumbnail_url TEXT,
    preview_video_url TEXT,
    price DECIMAL(12, 0) DEFAULT 0, -- VND
    discount_price DECIMAL(12, 0),
    level course_level DEFAULT 'beginner',
    status course_status DEFAULT 'draft',
    total_lessons INTEGER DEFAULT 0,
    total_duration INTEGER DEFAULT 0, -- seconds
    what_you_learn TEXT[], -- bullet points
    requirements TEXT[], -- prerequisites
    tags TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Course sections (chapters)
CREATE TABLE IF NOT EXISTS sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lessons
CREATE TABLE IF NOT EXISTS lessons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
    section_id UUID REFERENCES sections(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    video_url TEXT, -- HLS or direct URL
    duration INTEGER DEFAULT 0, -- seconds
    order_index INTEGER DEFAULT 0,
    is_free BOOLEAN DEFAULT FALSE,
    content_md TEXT, -- markdown lesson content
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enrollments
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
    order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
    progress_pct DECIMAL(5, 2) DEFAULT 0,
    enrolled_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    UNIQUE(user_id, course_id)
);

-- Lesson progress
CREATE TABLE IF NOT EXISTS lesson_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE NOT NULL,
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    watched_seconds INTEGER DEFAULT 0,
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(enrollment_id, lesson_id)
);

-- Reviews
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, course_id)
);

-- Certificates
CREATE TABLE IF NOT EXISTS certificates (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE NOT NULL UNIQUE,
    certificate_number TEXT UNIQUE NOT NULL,
    issued_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS courses_slug_idx ON courses(slug);
CREATE INDEX IF NOT EXISTS courses_category_idx ON courses(category_id);
CREATE INDEX IF NOT EXISTS courses_instructor_idx ON courses(instructor_id);
CREATE INDEX IF NOT EXISTS courses_status_idx ON courses(status);
CREATE INDEX IF NOT EXISTS lessons_course_idx ON lessons(course_id);
CREATE INDEX IF NOT EXISTS lessons_section_idx ON lessons(section_id);
CREATE INDEX IF NOT EXISTS enrollments_user_idx ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS enrollments_course_idx ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS reviews_course_idx ON reviews(course_id);

-- RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Public read for published courses
CREATE POLICY "Public can view categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public can view published courses" ON courses FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view sections" ON sections FOR SELECT USING (
    EXISTS (SELECT 1 FROM courses WHERE courses.id = sections.course_id AND courses.status = 'published')
);
CREATE POLICY "Public can view lesson meta" ON lessons FOR SELECT USING (
    EXISTS (SELECT 1 FROM courses WHERE courses.id = lessons.course_id AND courses.status = 'published')
);
CREATE POLICY "Public can view reviews" ON reviews FOR SELECT USING (true);

-- Instructors can manage their courses
CREATE POLICY "Instructors manage own courses" ON courses FOR ALL USING (instructor_id = auth.uid());
CREATE POLICY "Instructors manage sections" ON sections FOR ALL USING (
    EXISTS (SELECT 1 FROM courses WHERE courses.id = sections.course_id AND courses.instructor_id = auth.uid())
);
CREATE POLICY "Instructors manage lessons" ON lessons FOR ALL USING (
    EXISTS (SELECT 1 FROM courses WHERE courses.id = lessons.course_id AND courses.instructor_id = auth.uid())
);

-- Users can manage their enrollments
CREATE POLICY "Users view own enrollments" ON enrollments FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users create enrollment" ON enrollments FOR INSERT WITH CHECK (user_id = auth.uid());

-- Users can track own progress
CREATE POLICY "Users manage own progress" ON lesson_progress FOR ALL USING (
    EXISTS (SELECT 1 FROM enrollments WHERE enrollments.id = lesson_progress.enrollment_id AND enrollments.user_id = auth.uid())
);

-- Users can manage own reviews
CREATE POLICY "Users manage own reviews" ON reviews FOR ALL USING (user_id = auth.uid());

-- Users can view own certificates
CREATE POLICY "Users view own certificates" ON certificates FOR SELECT USING (
    EXISTS (SELECT 1 FROM enrollments WHERE enrollments.id = certificates.enrollment_id AND enrollments.user_id = auth.uid())
);

-- Public can verify certificates
CREATE POLICY "Public verify certificates" ON certificates FOR SELECT USING (true);

-- Auto-update timestamps
CREATE TRIGGER courses_updated_at BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
CREATE TRIGGER lessons_updated_at BEFORE UPDATE ON lessons FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
CREATE TRIGGER lesson_progress_updated_at BEFORE UPDATE ON lesson_progress FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Generate certificate number
CREATE OR REPLACE FUNCTION generate_certificate_number()
RETURNS TRIGGER AS $$
BEGIN
    NEW.certificate_number := 'NMK-CERT-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || SUBSTR(NEW.id::TEXT, 1, 8);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_certificate_number
    BEFORE INSERT ON certificates
    FOR EACH ROW EXECUTE FUNCTION generate_certificate_number();

-- Seed default categories
INSERT INTO categories (name, slug, description, icon, order_index) VALUES
    ('Vibe Coding', 'vibe-coding', 'Lập trình AI-assisted cơ bản', 'code', 1),
    ('Web Fullstack', 'web-fullstack', 'Next.js, React, Node.js, databases', 'web', 2),
    ('Game Dev 2D', 'game-dev-2d', 'Phaser.js, pixel art, game mechanics', 'sports_esports', 3),
    ('Game Dev 3D', 'game-dev-3d', 'Three.js, Unity WebGL', 'view_in_ar', 4),
    ('Mobile App', 'mobile-app', 'React Native, Flutter', 'phone_iphone', 5),
    ('Game NRO/NSO', 'game-nro-nso', 'Server setup, game logic, multiplayer RPG', 'gamepad', 6)
ON CONFLICT (slug) DO NOTHING;
