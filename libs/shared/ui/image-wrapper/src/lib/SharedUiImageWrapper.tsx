import LazyLoad from '@aliast/react-lazy-load';
import { isEmpty } from 'lodash-es';
import React, {
  forwardRef,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

export const StyledImageWrapper = styled.div<{
  imageIsLoaded: boolean;
  ratio: string;
  bg: string;
}>`
  width: 100%;
  padding-bottom: ${({ ratio }) => {
    return 'calc(100% * '.concat(ratio, ')');
  }};
  position: relative;
  background: ${({ imageIsLoaded, bg }) => {
    return imageIsLoaded ? 'transparent' : bg;
  }};
`;

export const StyledImage = styled.img<{
  opacity?: number;
}>`
  opacity: ${({ opacity }) => opacity};
  width: 100%;
  height: auto;
  transition: 0.2s opacity ease;
  object-fit: contain;
`;

export const StyledImageWithDimensions = styled(StyledImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledLink = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`;

export const StyledPlaceholder = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ bg }) => bg};
`;

type NativeImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

interface Props extends Omit<NativeImgProps, 'loading'> {
  extraSource?: any;
  href?: any;
  ratio?: any;
  dominantColor?: any;
  allowFade?: any;
  allowLazyLoad?: any;
  lazyLoadProps?: any;
  imgStyle?: any;
  loading?: boolean;
}

export const BaseImageWrapper = forwardRef<HTMLDivElement, Props>(
  function SomeImageName(props, ref) {
    const {
      src,
      srcSet,
      extraSource = {},
      alt,
      style = {},
      href = '',
      ratio = null,
      dominantColor = '#EFEFEF',
      allowFade = true,
      allowLazyLoad = true,
      lazyLoadProps = {},
      loading = false,
      imgStyle = {},
      ...restProps
    } = props;

    const [stateOpacity, setStateOpacity] = useState(
      allowFade && allowLazyLoad ? 0 : 1
    );

    const [imageIsLoaded, setImageIsLoaded] = useState(false);

    const handleOnload = useCallback(() => {
      setStateOpacity(1);
      setImageIsLoaded(true);
    }, []);

    const imgTagRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
      if (imgTagRef.current) {
        if (imgTagRef.current.complete) {
          setStateOpacity(1);
          setImageIsLoaded(true);
        }
      }
    }, []);

    const imageProps = {
      ...restProps,
      src,
      srcSet,
      alt,
      ref: imgTagRef,
      style: { ...style, ...imgStyle },
      opacity: stateOpacity,
      onLoad: handleOnload,
    };

    const pictureComponent = loading ? (
      <StyledPlaceholder bg={dominantColor} />
    ) : (
      <picture>
        {isEmpty(extraSource) && <source {...extraSource}></source>}
        <StyledImageWithDimensions {...imageProps} />
      </picture>
    );

    const componentV = ratio ? (
      <StyledImageWrapper
        imageIsLoaded={imageIsLoaded}
        ratio={ratio}
        bg={dominantColor}
        ref={ref}
        style={imageIsLoaded ? {} : style}
      >
        {allowLazyLoad ? (
          <LazyLoad
            {...lazyLoadProps}
            offsetVertical={150}
            offsetHorizontal={0}
            debounce={false}
          >
            {pictureComponent}
          </LazyLoad>
        ) : (
          pictureComponent
        )}
      </StyledImageWrapper>
    ) : (
      <StyledImage {...imageProps} />
    );
    return href ? (
      <StyledLink href={href} aria-label={`${alt}-link`}>
        {componentV}
      </StyledLink>
    ) : (
      componentV
    );
  }
);

const useResponsiveProps = (...args: any[]) => {
  const extraSource = args[1] || {};
  const n = args[2];

  const o = extraSource.srcSet;
  const argsOrSrc = void 0 === o ? args : o;

  const [value, setValue] = useState({
    src1x: null,
    extraSourceSrc1x: null,
  });

  const src1x = value.src1x;
  const extraSourceSrc1x = value.extraSourceSrc1x;
  const url1xSrc = ''.concat(src1x, ' 1x');

  const responsiveExtraSource = {
    ...extraSource,
    srcSet: ''.concat(extraSourceSrc1x, ' 1x'),
  };

  useEffect(() => {
    if (n) {
      const offsetWidth = n.offsetWidth;
      console.log(offsetWidth);

      setValue({
        src1x: 'functionLJ(args, offsetWidth)',
        extraSourceSrc1x: 'functionLJ(argsOrSrc, offsetWidth)',
      });
    }
  }, [argsOrSrc, n, args]);

  return {
    responsiveSrcset: url1xSrc,
    responsiveExtraSource: responsiveExtraSource,
    loading: !src1x,
  };
};
export const ResponsiveImageWrapper = (props: Props) => {
  const { src, srcSet, extraSource = {}, ...restProps } = props;
  const [baseImageWrapperRef, setBaseImageWrapperRef] =
    useState<HTMLDivElement>(null);

  const setRefCallback = useCallback(
    (elementRef: SetStateAction<HTMLDivElement>) => {
      if (elementRef) {
        setBaseImageWrapperRef(elementRef);
      }
    },
    []
  );

  const { responsiveSrcset, responsiveExtraSource, loading } =
    useResponsiveProps(src, extraSource, baseImageWrapperRef);

  return (
    <BaseImageWrapper
      src={src}
      srcSet={responsiveSrcset}
      extraSource={responsiveExtraSource}
      loading={loading}
      ref={setRefCallback as any}
      {...restProps}
    ></BaseImageWrapper>
  );
};

export interface ImageWrapperProps extends Props {
  allowResponsive?: boolean;
}

export function ImageWrapper(props: ImageWrapperProps) {
  const { allowResponsive = true, ...restProps } = props;
  return allowResponsive ? (
    <ResponsiveImageWrapper {...restProps} />
  ) : (
    <BaseImageWrapper {...restProps} />
  );
}
