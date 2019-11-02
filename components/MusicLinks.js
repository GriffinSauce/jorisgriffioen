import React from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import YouTube from 'react-youtube';
import theme from '../theme';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const MusicLinks = ({ band }) => {
  return (
    <>
      {band === 'cs' ? (
        <nav>
          <a
            target="_blank"
            href="https://open.spotify.com/artist/4KJW2C933rpf1mlOZTFWXe"
          >
            <img alt="spotify" src="icon-spotify.svg" />
          </a>
          <a
            target="_blank"
            href="https://music.apple.com/us/artist/coral-springs/348189917"
          >
            <img alt="apple music" src="icon-applemusic.svg" />
          </a>
          <a
            target="_blank"
            href="https://coralsprings.bandcamp.com/album/always-lost-never-found"
          >
            <img alt="bandcamp" src="icon-bandcamp.svg" />
          </a>
          <a
            target="_blank"
            href="https://www.coralsprings.nl/post/183493206188/always-lost-never-found-out-now"
          >
            <img alt="physical media" src="icon-vinyl.svg" />
          </a>
        </nav>
      ) : (
        <nav>
          <a
            target="_blank"
            href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
          >
            <img alt="spotify" src="icon-spotify.svg" />
          </a>
          <a
            target="_blank"
            href="https://itunes.apple.com/us/artist/left-alive/1073464999"
          >
            <img alt="apple music" src="icon-applemusic.svg" />
          </a>
          <a target="_blank" href="https://soundcloud.com/leftalive/">
            <img alt="soundcloud" src="icon-soundcloud.svg" />
          </a>
          <a target="_blank" href="https://www.youtube.com/leftalive">
            <img alt="youtube" src="icon-youtube.svg" />
          </a>
        </nav>
      )}

      <style jsx>{`
        nav {
          margin-top: 15px;
        }

        nav img {
          margin: 15px;
          width: 30px;
        }

        @media (min-width: 768px) {
          nav img {
            margin: 15px 30px;
            width: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default MusicLinks;
