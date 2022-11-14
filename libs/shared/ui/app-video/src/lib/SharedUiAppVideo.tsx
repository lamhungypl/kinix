import { DynamicIconBadge } from '@kiti/shared/ui/app-dynamic-icon-badge';
import { WebpImg } from '@kiti/shared/ui/app-webp-img';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import {
  ImageBadges,
  StyledControlVideo,
  StyledDurationInput,
  StyledExpand,
  StyledPlayBtn,
  StyledProductVideo,
  StyledProductVideoContainer,
  StyledSoundMute,
  StyledTimeVideo,
  StyledVideo,
  StyledVideoImg,
  StyledVideoOverlay,
} from '../components/AppVideoStyled/AppVideoStyled';

const useSomeHook = (
  handlePlay: Function,
  handleExpand: Function,
  timeout?: number
) => {
  const _timeout = timeout || 250;

  const [stateHook, setStateHook] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (1 === stateHook) {
        handlePlay();
      }
      setStateHook(0);
    }, _timeout);

    if (2 === stateHook) {
      handleExpand();
    }
    return () => {
      return clearTimeout(timeoutId);
    };
  }, [_timeout, handlePlay, stateHook, handleExpand]);

  return () => {
    return setStateHook((e) => {
      return e + 1;
    });
  };
};

const calculateTime = (time: string | number) => {
  const seconds = parseInt(time as string, 10);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - 3600 * hours) / 60);
  const secondsRemaining = seconds - 3600 * hours - 60 * minutes;

  let _minutes = `${minutes}`;
  let _secondsRemaining = `${secondsRemaining}`;
  minutes < 10 && (_minutes = `0${minutes}`);
  secondsRemaining < 10 && (_secondsRemaining = `0${secondsRemaining}`);
  return `${_minutes}:${_secondsRemaining}`;
};

type Props = {
  image: any;
  thumbnail: any;
  title: any;
  videoUrl: any;
  muted?: boolean;
  autoPlay?: boolean;
  iconBadges?: any[];
  width?: '100vw';
  height?: '100vw';
  playVideo?: boolean;
  onImgClick: any;
  currentIndex: any;
  firstPlayVideo?: boolean;
  showVideo?: boolean;
  onClick?: any;
};

export const AppVideo = memo((props: Props) => {
  const {
    image,
    thumbnail,
    title,
    videoUrl,
    muted = true,
    autoPlay = true,
    iconBadges = [],
    width = '100vw',
    height = '100vw',
    playVideo = true,
    onImgClick,
    currentIndex,
    firstPlayVideo = true,
    showVideo = false,
  } = props;

  const isFullscreenEnabled = !document.fullscreenEnabled;

  const [hideImageBadges, setHideImageBadges] = useState(false);
  const [isPlayInLines, setIsPlayInLines] = useState(true);

  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(muted);
  const [state5, setState5] = useState(0);
  const [state6, setState6] = useState({
    paused: !autoPlay,
    length: null,
  });

  const videoRef = useRef<HTMLVideoElement>();

  const videoDuration = videoRef?.current.duration || 0;

  const calculateCurrentTime = calculateTime(
    videoRef.current?.currentTime || 0
  );
  const calculateDuration = calculateTime(videoRef.current?.duration || 0);

  const currentPercent = (Number(state5) / Number(videoDuration)) * 100;
  const initMaxHeight = 'calc('.concat(height, ' - 40px)');

  const extraVideoProps = isPlayInLines
    ? {
        playsInline: true,
      }
    : {};
  const handleClickPlayBtn = useCallback(() => {
    const videoElement = document.getElementById('video') as HTMLVideoElement;

    if (state5 === videoDuration) {
      videoElement.currentTime = 0;
    }

    if (state6.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [state6.paused, state5, videoDuration]);

  const handleChangeScreen = () => {
    const checkFullScreen = document.fullscreenElement;

    setState3(!!checkFullScreen);
  };

  const handleImgClick = useCallback(() => {
    setHideImageBadges(true);
  }, []);

  const handleChangeTimeRange = useCallback(() => {
    const timeRangeSelectors = document.querySelector(
      '.time_range'
    ) as HTMLInputElement;

    (document.getElementById('video') as HTMLVideoElement).currentTime =
      timeRangeSelectors.value as unknown as number;
  }, []);

  const handleSoundMute = useCallback(() => {
    const isMuted = videoRef.current?.muted;

    (document.getElementById('video') as HTMLVideoElement).muted = !isMuted;

    setState4(!isMuted);
  }, []);

  const handleClickExpand = useCallback(() => {
    if (isFullscreenEnabled) {
      setIsPlayInLines(false);
      videoRef.current?.pause();

      setTimeout(() => {
        videoRef.current?.play();
      }, 300);
      return;
    }

    if (state3) {
      document.exitFullscreen?.();
    } else {
      const fullScreenVideoElement =
        document.getElementById('full-screen-video');

      fullScreenVideoElement.requestFullscreen?.();
    }
  }, [state3, isFullscreenEnabled]);

  const handleClickProductVideo = useSomeHook(
    handleClickPlayBtn,
    handleClickExpand
  );

  useEffect(() => {
    if (firstPlayVideo) {
      setHideImageBadges(true);
    }
  }, [firstPlayVideo]);

  useEffect(() => {
    if (showVideo) {
      setHideImageBadges(true);
    }
  }, [showVideo]);

  useEffect(() => {
    if (hideImageBadges && 0 !== currentIndex) {
      setHideImageBadges(false);
      setState4(true);
    }
  }, [currentIndex, hideImageBadges]);

  useEffect(() => {
    return (
      document.addEventListener('fullscreenchange', handleChangeScreen),
      document.addEventListener('webkitfullscreenchange', handleChangeScreen),
      document.addEventListener('mozfullscreenchange', handleChangeScreen),
      document.addEventListener('MSFullscreenChange', handleChangeScreen),
      () => {
        document.removeEventListener('fullscreenchange', handleChangeScreen);
        document.removeEventListener(
          'webkitfullscreenchange',
          handleChangeScreen
        );
        document.removeEventListener('mozfullscreenchange', handleChangeScreen);
        document.removeEventListener('MSFullscreenChange', handleChangeScreen);
      }
    );
  }, []);

  useEffect(() => {
    if (hideImageBadges) {
      setInterval(() => {
        return setState5(videoRef.current?.currentTime || 0);
      }, 10);

      const videoElement = document.getElementById('video');
      (document.getElementById('video') as HTMLVideoElement).muted = muted;

      videoElement.addEventListener('pause', () => {
        setState6({ ...state6, paused: true });
      });

      videoElement.addEventListener('playing', () => {
        setState6({ ...state6, paused: false });
      });

      if (autoPlay) {
        videoRef.current?.play();
      }
    }
  }, [autoPlay, hideImageBadges, muted, state6]);

  useEffect(() => {
    if (state5 === videoDuration && videoRef.current) {
      videoRef.current?.pause();
    }
  }, [state5, videoDuration]);

  useEffect(() => {
    if (videoRef.current && null !== playVideo) {
      if (playVideo || state6.paused) {
        if (playVideo && state6.paused) {
          videoRef.current?.play();
        }
      } else {
        videoRef.current?.pause();
      }
    }
  }, [playVideo, state6.paused]);

  useEffect(() => {
    if (isFullscreenEnabled && videoRef.current) {
      videoRef.current.addEventListener('webkitendfullscreen', (e) => {
        setIsPlayInLines(true);
      });
    }
  }, [isFullscreenEnabled]);

  return (
    <StyledProductVideoContainer>
      <StyledVideoImg
        onClick={() => {
          (onImgClick || handleImgClick)();
        }}
        style={{
          width: width,
          height: height,
        }}
      >
        <WebpImg
          style={{
            width: width,
            height: height,
          }}
          src={image.large_url || thumbnail}
          // dimensions=[400]
          alt={title}
        />
        {firstPlayVideo && (
          <ImageBadges style={{ opacity: hideImageBadges ? 0 : 1 }}>
            <img
              alt="play-video"
              style={{
                height: 28,
                width: 78,
                marginBottom: 12,
                marginLeft: 16,
              }}
              src="https://salt.tikicdn.com/ts/upload/a9/02/6e/bdeae45837dc46089cb1c4fee04cae6a.png"
            />
            <DynamicIconBadge
              iconBadges={iconBadges}
              style={{
                position: 'initial',
              }}
            />
          </ImageBadges>
        )}
        {hideImageBadges && (
          <StyledVideo
            id="full-screen-video"
            style={
              state3
                ? {
                    width: '100%',
                  }
                : {}
            }
          >
            <StyledProductVideo
              onClick={handleClickProductVideo}
              style={
                state3
                  ? {
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                    }
                  : {
                      width: width,
                      maxHeight: initMaxHeight,
                    }
              }
            >
              <video
                ref={videoRef}
                id="video"
                width={state3 ? '100%' : width}
                height={state3 ? '100%' : 'auto'}
                style={{
                  maxHeight: state3 ? '100%' : initMaxHeight,
                  width: width,
                  height: height,
                }}
                {...extraVideoProps}
                muted={true}
              >
                <source type="video/mp4" src={videoUrl} />
                <track kind="captions" label="Product Video" />
              </video>
              {state6.paused && (
                <StyledVideoOverlay>
                  <img
                    alt="play-overlay-vide"
                    style={{
                      width: 32,
                      height: 32,
                    }}
                    src="https://salt.tikicdn.com/ts/upload/c4/ac/5a/ff341eb28810084ef2fd45f17d7ec3c5.png"
                  />
                </StyledVideoOverlay>
              )}
            </StyledProductVideo>
            <StyledControlVideo
              style={
                state3
                  ? {
                      position: 'absolute',
                      bottom: 0,
                    }
                  : {}
              }
            >
              <StyledPlayBtn onClick={handleClickPlayBtn}>
                <img
                  alt="play-video"
                  style={{
                    width: 24,
                  }}
                  src={
                    state6.paused
                      ? 'https://salt.tikicdn.com/ts/upload/fe/92/4f/313e5eac662ad194d2e0d1b27fee5c74.png'
                      : 'https://salt.tikicdn.com/ts/upload/7c/c9/c3/a92eca4597c21a3ec7439117d76e89b1.png'
                  }
                  width={24}
                  height={24}
                />
              </StyledPlayBtn>
              <StyledTimeVideo className="time">
                <span className="video_time">{calculateCurrentTime}</span>
                <span>/</span>
                <span className="video_length">{calculateDuration}</span>
              </StyledTimeVideo>
              <StyledDurationInput
                type={'range'}
                className={'time_range'}
                onChange={handleChangeTimeRange}
                value={state5}
                step={0.1}
                min={0}
                max={videoDuration}
                currentPercent={currentPercent}
              />
              <StyledSoundMute onClick={handleSoundMute}>
                <img
                  alt="muted-video"
                  src={
                    state4
                      ? 'https://salt.tikicdn.com/ts/upload/b1/b1/cd/68285aecb35312525c89b2a9696c7d32.png'
                      : 'https://salt.tikicdn.com/ts/upload/7a/df/f4/d4dda6674296c49340843945623f53d7.png'
                  }
                  style={{
                    width: 24,
                  }}
                  width={24}
                  height={24}
                />
              </StyledSoundMute>
              <StyledExpand onClick={handleClickExpand}>
                <img
                  alt="expand-video"
                  src={
                    state3
                      ? 'https://salt.tikicdn.com/ts/upload/39/69/43/3ee05e1caed261619a438f098e85695b.png'
                      : 'https://salt.tikicdn.com/ts/upload/0f/2b/43/1ef54b499d9af1329cb3b4716450691f.png'
                  }
                  style={{
                    width: 24,
                  }}
                  width={24}
                  height={24}
                />
              </StyledExpand>
            </StyledControlVideo>
          </StyledVideo>
        )}
      </StyledVideoImg>
    </StyledProductVideoContainer>
  );
});
