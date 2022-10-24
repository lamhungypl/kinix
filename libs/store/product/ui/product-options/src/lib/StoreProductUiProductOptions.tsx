import { ProductVariant } from '@kiti/store/product/ui/product-variants';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { SecondaryText, Text } from '../components/Styled/Styled';

export const ProductOptionsContainer = styled.div`
  padding: 12px 6px;
`;
export const VariantsGrid = styled.div<{ cols: any }>`
  display: grid;
  margin-top: 8px;
  margin-bottom: 24px;
  grid-template-columns: ${({ cols }) => `repeat${cols}, 1fr)`};
  grid-gap: 8px;
  text-align: center;
`;

type Props = {
  productOptions: any;
  configurableProductsInfo: any;
  selectedProduct: any;
  setState: any;
  id: any;
  updateSelectConfigurable: any;
  needGetDataFromServer: any;
};

const ProductOptions = (props: Props) => {
  const {
    productOptions = [],
    configurableProductsInfo = {},
    selectedProduct = {},
    setState,
    id,
    updateSelectConfigurable,
    needGetDataFromServer,
  } = props;

  const productsKeyOrder = configurableProductsInfo.productsKeyOrder;
  const productsMap = configurableProductsInfo.productsMap;
  const productsImagePreviewMap =
    configurableProductsInfo.productsImagePreviewMap;

  const configuableProducts = useMemo(() => {
    return productsKeyOrder.map((el: string | number) => productsMap[el]);
  }, [productsKeyOrder, productsMap]);

  const handleVariantSelect = (...arg: any[]) => {
    console.log({
      setState,
      id,
      updateSelectConfigurable,
      needGetDataFromServer,
      configuableProducts,
    });
  };

  return (
    <ProductOptionsContainer>
      {productOptions.map(
        (
          productOptionEl: {
            values: any;
            code: any;
            hasShortVariantsText: any;
            show_preview_image: any;
            name: any;
          },
          index: any
        ) => {
          const values = productOptionEl.values;
          const code = productOptionEl.code;
          const hasShortVariantsText = productOptionEl.hasShortVariantsText;
          const show_preview_image = productOptionEl.show_preview_image;

          const productOptionElementName = (productOptionEl.name || '').trim();
          const selectedProductCode = (selectedProduct[code] || '').trim();
          const variantsCols =
            hasShortVariantsText && !show_preview_image ? 4 : 2;
          return (
            <React.Fragment key={code}>
              <div style={{ display: 'flex' }}>
                <SecondaryText as="span">
                  {` ${productOptionElementName}: \xa0`}
                  {selectedProductCode && (
                    <Text bold as="span">
                      {selectedProductCode}
                    </Text>
                  )}
                </SecondaryText>
              </div>
              <VariantsGrid cols={variantsCols}>
                {values.map(
                  (variantElement: { label: any }, elIndex: React.Key) => {
                    const valuesLabel = variantElement.label;
                    const imagePreviewURL = show_preview_image
                      ? productsImagePreviewMap[valuesLabel]
                      : '';
                    return (
                      <ProductVariant
                        key={elIndex}
                        variant={variantElement}
                        showImagePreview={show_preview_image}
                        imagePreviewURL={imagePreviewURL}
                        onVariantSelect={handleVariantSelect}
                      ></ProductVariant>
                    );
                  }
                )}
              </VariantsGrid>
            </React.Fragment>
          );
        }
      )}
    </ProductOptionsContainer>
  );
};

export default ProductOptions;
