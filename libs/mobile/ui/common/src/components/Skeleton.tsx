import clsx from 'clsx';
import styled, { css, keyframes } from 'styled-components';

import { Box } from '../utils/utils';

const animation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const SkeletonContainer = styled(Box)<{ animating: boolean }>`
  background: #efefef;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 74.5%, 0.2) 25%,
    hsla(0, 0%, 50.6%, 0.24) 37%,
    hsla(0, 0%, 74.5%, 0.2) 63%
  );
  background-size: 400% 100%;
  animation: ${({ animating }) => {
    return animating
      ? css`
          ${animation} 1.4s ease infinite
        `
      : 'none';
  }};
`;

export const Skeleton = (props: { [x: string]: any }) => {
  const { className, ...restProps } = props;

  return (
    <SkeletonContainer
      animating
      className={clsx('skeleton', className)}
      {...restProps}
    />
  );
};
