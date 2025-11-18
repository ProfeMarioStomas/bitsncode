import type { Metadata, Viewport } from 'next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './globals.css';
library.add(fas);

export const metadata: Metadata = {
  title: 'Bits & Code | Consultor Freelance Full-Stack TypeScript',
  description:
    'Programador Senior con más de 15 años de experiencia y profesor universitario. Especializado en arquitecturas robustas, Java, TypeScript y diseño de software avanzado.',
  alternates: {
    canonical: 'https://bitsncode.dev',
  },
  openGraph: {
    title: 'Consultoría de Software Senior',
    description:
      '15+ años en Java/TypeScript. Enfoque directo y resultados de alto impacto.',
    url: 'https://bitsncode.dev',
    siteName: 'Bits & Code | Software Consultant',
    type: 'website',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml'></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
