import { colors } from '@kiti/shared/ui/theme';
import { convertPriceVND } from '@kiti/shared/utils/currency-helpers';
import styled from 'styled-components';

export const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
export const StyledPrice = styled.div<{ hasDiscount?: boolean }>`
  color: ${({ hasDiscount }) => {
    return hasDiscount ? colors.red_60 : colors.gray_90;
  }};
  font-size: 24px;
  line-height: 32px;
  margin-right: 8px;
  font-weight: 500;
`;

export const StyledCrossedOutPrice = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-right: 10px;
  text-decoration: line-through;
  color: ${colors.gray_60};
`;

export const StyledDiscountPercentage = styled.div`
  font-size: 14px;
  color: ${colors.red_60};
  background: ${colors.red_10};
  box-shadow: inset 0px 0px 0px 1px ${colors.red_60};
  border-radius: 2px;
  min-width: 36px;
  min-height: 20px;
  text-align: center;
  padding: 0px 3px;
  line-height: 20px;
`;

type Props = {
  price: any;
  originalPrice: any;
  discountRate: any;
  style?: any;
  [x: string]: any;
};
export const ProductPrice = (props: Props) => {
  const { price, originalPrice, discountRate, style, ...rest } = props;

  const hasDiscountRate = discountRate > 0;
  return (
    <StyledPriceContainer style={style} {...rest}>
      {price && (
        <StyledPrice hasDiscount={hasDiscountRate}>
          {convertPriceVND(price)}
        </StyledPrice>
      )}
      {hasDiscountRate && (
        <>
          {Boolean(originalPrice) && (
            <StyledCrossedOutPrice>
              {convertPriceVND(originalPrice)}
            </StyledCrossedOutPrice>
          )}
          <StyledDiscountPercentage>{`${discountRate}%`}</StyledDiscountPercentage>
        </>
      )}
    </StyledPriceContainer>
  );
};
