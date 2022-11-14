import { colors } from '@kiti/shared/ui/theme';
import styled, { css } from 'styled-components';

export const StyledProductImage = styled.div`
  display: block;
  position: relative;
  background: white;
`;

export const StyledImageSlider = styled.div<{ isPreview?: boolean }>`
  position: relative;
  display: flex;
  z-index: 1;
  height: calc(100% - 75px);
  ${({ isPreview }) => (isPreview ? 'min-height: calc(100% - 75px);' : '')}

  .image-total {
    position: absolute;
    bottom: 12px;
    right: 12px;
    padding: 4px 6px;
    border-radius: 2px;
    background: rgba(36, 36, 36, 0.5);
    z-index: 2;
    color: white;
    font-size: 11px;
    line-height: 16px;
    transition: bottom 500ms;
  }
  > div {
    text-align: center;
    .first {
      display: inline-block;
      vertical-align: middle;
      max-width: 100%;
    }
  }
  .images-wrapper {
    width: 100vw;
    position: relative;
  }
  .carousel {
    position: relative;
    z-index: 1;
    background: white;
    visibility: initial !important;
    ${({ isPreview }) => (isPreview ? 'height: auto' : 'height: 100vw;')};

    > div {
      white-space: nowrap;
      align-items: center;
      > div {
        text-align: center;
        position: relative;
      }
    }
  }
  .book-review {
    position: absolute;
    bottom: 12px;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
  }
  .play-video {
    position: absolute;
    bottom: 12px;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
  }
  .picture-tag {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    > div > .book-review {
      position: relative;
      left: 0;
      bottom: 0;
      transform: none;
      display: block;
      margin: 12px;
    }
  }
`;

export const StyledPhoto = styled.div<{
  index: number;
  enabled?: boolean;
  isPreview?: boolean;
  imageUrl?: string;
}>`
  transition: all 0.3s ease-in-out;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  margin: 0 8px 0 0;
  ${({ index }) => (0 === index ? 'margin-left: 16px;' : '')}
  border:${({ enabled }) => (enabled ? `1px solid ${colors.blue}` : '')};
  border-radius: 4px;
  .review-picture {
    .placeholder {
      width: auto;
      height: auto;
    }
  }
  opacity: ${({ isPreview, enabled }) => (isPreview ? (enabled ? 1 : 0.5) : 1)};
  background: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;

export const StyledPhotosModal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .btn-back {
    border: 0;
    background: 0;
    outline: 0;
    color: ${colors.white};
    position: absolute;
    z-index: 3;
    top: 24px;
    left: 16px;
    padding: 0;
  }
  @keyframes img-animation {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes imageOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.5;
      transform: scale(0);
    }
  }
`;

export const StyledPhotoList = styled.div<{ isPreview?: boolean }>`
  z-index: 2;
  width: 100vw;
  display: flex;
  overflow: scroll;
  margin-top: 10px;
  scroll-behavior: smooth;
  ${({ isPreview }) =>
    isPreview
      ? css`
          position: absolute;
          margin: 0 0 12px;
          bottom: 0;
        `
      : ''} .image {
    border-radius: 4px;
  }
  .photo {
    transition: all 0.3s ease-in-out;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    margin: 0 8px 0 0;
    border: 1px solid #00000000;
    border-radius: 4px;
    .review-picture {
      .placeholder {
        width: auto;
        height: auto;
      }
    }
    > div {
      border-radius: 4px;
    }
  }
  .photo.preview {
    opacity: 0.5;
  }
  .photo.enabled {
    border: 1px solid ${0};
    opacity: 1;
    overflow: hidden;
  }
  .photo.first {
    margin-left: 16px;
  }
`;

export const PhotoForCustomer = styled.div`
  border-radius: 2px;
  background-color: #24242480;
  display: flex;
  position: absolute;
  z-index: 2;
  left: 12px;
  bottom: 12px;
  padding: 2px 4px;
  align-items: center;
  font-size: 11px;
  line-height: 16px;
  color: ${colors.white};
`;
