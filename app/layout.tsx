import './styles.css';
import type { Metadata, Viewport } from 'next';
import { Montserrat, Oswald } from 'next/font/google';

const fontMontserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const fontOswald = Oswald({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
});

const fontClasses = `${fontMontserrat.className} ${fontOswald.className}`;

export const metadata: Metadata = {
  title: 'Joris Griffioen',
  description: 'Developer, guitarist.',
  authors: [{ name: 'Joris Griffioen' }],
  manifest: 'site.webmanifest',
  openGraph: {
    url: 'https://joris.rocks/',
    siteName: 'Joris Griffioen',
    title: 'Joris Griffioen',
    description: 'Developer, guitarist.',
    images: [
      {
        url: 'https://joris.rocks/bands-social.jpg',
        type: 'image/jpg',
        height: '1365',
        width: '2048',
      },
    ],
  },

  icons: {
    // TODO: move to file API
    shortcut: 'icons/favicon.ico',
    other: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: 'icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: 'icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: 'icons/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: 'icons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#21062c',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
