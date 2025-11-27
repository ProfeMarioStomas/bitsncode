import type { Metadata, Viewport } from 'next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './globals.css';
library.add(fas);

export const metadata: Metadata = {
  title: 'Bits & Code | Consultor Freelance Full-Stack TypeScript',
  description:
    'Programador Senior con más de 15 años de experiencia y profesor universitario. Especializado en arquitecturas robustas, Java, TypeScript y diseño de software avanzado.',
  metadataBase: new URL('https://bitsncode.dev'),
  alternates: {
    canonical: 'https://bitsncode.dev',
  },
  openGraph: {
    title: 'Bits & Code | Consultor Freelance Full-Stack TypeScript',
    description:
      '15+ años en Java/TypeScript. Enfoque directo y resultados de alto impacto.',
    url: 'https://bitsncode.dev',
    siteName: 'Bits & Code',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  keywords: [
    'consultor java',
    'typescript senior',
    'patrones de diseño',
    'arquitecturas escalables',
    'devops',
    'consultoría software',
    'profesor programación',
  ],
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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Bits & Code | Consultor Freelance Full-Stack TypeScript',
              description:
                '15+ años en Java/TypeScript. Enfoque directo y resultados de alto impacto',
              url: 'https://bitsncode.dev',
              telephone: '+56968360950',
              address: {
                '@type': 'El Canelo 2652',
                addressLocality: 'Iquique',
                addressCountry: 'CL',
              },
              sameAs: [
                'https://www.linkedin.com/in/mariocaresc/',
                'https://github.com/ProfeMarioStomas',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
