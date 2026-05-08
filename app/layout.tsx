import "./globals.css";
import "aos/dist/aos.css";
import AosProvider from "@/components/providers/AosProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning data-scroll-behavior="smooth">
      <head suppressHydrationWarning>
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/logo.jpg?v=2" sizes="any" />
        <link rel="shortcut icon" type="image/jpeg" href="/logo.jpg?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.jpg?v=2" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/logo.jpg?v=2" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/logo.jpg?v=2" />

        {/* DNS Prefetch + Preconnect for faster font loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts - merged Material Icons into single request */}
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
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
