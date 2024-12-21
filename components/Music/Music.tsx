import logoCoralsprings from './images/logo-coralsprings.svg';
import logoLeftalive from './images/logo-leftalive.svg';
import Image from 'next/image';
import { Youtube } from '../Youtube';
import { MusicLink } from './MusicLink';

export const Music = () => (
  <div className="grid gap-16">
    <section className="grid gap-6">
      <h3>
        <a
          className="block"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coralsprings.nl/"
        >
          <Image
            className="inline-block w-5/6"
            alt="Coral Springs"
            src={logoCoralsprings}
          />
        </a>
      </h3>

      <div className="w-full aspect-video">
        <Youtube videoId="VJzLCTPIfGc" />
      </div>

      <div className="w-full aspect-video">
        <Youtube videoId="PLFEluGiZuE" />
      </div>

      <nav>
        <MusicLink
          href="https://open.spotify.com/artist/4KJW2C933rpf1mlOZTFWXe"
          type="spotify"
        ></MusicLink>
        <MusicLink
          href="https://music.apple.com/us/artist/coral-springs/348189917"
          type="appleMusic"
        ></MusicLink>
        <MusicLink
          href="https://coralsprings.bandcamp.com/album/always-lost-never-found"
          type="bandcamp"
        ></MusicLink>
        <MusicLink
          href="https://www.coralsprings.nl/post/183493206188/always-lost-never-found-out-now"
          type="vinyl"
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
          <Image
            className="inline-block w-5/6"
            alt="Left Alive"
            src={logoLeftalive}
          />
        </a>
      </h3>

      <div className="w-full aspect-video">
        <Youtube videoId="ypjM2_CkeXs" />
      </div>

      <nav>
        <MusicLink
          href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
          type="spotify"
        ></MusicLink>
        <MusicLink
          href="https://itunes.apple.com/us/artist/left-alive/1073464999"
          type="appleMusic"
        ></MusicLink>
        <MusicLink
          href="https://soundcloud.com/leftalive/"
          type="soundcloud"
        ></MusicLink>
        <MusicLink
          href="https://www.youtube.com/leftalive"
          type="youtube"
        ></MusicLink>
      </nav>
    </section>
  </div>
);
