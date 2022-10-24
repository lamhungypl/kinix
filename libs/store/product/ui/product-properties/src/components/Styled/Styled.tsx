import { colors } from '@kiti/shared/ui/theme';
import styled, { css } from 'styled-components';

export const StyledProductProperties = styled.div`
  min-height: calc(100vh - 56px);
  background: ${colors.white};
  color: ${colors.black86};
`;
export const BaseText = styled.div`
  font-size: 13px;
  line-height: 20px;
`;

const textStyle = css<{ small?: boolean; bold?: boolean }>`
  ${({ small }) => {
    if (small) {
      return `
        font-size: 11px;
        line-height: 16px;
  `;
    }
  }}
  ${({ bold }) => {
    if (bold) {
      return `
        font-weight: 500;
      `;
    }
  }}
`;

export const Text = styled(BaseText)`
  ${textStyle}
`;

export const SecondaryText = styled(BaseText)`
  color: ${colors.muted};
  ${textStyle}
`;

export const ProductInfoHeader = styled.div`
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.baseGray};
  position: sticky;
  top: 56px;
  background: ${colors.white};
  z-index: 2;
`;

export const ImageContainer = styled.div`
  min-width: 104px;
  max-width: 104px;
  height: 104px;
  align-self: flex-start;
  position: relative;
`;

export const SizeChartButton = styled.button`
  display: block;
  outline: none;
  border: none;
  background: none;
  margin-top: 4px;
  padding: 0px;
  color: ${colors.blue};
`;

export const TextDetailContainer = styled.div`
  margin-left: 8px;
  .product-price {
    margin-top: 4px;
  }
  .product-price__current-price {
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
  }
`;

export const ZoomIcon = styled.img`
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
`;
