import { FC, memo } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { createGlobalStyle } from 'styled-components';

/* eslint-disable-next-line */
export interface AppModalProps extends ReactModalProps {
  transitionTime: number;
}

const GlobalModalStyle = createGlobalStyle<{
  transitionTime: number;
  isOpen: boolean;
}>`

${({ transitionTime }) => {
  return `
  .ReactModal__Overlay {
    transition: all ${transitionTime}ms ease-in;
    opacity: 0;
  }
  
  .ReactModal__Overlay--after-open{
    transition: all ${transitionTime}ms ease-out;
    opacity: 1;
  }
  .ReactModal__Overlay--before-close{
    transition: all ${transitionTime}ms ease-in;
    opacity: 0;
  }
  `;
}}

${({ isOpen }) =>
  isOpen
    ? `
    html {
      overflow: hidden;
      -webkit-overflow-scrolling: touch;
    }
    body {
      overflow: hidden;
      -webkit-overflow-scrolling: touch;
      &.no-need-overflow-hidden-to-keep-sticky {
        overflow: visible!important;
      }
    }
    `
    : ''}

`;

export const AppModal: FC<AppModalProps> = (props) => {
  const { children, isOpen, transitionTime, ...rest } = props;

  return (
    <ReactModal isOpen={isOpen} {...rest} shouldCloseOnEsc>
      <GlobalModalStyle transitionTime={transitionTime} isOpen={isOpen} />
      {children}
    </ReactModal>
  );
};

export default memo(AppModal);
