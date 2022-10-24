import { FC, memo } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export interface AppModalProps extends ReactModalProps {
  transitionTime?: number;
}

const GlobalModalStyle = styled.createGlobalStyle<{
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

  ${({ isOpen }) => {
    return isOpen
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
      : '';
  }}
`;

export const AppModal: FC<AppModalProps> = memo((props: AppModalProps) => {
  const { children, isOpen, transitionTime = 0, ...rest } = props;

  return (
    <ReactModal isOpen={isOpen} {...rest} shouldCloseOnEsc>
      <GlobalModalStyle transitionTime={transitionTime} isOpen={isOpen} />
      {children}
    </ReactModal>
  );
});
