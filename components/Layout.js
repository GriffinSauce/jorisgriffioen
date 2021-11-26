import Head from 'next/head';
import { darken, saturate } from 'polished';
import theme from '../theme';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>Joris Griffioen</title>
      <meta property="og:site_name" content="Joris Griffioen" />
      <meta property="og:title" content="Joris Griffioen" />
      <meta
        key="description"
        name="description"
        content="Developer, guitarist."
      />
      <meta
        key="og:description"
        property="og:description"
        content="Developer, guitarist."
      />
      <meta name="author" content="Joris Griffioen" />

      <meta key="og:url" property="og:url" content="https://joris.rocks/" />

      <meta
        property="og:image"
        content="https://joris.rocks/bands-social.jpg"
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="2048" />
      <meta property="og:image:height" content="1365" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Oswald:300,400&display=swap"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Oswald:300,400&display=swap"
        rel="stylesheet"
      />

      <meta name="theme-color" content="#21062c" />
      <meta name="msapplication-TileColor" content="#9f00a7" />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <link rel="manifest" href="site.webmanifest" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="icons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="icons/favicon.ico" />
    </Head>

    {children}
    <footer>Artwork by Evelien Griffioen</footer>

    <style jsx global>{`
      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100%;
      }

      body {
        font-family: ${theme.fontSecondary};
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: linear-gradient(
          135deg,
          ${darken(0.35, theme.color5)},
          ${darken(0.4, theme.color1)}
        );
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: ${theme.fontPrimary};
        font-weight: 300;
        color: ${theme.color2};
      }

      h1 {
        font-size: 3rem;
      }

      h2 {
        font-size: 28px;
      }

      img {
        margin: 0;
        padding: 0;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      footer {
        margin: 30px 0;
        font-size: 0.7rem;
        color: ${theme.color4};
      }
    `}</style>
  </>
);

export default Layout;
