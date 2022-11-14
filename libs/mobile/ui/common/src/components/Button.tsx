import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../utils/useProperties';
import { getBox } from '../utils/utils';

export const BoxButton = getBox('button');

const StyledButton = styled(BoxButton)<{ size?: string; type?: string }>`
  font-weight: 500;
  letter-spacing: 0;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  outline: none;
  width: ${({ fullWidth }) => {
    return fullWidth && '100%';
  }};

  ${({ size }) => {
    return 'small' === size
      ? css`
          font-size: 13px;
          line-height: 20px;
          padding: 2px 12px;
        `
      : 'medium' === size
      ? css`
          font-size: 14px;
          line-height: 20px;
          padding: 8px 12px;
        `
      : 'large' === size
      ? css`
          font-size: 15px;
          line-height: 24px;
          padding: 10px 16px;
        `
      : '';
  }}
  ${({ type }) => {
    return 'primary' === type
      ? css`
          color: ${colors.white};
          background-color: ${colors.deepSkyBlue};
          border: 1px solid transparent;
        `
      : 'secondary' === type
      ? css`
          color: ${colors.deepSkyBlue};
          background-color: ${colors.white};
          border: 1px solid ${colors.deepSkyBlue};
        `
      : 'asa' === type
      ? css`
          color: ${colors.white};
          background-color: ${colors.purple_60};
          border: 1px solid transparent;
        `
      : 'asa-noBg' === type
      ? css`
          color: ${colors.purple_60};
          background-color: transparent;
          border: 1px solid ${colors.purple_60};
        `
      : '';
  }};
`;

type Props = React.ComponentProps<typeof StyledButton> & {
  size?: string;
  type?: string;
  fullWidth?: boolean;
};

export const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

Button.defaultProps = {
  size: 'small',
  type: 'primary',
  fullWidth: false,
};

export default Button;
