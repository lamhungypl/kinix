import { useModal1 } from '@kiti/shared/hooks/use-modal';
import { ImagePreview } from '@kiti/shared/ui/image-preview';
import { ImageWrapper } from '@kiti/shared/ui/image-wrapper';
import { MaxLineHelper } from '@kiti/shared/ui/max-line-helper';
import {
  useAsa,
  useConfigurableSelector,
  useDataSelector,
} from '@kiti/shared/utils/app-store';
import { ProductPageModal } from '@kiti/store/product/ui/product-page-modal';
import {
  productsToImages,
  productToOptionsValues,
} from '@kiti/store/product/utils/product-helpers';
import { noop } from 'lodash-es';
import { useMemo } from 'react';
import styled from 'styled-components';

import {
  SizeChartButton,
  Text,
} from '../../../product-styled/src/lib/StoreProductUiProductStyled';

export const StyledOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #242424;
  padding: 8px 8px 8px 12px;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-top: 8px;
  .option-detail {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 13px;
    line-height: 20px;
    &__name {
      color: #787878;
    }
    &__value {
      font-weight: 500;
    }
  }
  .option-control {
    display: flex;
    align-items: center;
    margin-left: 12px;
    &__change {
      color: '#0d5cb6';
      text-transform: uppercase;
    }
  }
`;

export const OptionImageContainer = styled.div`
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  margin-right: 8px;
`;
type Props = {
  [x: string]: any;
  productImages: any;
  router?: any;
};
export const ProductConfigurable = (props: Props) => {
  const { productImages, router, ...rest } = props;

  const { productDetail, firstProductImage } = useDataSelector();

  const { url_key: productUrlKey, configurable_options = [] } = productDetail;

  const { configurableSelected, setIsUpdateVariation } =
    useConfigurableSelector();

  const onOpenModalHandler = noop;

  const { open, show, close } = useModal1(false);

  const {
    open: openProductConfigurable,
    show: isShowProductConfigurable,
    close: closeProductConfigurable,
  } = useModal1(false);

  const sizeChart = configurableSelected?.size_chart || [];
  const imagesChartData = productsToImages(sizeChart);
  const hasSizeChart = Boolean(imagesChartData.length);

  const isFirstProductImagePreview =
    configurable_options.find(({ show_preview_image }) => {
      return show_preview_image;
    }) && firstProductImage;

  const isFirstProductImagePreviewUrl =
    isFirstProductImagePreview?.large_url || '';

  const isFirstProductImagePreviewUrl_ = '';

  const configurableMemo = useMemo(
    () => productToOptionsValues(configurable_options, configurableSelected),
    [configurableSelected, configurable_options]
  );
  const { optionsString, valuesString } = configurableMemo;

  const onDoneHandler = noop;
  const handleClickOption = () => {
    onOpenModalHandler();

    openProductConfigurable();
  };
  return (
    <>
      {isShowProductConfigurable && (
        <ProductPageModal
          actionModal={undefined}
          onCloseHandler={closeProductConfigurable()}
        />
      )}
      <StyledOption onClick={handleClickOption}>
        {isFirstProductImagePreviewUrl_ && (
          <OptionImageContainer>
            <ImageWrapper
              src={isFirstProductImagePreviewUrl_}
              alt={'option-preview'}
              ratio={1}
              allowResponsive={false}
              allowLazyLoad={false}
              style={{
                borderRadius: 4,
              }}
              extraSource={{
                srcSet: 'Object(_.e)(isFirstProductImagePreviewUrl_)',
                type: 'image/webp',
              }}
            />
          </OptionImageContainer>
        )}
        <div className="option-detail">
          <MaxLineHelper maxLine={1}>
            <div className="option-detail__name">{optionsString}</div>
          </MaxLineHelper>
          <MaxLineHelper maxLine={1}>
            <div className="option-detail__value">
              {valuesString || 'Chọn loại'}
            </div>
          </MaxLineHelper>
        </div>
        <div className="option-control" onClick={handleClickOption}>
          <img
            src={`https://frontend.tikicdn.com/_mobile-next${'/static/img/pdp_revamp2/next.svg'}`}
            alt={'change-option'}
            width={24}
            height={24}
          />
        </div>
      </StyledOption>
      {show && (
        <ImagePreview
          isOpen={show}
          onCloseHandler={close}
          index={0}
          data={imagesChartData}
          zIndex={100}
        />
      )}
      {hasSizeChart && (
        <SizeChartButton
          onClick={open}
          style={{
            marginTop: 8,
          }}
        >
          <Text>Bảng kích thước</Text>
        </SizeChartButton>
      )}
    </>
  );
};
