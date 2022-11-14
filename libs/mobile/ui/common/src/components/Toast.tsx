import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

import { successIcon } from '../utils/helpers';
import { colors, zIndex } from '../utils/useProperties';
import { Box, getBox } from '../utils/utils';

const toastAnimation = keyframes`
  0%,
  100% {
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
`;

export const StyledToast = styled(Box)<{
  show?: boolean;
  type?: string;
  timeout?: number;
}>`
  width: 280px;
  opacity: 0.95;
  border-radius: 16px;
  padding: 16px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  ${({ type }) =>
    'success' === type
      ? css`
          top: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          bottom: 50px;
        `};
  z-index: ${zIndex.toast};
  animation: ${toastAnimation} ${({ timeout }) => timeout}ms ease-in-out;

  ${({ type }) => {
    return 'success' === type
      ? css`
          color: ${colors.deepGreen};
          background-color: ${colors.lightSage};
        `
      : 'warning' === type
      ? css`
          color: ${colors.red};
          background-color: ${colors.lightRed};
        `
      : 'failure' === type
      ? css`
          color: ${colors.white};
          background-color: ${colors.failure};
          min-width: 343px;
          padding: 12px 16px;
          border-radius: 8px;
        `
      : '';
  }}
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

export const StyledIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

const BoxP = getBox('p');

const StyledMessage = styled(BoxP)`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.4px;
  margin: 0;
  text-align: center;
`;

type Props = {
  [x: string]: any;
  icon: any;
  type?: string;
  show?: boolean;
  message: any;
  onHide: any;
  timeout?: number;
};
export const Toast = (props: Props) => {
  const {
    icon,
    type = 'success',
    show = false,
    message,
    onHide,
    timeout = 2000,
    ...restProps
  } = props;

  const [node, setNode] = useState(null);

  useEffect(() => {
    setNode(document.body);
  }, []);

  let customIcon = icon;

  if ('string' === typeof icon)
    switch (icon) {
      case 'success':
        customIcon = <img src={successIcon} alt={'success-icon'} />;

        break;
      default:
        customIcon = null;
    }
  return node && show
    ? createPortal(
        <div className="tiki-common-ui-toast">
          <StyledToast
            show={show}
            onAnimationEnd={onHide}
            timeout={timeout}
            type={type}
            {...restProps}
          >
            {customIcon && (
              <StyledIconContainer>{customIcon}</StyledIconContainer>
            )}
            <StyledMessage>{message}</StyledMessage>
          </StyledToast>
        </div>,

        node
      )
    : null;
};
