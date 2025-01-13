'use client';

const listeners = [];

const IFRAME_API_URL = 'https://www.youtube.com/iframe_api';

const loadScript = () => {
  // @ts-expect-error - YOLO
  window.onYouTubeIframeAPIReady = () => {
    listeners.forEach((listener) => listener());
  };

  const tag = document.createElement('script');
  tag.src = IFRAME_API_URL;
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const loadYoutubeAPI = (onReady: () => void) => {
  const isLoaded =
    window.YT && window.YT.Player && window.YT.Player instanceof Function;
  const isLoading = document.querySelector(`script[src="${IFRAME_API_URL}"]`);

  if (isLoaded) return onReady();

  listeners.push(onReady);

  if (isLoading) return;
  loadScript();
};

/**
 * Load a youtube video embed in place of an element
 */
export const loadYoutubeVideo = ({
  elementId,
  videoId,
  width,
  height,
  onReady,
}: {
  elementId: string;
  videoId: string;
  width: number;
  height: number;
  onReady: YT.Events['onReady'];
}) => {
  loadYoutubeAPI(() => {
    new YT.Player(elementId, {
      videoId,
      height,
      width,
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady,
      },
    });
  });
};
