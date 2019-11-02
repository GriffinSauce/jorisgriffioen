import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import usePrevious from '../lib/usePrevious';

export default ({ children }) => {
  const [selectedBand, setSelectedBand] = useState('cs');
  const prevSelectedBand = usePrevious(selectedBand);
  const controls = useAnimation();
  const [clickable, setClickable] = useState(true);

  const onDragStart = () => {
    setClickable(false);
  };

  const onDragEnd = (event, info) => {
    setClickable(true);
    const shouldClose =
      info.velocity.x > 20 || (info.velocity.x >= 0 && info.point.x > 45);
    if (shouldClose) {
      controls.start('cs');
      setSelectedBand('cs');
    } else {
      controls.start('la');
      setSelectedBand('la');
    }
  };

  useEffect(() => {
    if (prevSelectedBand === 'la' && selectedBand === 'cs') {
      controls.start('cs');
    } else if (prevSelectedBand === 'cs' && selectedBand === 'la') {
      controls.start('la');
    }
  }, [controls, selectedBand, prevSelectedBand]);

  return (
    <>
      <div className="container">
        <motion.div
          drag="x"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          initial="cs"
          animate={controls}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 400,
          }}
          variants={{
            cs: { x: '10%' },
            la: { x: '-70%' },
          }}
          dragConstraints={{ top: 0 }}
          dragElastic={0.2}
        >
          <div className="draggable">
            <motion.section
              style={{
                ...(clickable && selectedBand === 'cs'
                  ? {}
                  : { pointerEvents: 'none' }),
              }}
            >
              {children[0]}
            </motion.section>
            <motion.section
              style={{
                ...(clickable && selectedBand === 'la'
                  ? {}
                  : { pointerEvents: 'none' }),
              }}
            >
              {children[1]}{' '}
            </motion.section>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          overflow: hidden;
        }

        .draggable {
          display: flex;
          flex-direction: row;
        }

        section {
          flex-shrink: 0;
          padding: 50px 0;
          width: 80%;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid;
        }
      `}</style>
    </>
  );
};
