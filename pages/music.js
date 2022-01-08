import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import YouTube from '../components/Youtube';

const MusicLink = ({ label, icon, href, children }) => (
  <a
    className="inline-block"
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.coralsprings.nl/"
  >
    <img className="w-8 md:w-16 mx-4" alt={label} src={icon} />
  </a>
);

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
      <a className="flex-center gap-3 bg-black py-6">
        <Logo width={80} />
        <div>
          <h1>Bands</h1>
          <p>Joris Griffioen</p>
        </div>
      </a>
    </Link>

    <main className="mt-12 grid gap-16 sm:gap-20 text-center ">
      <section className="grid gap-6">
        <h2>
          <a
            className="block"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.coralsprings.nl/"
          >
            <img
              className="inline-block w-2/3"
              alt="Coral Springs"
              src="logo-coralsprings.svg"
            />
          </a>
        </h2>

        <div className="my-0 mx-auto aspect-video w-[80vw]">
          <YouTube videoId="VJzLCTPIfGc" />
        </div>

        <nav>
          <MusicLink
            href="https://open.spotify.com/artist/4KJW2C933rpf1mlOZTFWXe"
            description="spotify"
            icon="icon-spotify.svg"
          ></MusicLink>
          <MusicLink
            href="https://music.apple.com/us/artist/coral-springs/348189917"
            description="apple music"
            icon="icon-applemusic.svg"
          ></MusicLink>
          <MusicLink
            href="https://coralsprings.bandcamp.com/album/always-lost-never-found"
            description="bandcamp"
            icon="icon-bandcamp.svg"
          ></MusicLink>
          <MusicLink
            href="https://www.coralsprings.nl/post/183493206188/always-lost-never-found-out-now"
            description="physical media"
            icon="icon-vinyl.svg"
          ></MusicLink>
        </nav>
      </section>

      <section className="grid gap-2">
        <h2>
          <a
            className="block"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.leftalive.nl/"
          >
            <img
              className="inline-block w-2/3"
              alt="Left Alive"
              src="logo-leftalive.svg"
            />
          </a>
        </h2>

        <div className="my-0 mx-auto aspect-video w-[80vw]">
          <YouTube videoId="ypjM2_CkeXs" />
        </div>

        <nav>
          <MusicLink
            href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
            label="spotify"
            icon="icon-spotify.svg"
          ></MusicLink>
          <MusicLink
            href="https://itunes.apple.com/us/artist/left-alive/1073464999"
            label="apple music"
            icon="icon-applemusic.svg"
          ></MusicLink>
          <MusicLink
            href="https://soundcloud.com/leftalive/"
            label="soundcloud"
            icon="icon-soundcloud.svg"
          ></MusicLink>
          <MusicLink
            href="https://www.youtube.com/leftalive"
            label="youtube"
            icon="icon-youtube.svg"
          ></MusicLink>
        </nav>
      </section>
    </main>
  </Layout>
);

export default Music;
