import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import YouTube from 'react-youtube';

const Music = () => (
  <Layout>
    <Head>
      <title>My bands</title>
      <meta
        key="og:url"
        property="og:url"
        content="https://joris.rocks/music"
      />
      <meta key="description" name="description" content="My bands" />
      <meta key="og:description" property="og:description" content="My bands" />
    </Head>

    <Link href="/">
      <a className="logo">
        <Logo />
      </a>
    </Link>

    <h1>My bands</h1>

    <section>
      <h2>
        <a
          className="cs"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coralsprings.nl/"
        >
          <img
            className="band-logo"
            alt="Coral Springs"
            src="logo-coralsprings.svg"
          />
        </a>
      </h2>

      <YouTube videoId="VJzLCTPIfGc" />

      <nav>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/artist/4KJW2C933rpf1mlOZTFWXe"
        >
          <img alt="spotify" src="icon-spotify.svg" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.apple.com/us/artist/coral-springs/348189917"
        >
          <img alt="apple music" src="icon-applemusic.svg" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://coralsprings.bandcamp.com/album/always-lost-never-found"
        >
          <img alt="bandcamp" src="icon-bandcamp.svg" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coralsprings.nl/post/183493206188/always-lost-never-found-out-now"
        >
          <img alt="physical media" src="icon-vinyl.svg" />
        </a>
      </nav>
    </section>

    <section>
      <h2>
        <a
          className="la"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.leftalive.nl/"
        >
          <img
            className="band-logo"
            alt="Left Alive"
            src="logo-leftalive.svg"
          />
        </a>
      </h2>

      <YouTube videoId="ypjM2_CkeXs" />

      <nav>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
        >
          <img alt="spotify" src="icon-spotify.svg" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://itunes.apple.com/us/artist/left-alive/1073464999"
        >
          <img alt="apple music" src="icon-applemusic.svg" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://soundcloud.com/leftalive/"
        >
          <img alt="soundcloud" src="icon-soundcloud.svg" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/leftalive"
        >
          <img alt="youtube" src="icon-youtube.svg" />
        </a>
      </nav>
    </section>

    <style jsx>{`
      .logo {
        margin: 30px 0 0 0;
        display: inline-block;
      }
      .logo :global(svg) {
        width: 100px;
      }

      section {
        margin: 50px 0 80px 0;
      }

      h2 {
        margin: 0 0 30px 0;
      }

      .band-logo {
        width: 60%;
      }

      nav {
        margin-top: 15px;
      }

      nav img {
        margin: 15px;
        width: 30px;
      }

      :global(iframe) {
        width: 80vw;
        height: calc(80vw / 1.7777777);
      }

      @media (min-width: 768px) {
        section {
          margin: 100px 0 200px 0;
        }

        nav img {
          margin: 15px 30px;
          width: 50px;
        }

        :global(iframe) {
          width: 50vw;
          height: calc(50vw / 1.7777777);
        }
      }
    `}</style>
  </Layout>
);

export default Music;
