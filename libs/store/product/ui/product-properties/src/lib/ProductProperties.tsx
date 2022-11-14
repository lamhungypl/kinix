import { useModal1 } from '@kiti/shared/hooks/use-modal';
import { ImagePreview } from '@kiti/shared/ui/image-preview';
import { ImageWrapper } from '@kiti/shared/ui/image-wrapper';
import { MaxLineHelper } from '@kiti/shared/ui/max-line-helper';
import { modalProps } from '@kiti/shared/utils/app-store';
import { getStoredImageURL } from '@kiti/shared/utils/image-helpers';
import ProductOptions from '@kiti/store/product/ui/product-options';
import { ProductPrice } from '@kiti/store/product/ui/product-price';
import {
  getSelectedOptions,
  productsToImages,
  productToOptionsValues,
  productVariantOptionsFactory,
} from '@kiti/store/product/utils/product-helpers';
import React, { useMemo, useState } from 'react';

import {
  ImageContainer,
  ProductInfoHeader,
  SizeChartButton,
  StyledProductProperties,
  ZoomIcon,
  Text,
  TextDetailContainer,
  SecondaryText,
} from '../components/Styled/Styled';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Noop = () => {};

type Props = {
  handleProductActionModal?: any;
  updateSelectConfigurable: any;
  // actionModal?: any;
  onDone: any;
};

export const ProductProperties = (props: Props) => {
  const {
    handleProductActionModal,
    updateSelectConfigurable,
    onDone,
    ...restProps
  } = props;

  const actionModal = modalProps.actionModal;

  const actionModalData = actionModal.data;
  const {
    product,
    selectedProduct,
    selectedProductImages,
    needGetDataFromServer,
  } = actionModalData;

  const { configurable_options, configurable_products } = product;

  const [productPropertiesState, setProductPropertiesState] = useState(() => {
    return {
      product: product,
      productOptions: getSelectedOptions(product, selectedProduct) || [],
      selectedProduct: selectedProduct,
      selectedProductImages: selectedProductImages,
      isSelectFullOptions: configurable_options.every(({ code }) => {
        return selectedProduct[code];
      }),
    };
  });

  const { show: show1, open: open1, close: close1 } = useModal1(false);
  const { show: show2, open: open2, close: close2 } = useModal1(false);

  const configurableProductsInfo = useMemo(() => {
    return productVariantOptionsFactory({
      configurableOptions: productPropertiesState.productOptions,
      configurableProducts: configurable_products,
    });
  }, [configurable_products, productPropertiesState.productOptions]);

  const {
    product: state_product = {} as any,
    productOptions,
    selectedProduct: state_selectedProduct = {} as any,
    selectedProductImages: state_selectedProductImages = [],
    isSelectFullOptions: state_isSelectFullOptions,
  } = productPropertiesState;

  const state_productId = state_product?.id;

  const currentSellerName = state_product?.current_seller?.name;
  const state_productName = state_product?.name;

  const {
    price: state_selectedProductPrice,
    size_chart: state_selectedProductSizeChart = [],
  } = state_selectedProduct;

  const productPreviewData = useMemo(
    () => productsToImages(state_selectedProductSizeChart),
    [state_selectedProductSizeChart]
  );

  const hasPreview = Boolean(productPreviewData.length);

  const state_selectedPreview =
    state_selectedProductImages[0]?.image?.medium_url || '';

  const isAddToCart = actionModalData.isAddToCart;
  // const addToCartHandler = actionModalData.addToCartHandler;
  const selectedProductId = state_selectedProduct.id;

  const productOptionsValues = useMemo(
    () => productToOptionsValues(productOptions, state_selectedProduct),
    [productOptions, state_selectedProduct]
  );

  const optionsString = productOptionsValues.optionsString;
  const valuesString = productOptionsValues.valuesString;

  const submitBuyAction = () => {
    handleProductActionModal(false, '', '', {});

    const someN = [
      { ...state_product, productId: selectedProductId, qtyNumber: 1 },
    ];

    if (isAddToCart) {
      // addToCartHandler(someN);
    }

    if (onDone && typeof onDone === 'function') {
      onDone({
        selectedProduct: state_selectedProduct,
        product: state_product,
      });
    }

    console.log('any');
  };

  return state_productId ? (
    <StyledProductProperties {...restProps}>
      {show1 && (
        <ImagePreview
          isOpen={show1}
          onCloseHandler={close1}
          data={state_selectedProductImages}
          zIndex={100}
        ></ImagePreview>
      )}
      {show2 && (
        <ImagePreview
          isOpen={show2}
          onCloseHandler={close2}
          data={productPreviewData}
          zIndex={100}
        ></ImagePreview>
      )}
      <ProductInfoHeader>
        <div>
          <ImageContainer onClick={open1}>
            <ImageWrapper
              src={getStoredImageURL(state_selectedPreview, 208)}
              alt={state_productName}
              allowLazyLoad={false}
              allowResponsive={false}
              ratio={1}
            />
            <ZoomIcon
              src={
                'https://frontend.tikicdn.com/_mobile-next/static/img/iconsZoom.svg'
              }
              alt="zoom-icon"
              width={16}
              height={16}
            ></ZoomIcon>
          </ImageContainer>
          {hasPreview && (
            <SizeChartButton onClick={open2}>
              <Text>Bảng kích thước</Text>
            </SizeChartButton>
          )}
        </div>
        <TextDetailContainer>
          <MaxLineHelper maxLine={2} style={{ marginBottom: 4 }}>
            <Text>{state_productName}</Text>
          </MaxLineHelper>
          {state_selectedProductPrice && (
            <>
              <MaxLineHelper maxLine={1} style={{ height: 16 }}>
                <SecondaryText small as="span">
                  {`${optionsString}:\xa0`}
                </SecondaryText>
                <Text small bold as="span">
                  {valuesString}
                </Text>
              </MaxLineHelper>
              <MaxLineHelper maxLine={1} style={{ height: 16 }}>
                <SecondaryText small as="span">
                  Cung cấp bởi:\xa0
                </SecondaryText>
                <Text small bold as="span">
                  {currentSellerName}
                </Text>
              </MaxLineHelper>
              <ProductPrice
                price={state_selectedProductPrice}
                listPrice={0}
                discountRate={0}
              />
            </>
          )}
        </TextDetailContainer>
      </ProductInfoHeader>

      {productOptions.length && (
        <ProductOptions
          productOptions={productOptions}
          configurableProductsInfo={configurableProductsInfo}
          selectedProduct={state_selectedProduct}
          setState={setProductPropertiesState}
          id={state_productId}
          updateSelectConfigurable={updateSelectConfigurable}
          needGetDataFromServer={needGetDataFromServer}
        />
      )}
      <div
        className={
          state_isSelectFullOptions ? 'btn-action' : 'btn-action disable'
        }
        onClick={state_isSelectFullOptions ? submitBuyAction : Noop}
      >
        <span>{isAddToCart ? 'Chọn mua' : 'Xong'}</span>
      </div>
    </StyledProductProperties>
  ) : null;
};
export default ProductProperties;
