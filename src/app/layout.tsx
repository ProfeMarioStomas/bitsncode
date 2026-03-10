import type { Metadata, Viewport } from 'next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './globals.css';
library.add(fas);

export const metadata: Metadata = {
  title: 'Bits & Code | Software Factory',
  description: 'Software profesional para empresas que ya no caben en un Excel',
  metadataBase: new URL('https://bitsncode.dev'),
  icons: {
    icon: '/favicon.ico',
    apple: [
          { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ]
  },
  appleWebApp: {
    capable: true,
    title: 'Bits & Code',
    statusBarStyle: 'black-translucent',
  },
  alternates: {
    canonical: 'https://bitsncode.dev',
  },
  openGraph: {
    title: 'Bits & Code | Software Factory',
    description:
      'Software profesional para empresas que ya no caben en un Excel',
    url: 'https://bitsncode.dev',
    siteName: 'Bits & Code',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bits & Code | Software Factory',
      },
    ],
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bits & Code',
    description:
      'Software profesional para empresas que ya no caben en un Excel',
    images: ['/og-image.png'],
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
  keywords: ['software factory', 'consultoría software'],
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
    <html lang='es' className='has-navbar-fixed-top'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://bitsncode.dev/#organization',
                  name: 'Bits & Code',
                  description:
                    'Software factory especializada en sistemas a medida, escalables y seguros para empresas que superaron las hojas de cálculo.',
                  url: 'https://bitsncode.dev',
                  telephone: '+56968360950',
                  image: 'https://bitsncode.dev/og-image.png',
                  publicAccess: false,
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://bitsncode.dev/logo.svg',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Iquique',
                    addressRegion: 'Tarapacá',
                    addressCountry: 'CL',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -20.2307,
                    longitude: -70.1357,
                  },
                  areaServed: [
                    { '@type': 'Country', name: 'Chile' },
                    { '@type': 'City', name: 'Santiago' },
                  ],
                  priceRange: '$$',
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ],
                    opens: '09:00',
                    closes: '18:00',
                  },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://bitsncode.dev/#person',
                  name: 'Mario Cares',
                  jobTitle: 'Consultor Senior & Arquitecto de Software',
                  url: 'https://bitsncode.dev',
                  worksFor: { '@id': 'https://bitsncode.dev/#organization' },
                  knowsAbout: [
                    'Software Architecture',
                    'TypeScript',
                    'Java',
                    'Clean Architecture',
                    'Design Patterns',
                    'Enterprise Integration Patterns',
                  ],
                  sameAs: [
                    'https://www.linkedin.com/in/mariocaresc/',
                    'https://github.com/ProfeMarioStomas',
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
