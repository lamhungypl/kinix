import styled from 'styled-components';
import { colors } from '../utils/useProperties';
import { getBox } from '../utils/utils';

export const baseCouponTypographyStyle =
  '\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;  \n  letter-spacing: 0;\n  margin: 0;\n  padding: 0;\n';

const BoxP = getBox('p');

export const CouponText = styled(BoxP)`
  ${baseCouponTypographyStyle}

  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  max-height: 16px;
  color: ${colors.warmGrey};
`;

export const CouponIconText = styled(BoxP)<{ disabled?: boolean }>`
  ${baseCouponTypographyStyle}

  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  max-height: 24px;
  -webkit-line-clamp: 2;
  color: ${({ disabled }) => {
    return disabled ? colors.warmGrey : colors.black;
  }};
`;
