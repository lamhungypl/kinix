import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../utils/utils';
import {
  AbsoluteImgBoxWithOpacity,
  AspectRatioBox,
  BoxAWithStyle,
  ImgBoxWithOpacity,
} from './Styled';

type Props = {
  [x: string]: any;
  src: any;
  alt?: string;
  onClick?: any;
  href?: '';
  ratio?: any;
};

export const Image = (props: Props) => {
  const {
    src,
    alt = 'image',
    onClick,
    href = '',
    ratio = null,
    ...restProps
  } = props;

  const [imageLoaded, setImageLoaded] = useState(false);

  const imgRef = React.useRef<HTMLImageElement>();
  const aspectRatioBoxRef = React.useRef();

  const b = React.useCallback(() => {
    setImageLoaded(true);
  }, []);

  React.useEffect(() => {
    imgRef.current && imgRef.current.complete && setImageLoaded(true);
  }, []);

  const imgProps = {
    src: src,
    alt: alt,
    ref: imgRef,
    onLoad: b,
    onClick: onClick,
    opacity: imageLoaded ? 1 : 0,
    ...restProps,
  };

  const imgBoxComponent = ratio ? (
    <AspectRatioBox
      ratio={ratio}
      imageIsLoaded={imageLoaded}
      ref={aspectRatioBoxRef}
    >
      <AbsoluteImgBoxWithOpacity {...imgProps} />
    </AspectRatioBox>
  ) : (
    <ImgBoxWithOpacity {...imgProps} />
  );

  return href ? (
    <BoxAWithStyle href={href}>{imgBoxComponent}</BoxAWithStyle>
  ) : (
    imgBoxComponent
  );
};
