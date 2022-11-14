import { forwardRef, useState, useCallback } from 'react';
import styled, { CSSProperties } from 'styled-components';

type NativeImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StyledImg = styled.img`
  object-fit: contain;
`;

interface WebpImgProps extends NativeImgProps {
  containerStyle?: CSSProperties;
  onError?: any;
  ref?: React.Ref<HTMLImageElement>;
  isContain?: boolean;
  isCover?: boolean;
}

export const WebpImg = forwardRef<HTMLImageElement, WebpImgProps>(
  (props, ref) => {
    const { src, containerStyle = {}, onError } = props;
    const [isError, setIsError] = useState(false);

    const onErrorCallback = useCallback(() => {
      onError?.();
      setIsError(true);
    }, [onError]);
    return (
      <picture style={containerStyle} className="webpimg-container">
        {!isError && <source type="image/webp" srcSet={src}></source>}
        <StyledImg ref={ref} onError={onErrorCallback} src={src} {...props} />
      </picture>
    );
  }
);
