import { colors } from '@kiti/shared/ui/theme';
import styled from 'styled-components';

export const StyledImageSlider = styled.div<{ isPreview: boolean }>`
  position: relative;
  z-index: 1;
  ${({ isPreview }) => (isPreview ? 'min-height: calc(100vh - 75px);' : '')}

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
  }
  .image-preloaded {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .product-image-slider {
    padding-top: 100%;
    position: relative;
    > picture img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .photoForCustomer {
    border-radius: 2px;
    background-color: #24242480;
    display: flex;
    position: absolute;
    z-index: 2;
    left: 12px;
    bottom: 12px;
    padding: 2px 4px;
    align-items: center;
    img {
      width: 12px;
      padding-bottom: 2px;
    }
    span {
      font-size: 11px;
      line-height: 16px;
      color: ${colors.white};
    }
  }
  .product-image {
    > .placeholder {
      height: 100vw;
    }
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
    > div {
      white-space: nowrap;
      display: flex;
      align-items: center;
      ${({ isPreview }) => (isPreview ? 'min-height: calc(100vh - 75px);' : '')}
      > div {
        text-align: center;
      }
    }
    img {
      display: inline-block;
      vertical-align: middle;
      ${({ isPreview }) =>
        isPreview
          ? `
      
      max-width: 100%;
      max-height: calc(100vh - 200px);
      width: auto;
      height: auto;
      `
          : ''};
    }
  }
  .book-review {
    position: absolute;
    bottom: 12px;
    z-index: 2;
    left: 16px;
  }
  .dots {
    text-align: center;
    width: ${60}px;
    margin: 0 auto;
    overflow: hidden;
    &__inner {
      white-space: nowrap;
      transition-duration: 0.3s;
    }
    &__item {
      display: inline-block;
      vertical-align: bottom;
      width: 6px;
      height: 6px;
      background-color: ${colors.veryLightPink};
      border-radius: 50%;
      margin: 0 3px;
      transform: scale(0.75);
      transition-duration: 0.2s;
      &--active {
        transition-delay: 0.1s;
        background-color: ${colors.blue};
        transform: scale(1);
        transition-timing-function: ease-in;
      }
    }
  }
`;

export const StyledPhoto = styled.div<{
  index?: number;
  enabled?: boolean;
  isPreview?: boolean;
  imageUrl?: string;
}>`
  transition: all 0.3s ease-in-out;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  margin: 0 8px 0 0;
  ${({ index }) => (index === 0 ? 'margin-left: 16px;' : '')}
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

export const StyledPhotoList = styled.div<{ isPreview: boolean }>`
  z-index: 2;
  width: 100vw;
  display: flex;
  overflow: scroll;
  margin-top: 10px;
  scroll-behavior: smooth;
  ${({ isPreview }) => {
    return isPreview
      ? `
      position: absolute; 
      margin: 0 0 12px;
      bottom: 0;
    `
      : '';
  }} .image {
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
