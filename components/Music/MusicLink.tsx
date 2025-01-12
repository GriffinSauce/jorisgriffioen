import iconApplemusic from './images/icon-applemusic.svg';
import iconBandcamp from './images/icon-bandcamp.svg';
import iconSoundcloud from './images/icon-soundcloud.svg';
import iconSpotify from './images/icon-spotify.svg';
import iconVinyl from './images/icon-vinyl.svg';
import iconYoutube from './images/icon-youtube.svg';
import Image from 'next/image';

const linkTypes = {
  appleMusic: {
    label: 'Apple Music',
    icon: iconApplemusic,
  },
  bandcamp: {
    label: 'Bandcamp',
    icon: iconBandcamp,
  },
  soundcloud: {
    label: 'Soundcloud',
    icon: iconSoundcloud,
  },
  spotify: {
    label: 'Spotify',
    icon: iconSpotify,
  },
  vinyl: {
    label: 'Vinyl',
    icon: iconVinyl,
  },
  youtube: {
    label: 'Youtube',
    icon: iconYoutube,
  },
} as const;

export const MusicLink = ({
  type,
  href,
}: {
  type: keyof typeof linkTypes;
  href: string;
}) => (
  <a
    className="inline-block"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <Image
      className="w-8 mx-4 md:w-14 max-w-full h-auto"
      alt={linkTypes[type].label}
      src={linkTypes[type].icon}
    />
  </a>
);
