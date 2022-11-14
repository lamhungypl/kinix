import styled from 'styled-components';

import { colors } from '../utils/useProperties';
import { getBox } from '../utils/utils';
import { baseCouponTypographyStyle } from './CouponIconText';

const BoxH4 = getBox('h4');

export const CouponHeading = styled(BoxH4)`
  ${baseCouponTypographyStyle}

  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  max-height: 20px;
  color: ${({ disabled }) => {
    return disabled ? colors.warmGrey : colors.black;
  }};
`;
