import clsx from 'clsx';
import { isEmpty } from 'lodash-es';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type NativeImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

export interface PictureProps extends NativeImgProps {
  dimensions?: Any;
  retina?: Any;
  noPlaceholder?: Any;
  pictureTag?: Any;
  isCover?: Any;
  isContain?: Any;
}

const StyledPicture = styled.div<PictureProps & { loaded?: boolean }>`
  position: relative;
  z-index: 1;
  display: ${({ dimensions }) =>
    isEmpty(dimensions) ? 'inline-block' : 'block'};
  width: ${({ width, dimensions }) =>
    width && !dimensions ? `${width}px` : null};
  height: ${({ height, dimensions }) =>
    height && !dimensions ? `${height}px` : null};
  padding-top: ${({ dimensions = '1x1' }) => {
    const [width, height] = dimensions.split('x');
    return isEmpty(dimensions) ? null : `${(height / width) * 100}%`;
  }};
  ${({ isCover, isContain }) => {
    return isCover
      ? `
        padding-top: 100%;
        width: 100%;
        background: url(data:image/png;base64iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABv1BMVEUAAAD////////////////////////////////m5ubo6Ojq6urr6+vu7u7v7+/w8PDx8fHy8vLy8vLz8/Pz8/P09PT19fX19fX29vb29vbu7u7v7+/w8PDx8fHx8fHy8vLz8/Pz8/P09PT09PT09PTx8fHx8fHy8vLy8vLz8/Pz8/Pz8/P09PT09PTx8fHy8vLz8/Pz8/Pz8/Pz8/Px8fHx8fHx8fHx8fHy8vLy8vLy8vLz8/Pz8/Pz8/Pz8/Px8fHx8fHy8vLy8vLx8fHx8fHx8fHx8fHy8vLy8vLy8vLy8vLy8vLz8/Pz8/Pz8/Pz8/Pz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Py8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL8u4tzAAAAlHRSTlMAAQIDBAUGBwgKCwwNDxAREhMUFRYXGRobHR4fISQlJykrLS4wNzg8PT9BQkNESU1SU1VYW1xdXl9gY2ZnaGlub3d5gIKDhIaHiIuMj5CRkpOUmJmam5ydn6Gio6SoqquwsbO0tre6u72+wMTFx8jKy8zO0dXX2Nvc3+Hi4+Xm5+jp6+zt7vDx8vP09fb3+Pn6+/z9j0GhsQAAAAFiS0dEAf8CLd4AAAIXSURBVFjDY2AYBXQEfHbR5uTrZtSO6ZkyZYoJmdrlPOumgEEeObq5rQunwIEsyU7XjWqfggScSNMu6lg6BRUUk6Cb1Sh90hQMoEisdiW/uinYgAvp4YYKKojQruLfgqEvOg3GUiEYbmWY1rYaMPCVQ9lepIfblBxpUKB0QTjVTHjCrR6bryc7s4CljaF8dRLDrV4XpsQXIhCI1e1urThCPVsKrogtF2IiMxYDHHBon+zGgqRKogEsqIPFgAjs+uvQ1GpOBImG4ndBTUpIMBT4iKCrMwUJe2AxQGIyVHumKplFRhZEfwATuUWWLVh/AiPZZR5/P1B/hzAFZW4qKMeAWWI6usQAdU5UAyyABliCGFYTpxAHauVQDODtnTJFG8Som0IsCEB1QvyUKWogehLRBsShGmBIqQEcbRQawBBFqQH6lBrA2kyMAUXWos04DGAIQzMgvAtdd2eEBjCxh+EyQAvVgGYuIxTdk5KM2MHqNHAZwCyDYoA7A0MQctkmD1PHVIXDAAiAGdApCAyWbLj+Ah6EEleiDPADcSSboLwSIeT2BjEG9EuCeXqQoqpSAkVNPhEGREK5buCSHK1hYk/YgMkKsBAD1qqtymhqhCcQNCAZzhdv7NPFUJRB0AANhICOAaaiOEIGZBEoAAkaYEmpAUajBlBuAFlF2qAxoJtoA6KwG5BItAFm2A0Q8I4jCsTaMDKMAioBAFxWB2a5GC1fAAAAAElFTkSuQmCC);
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: ${isContain ? 'contain' : 'cover'};
        &.loaded {
          padding-top: 100%;
          width: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: center;
        }
        `
      : '';
  }};
  .placeholder {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    max-width: ${({ width }) => {
      return width ? `${width}px` : null;
    }};
    max-height: ${({ height }) => {
      return height ? `${height}px` : null;
    }};
    width: 64px;
    height: auto;
    transform: translate(-50%-50%);
  }
  .image {
    position: ${({ width, height, dimensions }) => {
      const hasDimension = !isEmpty(dimensions);
      const hasWidthHeight = !isEmpty(width) && !isEmpty(height);
      return hasDimension || hasWidthHeight ? 'absolute' : 'relative';
    }};
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: none;
    vertical-align: middle;
    border-radius: 4px;
  }
  &.loaded {
    .image {
      display: inline-block;
    }
  }
  .image-loading {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0000);
    visibility: hidden;
  }
`;

export const Picture = (props: PictureProps) => {
  const {
    className,
    src,
    width,
    height,
    dimensions,
    retina,
    noPlaceholder,
    pictureTag,
    isCover,
    isContain,
    ...rest
  } = props;

  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const styles = {
    backgroundImage: "url('".concat('k', "')"),
    backgroundSize: ''.concat(isContain ? 'contain' : 'cover'),
  };

  const handleImageLoaded = () => {
    if (imageRef.current?.complete) {
      setLoaded(true);
    }
  };
  useEffect(() => {
    if (imageRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <StyledPicture
      className={clsx(className, { loaded: loaded })}
      width={width}
      height={height}
      dimensions={dimensions}
      loaded={loaded}
      isCover={isCover}
      isContain={isContain}
      style={isCover && loaded ? styles : {}}
    >
      {(width && height) ||
        (dimensions && !noPlaceholder && !loaded && (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABv1BMVEUAAAD////////////////////////////////m5ubo6Ojq6urr6+vu7u7v7+/w8PDx8fHy8vLy8vLz8/Pz8/P09PT19fX19fX29vb29vbu7u7v7+/w8PDx8fHx8fHy8vLz8/Pz8/P09PT09PT09PTx8fHx8fHy8vLy8vLz8/Pz8/Pz8/P09PT09PTx8fHy8vLz8/Pz8/Pz8/Pz8/Px8fHx8fHx8fHx8fHy8vLy8vLy8vLz8/Pz8/Pz8/Pz8/Px8fHx8fHy8vLy8vLx8fHx8fHx8fHx8fHy8vLy8vLy8vLy8vLy8vLz8/Pz8/Pz8/Pz8/Pz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Py8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL8u4tzAAAAlHRSTlMAAQIDBAUGBwgKCwwNDxAREhMUFRYXGRobHR4fISQlJykrLS4wNzg8PT9BQkNESU1SU1VYW1xdXl9gY2ZnaGlub3d5gIKDhIaHiIuMj5CRkpOUmJmam5ydn6Gio6SoqquwsbO0tre6u72+wMTFx8jKy8zO0dXX2Nvc3+Hi4+Xm5+jp6+zt7vDx8vP09fb3+Pn6+/z9j0GhsQAAAAFiS0dEAf8CLd4AAAIXSURBVFjDY2AYBXQEfHbR5uTrZtSO6ZkyZYoJmdrlPOumgEEeObq5rQunwIEsyU7XjWqfggScSNMu6lg6BRUUk6Cb1Sh90hQMoEisdiW/uinYgAvp4YYKKojQruLfgqEvOg3GUiEYbmWY1rYaMPCVQ9lepIfblBxpUKB0QTjVTHjCrR6bryc7s4CljaF8dRLDrV4XpsQXIhCI1e1urThCPVsKrogtF2IiMxYDHHBon+zGgqRKogEsqIPFgAjs+uvQ1GpOBImG4ndBTUpIMBT4iKCrMwUJe2AxQGIyVHumKplFRhZEfwATuUWWLVh/AiPZZR5/P1B/hzAFZW4qKMeAWWI6usQAdU5UAyyABliCGFYTpxAHauVQDODtnTJFG8Som0IsCEB1QvyUKWogehLRBsShGmBIqQEcbRQawBBFqQH6lBrA2kyMAUXWos04DGAIQzMgvAtdd2eEBjCxh+EyQAvVgGYuIxTdk5KM2MHqNHAZwCyDYoA7A0MQctkmD1PHVIXDAAiAGdApCAyWbLj+Ah6EEleiDPADcSSboLwSIeT2BjEG9EuCeXqQoqpSAkVNPhEGREK5buCSHK1hYk/YgMkKsBAD1qqtymhqhCcQNCAZzhdv7NPFUJRB0AANhICOAaaiOEIGZBEoAAkaYEmpAUajBlBuAFlF2qAxoJtoA6KwG5BItAFm2A0Q8I4jCsTaMDKMAioBAFxWB2a5GC1fAAAAAElFTkSuQmCC"
            alt="placeholder"
            className="placeholder"
          />
        ))}
      {!isCover && (
        <img
          ref={imageRef}
          className="image"
          src={src}
          srcSet={retina ? 'null' : undefined}
          onLoad={handleImageLoaded}
          alt=""
          {...rest}
        ></img>
      )}
      {isCover && (
        <img
          ref={imageRef}
          className="image-loading"
          src={src}
          srcSet={retina ? 'null' : undefined}
          onLoad={handleImageLoaded}
          alt=""
          {...rest}
        />
      )}
    </StyledPicture>
  );
};

export default Picture;
