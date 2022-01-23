import Link from 'next/link';
import YouTube from '../components/Youtube';

const MusicLink = ({ label, icon, href, children }) => (
  <a
    className="inline-block"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <img className="w-8 mx-4 md:w-14" alt={label} src={icon} />
  </a>
);

const Music = () => (
  <div className="grid gap-16">
    <section className="grid gap-6">
      <h3>
        <a
          className="block"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coralsprings.nl/"
        >
          <img
            className="inline-block w-5/6"
            alt="Coral Springs"
            src="logo-coralsprings.svg"
          />
        </a>
      </h3>

      <div className="w-full aspect-video">
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
      <h3>
        <a
          className="block"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.leftalive.nl/"
        >
          <img
            className="inline-block w-5/6"
            alt="Left Alive"
            src="logo-leftalive.svg"
          />
        </a>
      </h3>

      <div className="w-full aspect-video">
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
  </div>
);

export default Music;
