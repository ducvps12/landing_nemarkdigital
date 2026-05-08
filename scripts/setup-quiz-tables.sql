-- ============================================
-- Quiz System Tables
-- ============================================

-- Quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    pass_score INTEGER DEFAULT 70,
    time_limit INTEGER, -- seconds, NULL = no limit
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quiz Questions
CREATE TABLE IF NOT EXISTS quiz_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    question_type TEXT NOT NULL DEFAULT 'single' CHECK (question_type IN ('single', 'multiple')),
    options JSONB NOT NULL DEFAULT '[]',
    correct_answer JSONB NOT NULL, -- single: "index", multiple: [indices]
    explanation TEXT,
    order_index INTEGER DEFAULT 0,
    points INTEGER DEFAULT 1
);

-- Quiz Attempts
CREATE TABLE IF NOT EXISTS quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    score INTEGER NOT NULL DEFAULT 0,
    max_score INTEGER NOT NULL DEFAULT 0,
    passed BOOLEAN DEFAULT false,
    answers JSONB DEFAULT '{}',
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

-- ============================================
-- Indexes
-- ============================================

CREATE INDEX IF NOT EXISTS idx_quizzes_lesson ON quizzes(lesson_id);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz ON quiz_questions(quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz ON quiz_attempts(quiz_id);

-- ============================================
-- RLS Policies
-- ============================================

ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Quizzes: readable by everyone, writable by instructors
CREATE POLICY "quizzes_read" ON quizzes FOR SELECT USING (true);
CREATE POLICY "quizzes_insert" ON quizzes FOR INSERT WITH CHECK (
    EXISTS (
        SELECT 1 FROM courses c
        JOIN lessons l ON l.course_id = c.id
        WHERE l.id = lesson_id AND c.instructor_id = auth.uid()
    )
);

-- Questions: readable by everyone, writable by quiz owner
CREATE POLICY "questions_read" ON quiz_questions FOR SELECT USING (true);
CREATE POLICY "questions_insert" ON quiz_questions FOR INSERT WITH CHECK (
    EXISTS (
        SELECT 1 FROM quizzes q
        JOIN lessons l ON l.id = q.lesson_id
        JOIN courses c ON c.id = l.course_id
        WHERE q.id = quiz_id AND c.instructor_id = auth.uid()
    )
);

-- Attempts: users can read/write their own
CREATE POLICY "attempts_read" ON quiz_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "attempts_insert" ON quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "attempts_update" ON quiz_attempts FOR UPDATE USING (auth.uid() = user_id);
