import React, { memo } from 'react';
import styled from 'styled-components';

export interface ProductPriceProps {
  price: number;
  listPrice: number;
  discountRate: number;
}

const StyledProductPrice = styled.div`
  .product-price {
    &__current-price {
      font-size: 24px;
      line-height: 32px;
      margin-right: 8px;
      font-weight: 500;
    }
    &__list-price {
      margin-right: 10px;
      text-decoration: line-through;
      font-size: 13px;
      line-height: 20px;
    }
    &__discount-rate {
      font-size: 13px;
      line-height: 20px;
    }
  }
`;

export const ProductPrice = memo((props: ProductPriceProps) => {
  const { price, listPrice, discountRate, ...rest } = props;

  return (
    <StyledProductPrice {...rest}>
      <div className="product-price">
        {price && <span className="product-price__current-price">{price}</span>}
        {listPrice && price && price && listPrice && (
          <>
            <span className="product-price__list-price">{listPrice}</span>
            <span className="product-price__discount-date">{`-${discountRate}%`}</span>
          </>
        )}
      </div>
    </StyledProductPrice>
  );
});
