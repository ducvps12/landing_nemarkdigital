import "./globals.css";
import "aos/dist/aos.css";
import AosProvider from "@/components/providers/AosProvider";
import { Be_Vietnam_Pro, Montserrat } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  subsets: ["vietnamese", "latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${beVietnamPro.variable} ${montserrat.variable}`}
    >
      <head suppressHydrationWarning>
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/logo.jpg?v=2" sizes="any" />
        <link rel="shortcut icon" type="image/jpeg" href="/logo.jpg?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.jpg?v=2" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/logo.jpg?v=2" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/logo.jpg?v=2" />

        {/* Material Icons - kept as external since next/font doesn't support icon fonts */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <AosProvider>
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
