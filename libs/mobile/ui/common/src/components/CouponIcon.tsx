import styled from 'styled-components';

import { Image } from './Image';

export const CouponIcon = styled(Image)<{ disabled?: boolean }>`
  object-fit: contain;
  border-radius: 8px;
  filter: ${({ disabled }) => disabled && 'grayscale(1)'};
  opacity: ${({ disabled }) => disabled && '0.4 !important'};
`;
