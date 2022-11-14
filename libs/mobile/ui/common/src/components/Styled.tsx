import styled, { css } from 'styled-components';
import { CouponBgSizing, CouponType } from '../utils/helpers';

import { colors } from '../utils/useProperties';
import {
  Box,
  getAbsoluteStyle,
  getBox,
  WithBoxComponent,
} from '../utils/utils';

export const CouponSkeletonInner = styled(Box)`
  ${getAbsoluteStyle()}
`;
export const StretchedCouponSkeletonContainer = styled(Box)<{
  animating?: boolean;
}>`
  background: white;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  display: flex;
  box-shadow: 0px 1px 3px 0px ${colors.shadow};

  & .skeleton {
    animation: ${({ animating }) => {
      return !animating && 'initial';
    }};
  }
  ${getAbsoluteStyle()}
`;

const ImgBox = WithBoxComponent('img');

export const ImgBoxWithOpacity = styled(ImgBox)<{ opacity: number }>`
  width: 100%;
  height: auto;
  opacity: ${({ opacity }) => opacity};
  transition: 0.3s opacity ease-out;
  object-fit: contain;
`;

export const AbsoluteImgBoxWithOpacity = styled(ImgBoxWithOpacity)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const placeholderImage =
  'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2288%22%20height%3D%2288%22%20viewBox%3D%220%200%2088%2088%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%22ooegz5d46a%22%20d%3D%22M28.542%2010.826L25.132.941c-.252-.73-.992-1.117-1.649-.863L.82%208.784c-.657.253-.988%201.048-.735%201.777l3.593%2010.422V15.4c0-2.523%201.914-4.574%204.267-4.574h5.988l7.142-5.276%204.132%205.276h3.335zm3.521%203.21H7.945c-.7%200-1.27.587-1.27%201.364v16.525c.002.779.572%201.408%201.27%201.408h24.118c.7%200%201.27-.63%201.27-1.408V15.4c0-.777-.57-1.363-1.27-1.363zM30%2029.826H10v-3.509l3.307-7.048%204.613%206.027%204.33-4.67%205.563-2.113L30%2024.562v5.263z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-3491%20-2130%29%20translate%282708%2080%29%20translate%280%201862%29%20translate%28783%29%20translate%280%20140%29%20translate%280%2048%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20width%3D%2288%22%20height%3D%2288%22%20fill%3D%22%23FFF%22%20rx%3D%228%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%2824%2024%29%20translate%283.333%203.333%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23EEE%22%20xlink%3Ahref%3D%22%23ooegz5d46a%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E';

export const AspectRatioBox = styled(Box)<{
  ratio: number;
  imageIsLoaded?: boolean;
}>`
  width: 100%;
  padding-bottom: ${({ ratio }) => `calc(100% * ${ratio})`};
  position: relative;

  ${({ imageIsLoaded }) => {
    return (
      !imageIsLoaded &&
      css`
        background-image: url(${placeholderImage});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      `
    );
  }}
`;

export const BoxA = WithBoxComponent('a');
export const BoxAWithStyle = styled(BoxA)`
  width: 100%;
  /* height: 100%; */
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

export const StyledCouponContainer = styled(Box)<{
  visible?: boolean;
  type: string;
}>`
  position: relative;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: 100%;
  height: ${({ type }) => `${CouponBgSizing[type].HEIGHT}px`};
`;

export const BoxImg = getBox('img');

export const StyledImg = styled(BoxImg)`
  position: absolute;
  width: 72px;
  height: 56px;

  ${({ size }) =>
    'small' === size
      ? css`
          width: 62px;
          height: 48px;
        `
      : ''}
`;
