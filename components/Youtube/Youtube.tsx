'use client';
import Image from 'next/image';
import { useId, useState } from 'react';
import { loadYoutubeVideo } from './youtubeApi';

/**
 * Placeholder can be found at:
 * https://img.youtube.com/vi/<videoid>/maxresdefault.jpg (or /hqdefault.jpg)
 *
 * Copy to `/public/youtube/<videoid.jpg` for better perf & quality
 */
const imageSizes = {
  PLFEluGiZuE: { width: 1280, height: 720 },
  VJzLCTPIfGc: { width: 1280, height: 720 },
  ypjM2_CkeXs: { width: 480, height: 360 },
};

type VideoId = keyof typeof imageSizes;

export const Youtube = ({ videoId }: { videoId: VideoId }) => {
  const id = useId();
  const [isReady, setIsReady] = useState(false);

  const loadVideo = () => {
    // Load youtube embed in the click handler so we're allowed to autoplay it on mobile
    loadYoutubeVideo({
      elementId: id,
      videoId,
      height: 315,
      width: 560,
      onReady: (event) => {
        event.target.playVideo();
        setIsReady(true);
      },
    });
  };

  return (
    <>
      <div className="relative h-0 pb-[56%]">
        {/* will be replaced with embed iframe */}
        <div id={id} className="absolute top-0 left-0 w-full h-full" />

        {isReady ? null : (
          <button
            className="group absolute top-0 left-0 flex items-center justify-center w-full h-full bg-center bg-cover"
            type="button"
            aria-label="Load and play Youtube video"
            onClick={loadVideo}
          >
            <Image
              className="absolute inset-0"
              alt="Play video on youtube"
              src={`/youtube/${videoId}.jpg`}
              width={imageSizes[videoId].width}
              height={imageSizes[videoId].height}
            />
            <svg
              className="w-[68px] h-[48px] z-10"
              version="1.1"
              viewBox="0 0 68 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="opacity-80 group-hover:opacity-100 group-hover:fill-[#f00]"
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#212121"
              />
              <path d="M 45,24 27,14 27,34" fill="#fff" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};
