import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import MusicLinks from '../components/MusicLinks';
import YouTube from 'react-youtube';
import theme from '../theme';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Music = () => {
  const constraintRef = useRef();
  const x = useMotionValue(100);
  const opacity1 = useTransform(x, [-100, 0, 100], [0.5, 0.8, 1]);
  const opacity2 = useTransform(x, [-100, 0, 100], [1, 0.8, 0.5]);
  // const background = useTransform(
  //   x,
  //   [-100, 0, 100],
  //   ['#ff008c', '#7700ff', 'rgb(230, 255, 0)'],
  // );

  const [clickable, setClickable] = useState(null);

  return (
    <Layout>
      <a href="/" className="logo">
        <Logo />
      </a>

      <div className="container" ref={constraintRef}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -200, right: 200 }}
          onDragStart={() => {
            setClickable(null);
          }}
          onDragEnd={() => {
            console.log(x.get());
            if (x.get() > 0) {
              setClickable('CS');
              x.set(200);
            } else {
              setClickable('LA');
              x.set(-200);
            }
          }}
          style={{ x }}
        >
          <div className="draggable-container">
            <motion.div
              className="band"
              style={{
                opacity: opacity1,
                ...(clickable !== 'CS' ? { pointerEvents: 'none' } : {}),
              }}
            >
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
            </motion.div>
            <motion.div
              className="band"
              style={{
                opacity: opacity2,
                ...(clickable !== 'LA' ? { pointerEvents: 'none' } : {}),
              }}
            >
              <h2>
                <a
                  className="la"
                  target="_blank"
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

              <MusicLinks band="la" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 50px 0 0 0;
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
