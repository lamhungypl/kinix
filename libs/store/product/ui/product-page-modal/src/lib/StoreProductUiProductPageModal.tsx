import { AppModal } from '@kiti/shared/ui/app-modal';
import { colors } from '@kiti/shared/ui/theme';
import { ProductPageHeader } from '@kiti/store/product/ui/product-page-header';
import { ProductProperties } from '@kiti/store/product/ui/product-properties';
import React from 'react';
import styled from 'styled-components';

import { modalProps } from './data';
import { actionNames } from './modalAction';

export const StyledProductPageModal = styled.div`
  margin: 56px 0px 0px;
  &.override-style-modal {
    margin: 90px 0px 0px !important;
    header {
      padding-top: 60px;
      padding-bottom: 30px;
    }
    .reviews {
      height: 100vh;
      .infinite-scroll-component {
        height: 100vh !important;
      }
    }
  }
  .btn-text-link {
    text-transform: uppercase;
    margin-left: 14px;
    color: ${colors.blue};
    position: relative;
    font-weight: 500;
    line-height: 20px;
    font-size: 13px;
  }
  .btn-text-link:before {
    content: '';
    position: absolute;
    top: 9px;
    left: -8px;
    width: 2px;
    height: 2px;
    background-color: #000;
    border-radius: 50%;
  }
  .modal-body {
    min-height: calc(100vh - 56px);
  }
  .section {
    padding: 12px 16px;
    background: ${colors.white};
  }
  .btn-action {
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.lightRed};
    color: ${colors.white};
    font-size: 15px;
    line-height: 24px;
    padding: 10px 0px;
    text-align: center;
    margin: 12px 16px;
    border-radius: 4px;
  }
  .disable {
    background-color: ${colors.disabled};
  }
  .virtual-type-specifications {
    font-size: 15px;
    padding: 1px 12px;
    background: white;
  }
`;

type Props = {
  actionModal: any;
  onCloseHandler: any;
};

type State = {};

export class ProductPageModal extends React.Component<Props, State> {
  renderActionComponent(actionName: string, data: any) {
    const { updateSelectConfigurable, onDone } = data;
    switch (actionName) {
      case actionNames.OPTIONS: {
        return (
          <ProductProperties
            updateSelectConfigurable={updateSelectConfigurable}
            onDone={onDone}
          />
        );
      }

      default:
        break;
    }
  }
  getCustomHeaderStyle(actionName: string) {
    return actionName === actionNames.OPTIONS
      ? {
          position: 'sticky',
          marginTop: -56,
        }
      : {};
  }
  render() {
    const { actionModal, onCloseHandler, ...rest } = modalProps;
    const { isOpen, actionName, title, data, isImportModal } = actionModal;

    return isImportModal ? (
      <AppModal
        isOpen={isOpen}
        onRequestClose={onCloseHandler}
        closeTimeoutMS={400}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            zIndex: 98,
          },
          content: {
            border: 'none',
            borderRadius: 0,
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            padding: '0',
            backgroundColor: colors.veryLightPink,
          },
        }}
        ariaHideApp={false}
      >
        <StyledProductPageModal {...rest}>
          <ProductPageHeader
            title={title}
            closeable={true}
            actionHandler={onCloseHandler}
            style={this.getCustomHeaderStyle(actionName)}
          />
          {this.renderActionComponent(actionName, data)}
        </StyledProductPageModal>
      </AppModal>
    ) : null;
  }
}

export default ProductPageModal;
