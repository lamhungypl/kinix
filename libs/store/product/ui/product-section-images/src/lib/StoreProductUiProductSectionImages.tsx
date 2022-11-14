import { ImagesCarousel } from '@kiti/store/product/ui/images-carousel';
import { ProductImageSliderPreview } from '@kiti/store/product/ui/product-image-slider-preview';
import {
  StyledImageSlider,
  StyledProductImage,
} from '@kiti/store/product/ui/product-image-styled';
import { withVideoProductImage } from '@kiti/store/product/ui/product-image-with-video';
import { isEmpty, merge, noop } from 'lodash-es';
import { FC, SetStateAction, useCallback, useEffect, useState } from 'react';

import { propsComponent } from '../../../product-section-images/src/lib/propsComponent';
import { propsNextPage } from './propsNextPage';
import { propsRouter } from './propsRouter';

const useImagesSlide = (props: { id: any; spId: any; propImages: any }) => {
  const { id, spId, propImages } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isOpenPreview, setIsOpenPreview] = useState(false);

  useEffect(() => {
    setIsOpenPreview(false);
    setCurrentIndex(0);
  }, [id, spId]);

  useEffect(() => {
    setIsOpenPreview(false);
    setCurrentIndex(0);
  }, [propImages]);

  const updateCurrentIndex = useCallback((e: number) => {
    setCurrentIndex(e);
  }, []);

  const openPreviewImage = useCallback(() => {
    setIsOpenPreview(true);
  }, []);

  return {
    currentIndex: currentIndex,
    isOpenPreview: isOpenPreview,
    closePreviewImage: useCallback(() => {
      setIsOpenPreview(false);
    }, []),
    openPreviewImage: openPreviewImage,
    updateCurrentIndex: updateCurrentIndex,
  };
};

type Props = {
  id: any;
  spId: any;
  name: any;
  images?: any;
  onBookReviewClick?: (...args: any[]) => void;
  badgesNew?: any[];
  productImages: any;
  hasBookPreview?: any;
  needPreviewList?: true;
};

const mergedProps: Props = merge(propsNextPage, propsRouter, propsComponent);

export const ProductSectionImages: FC<Partial<Props>> = (
  props = mergedProps
) => {
  const {
    id,
    spId,
    name,
    images,
    onBookReviewClick = noop,
    badgesNew = [],
    productImages,
    hasBookPreview,
    needPreviewList = true,
  } = mergedProps;

  const {
    currentIndex,
    isOpenPreview,
    closePreviewImage,
    openPreviewImage,
    updateCurrentIndex,
  } = useImagesSlide({
    id: id,
    spId: spId,
    propImages: images,
  });

  const productImagesClone =
    2 === productImages.length
      ? [].concat(productImages, productImages)
      : productImages;

  if (productImagesClone.length > 30) {
    productImagesClone.length = 30;
  }
  return (
    <StyledProductImage>
      <StyledImageSlider>
        <div className="images-wrapper">
          {isOpenPreview ? (
            <ProductImageSliderPreview
              isOpen={isOpenPreview}
              onCloseHandler={closePreviewImage}
              onChangeCurrentIndex={updateCurrentIndex}
              index={currentIndex}
              data={productImages}
              id={id}
              hasBookPreview={hasBookPreview}
              onBookReviewClick={onBookReviewClick}
            />
          ) : (
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
            />
          )}
          {needPreviewList && productImagesClone.length > 1 && (
            <span
              style={{
                bottom:
                  isEmpty(badgesNew) || 0 !== currentIndex
                    ? '12px'
                    : isEmpty(badgesNew)
                    ? '36px'
                    : '44px',
              }}
              className="image-total"
            >
              {`${currentIndex + 1}/${productImagesClone.length || 1}`}
            </span>
          )}
          <ImagesCarousel
            images={productImagesClone}
            renderItem={withVideoProductImage({
              id: id,
              name: name,
              hasBookPreview: hasBookPreview,
              onBookReviewClick: onBookReviewClick,
              openPreviewImage: openPreviewImage,
              badgesNew: badgesNew,
              currentIndex: currentIndex,
              isOpenPreview: isOpenPreview,
            })}
            transitionEnd={updateCurrentIndex}
            currentIndex={currentIndex}
          />
        </div>
      </StyledImageSlider>
    </StyledProductImage>
  );
};
