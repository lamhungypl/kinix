import React from 'react';
import styled from 'styled-components';
import { Box } from '../utils/utils';
import { Image } from './Image';
import { Skeleton } from './Skeleton';
import {
  CouponSkeletonInner,
  placeholderImage,
  StretchedCouponSkeletonContainer,
} from './Styled';

export const StyledTagListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 12px;
  /* full width minus left coupon icon width */
  width: calc(100% - 104px);
`;
export const SomeStyled = styled(Box)`
  min-width: 104px;
  width: 104px;
  height: 104px;

  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
`;
type Props = {};

const AnimateSkeleton = ({ animating }) => {
  return (
    <StretchedCouponSkeletonContainer animating={animating}>
      <CouponSkeletonInner display="flex">
        <SomeStyled ml={'0px'}>
          <Image
            src={placeholderImage}
            width={88}
            height={88}
            borderRadius={8}
            alt="placeholder-image"
          />
        </SomeStyled>
        <StyledTagListContainer p={12}>
          <Skeleton width={'85%'} height={20} mb={4} borderRadius={4} />
          <Skeleton width={'70%'} height={16} mb={4} borderRadius={4} />
          <Skeleton width={'50%'} height={16} mb={4} borderRadius={4} />
          <Skeleton width={48} height={26} mb={4} borderRadius={4} />
        </StyledTagListContainer>
      </CouponSkeletonInner>
    </StretchedCouponSkeletonContainer>
  );
};

export default AnimateSkeleton;
