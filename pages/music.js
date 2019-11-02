import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import MusicLinks from '../components/MusicLinks';
import BandSelector from '../components/BandSelector';
import YouTube from 'react-youtube';
import theme from '../theme';

const Music = () => {
  return (
    <Layout>
      <a href="/" className="logo">
        <Logo />
      </a>

      <BandSelector>
        <div>
          <h2>
            <a
              className="cs"
              target="_blank"
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

          <MusicLinks band="cs" />
        </div>
        <div>
          <h2>
            <a className="la" target="_blank" href="https://www.leftalive.nl/">
              <img
                className="band-logo"
                alt="Left Alive"
                src="logo-leftalive.svg"
              />
            </a>
          </h2>
          <YouTube videoId="ypjM2_CkeXs" />
          <MusicLinks band="la" />
        </div>
      </BandSelector>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 50px 0 0 0;
          overflow: hidden;
        }
        .draggable-container {
          display: flex;
          flex-direction: row;
          width: 800px;
        }
        .draggable-container :global(.band) {
          width: 400px;
        }
        .draggable-container .band-logo {
          width: 80%;
        }
      `}</style>

      <style jsx>{`
        .logo :global(svg) {
          margin: 30px 0 15px 0;
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

        :global(iframe) {
          width: 80vw;
          height: calc(80vw / 1.7777777);
        }

        @media (min-width: 768px) {
          section {
            margin: 100px 0 200px 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Music;
