import styled from 'styled-components';

import React from 'react';
import { AppModal } from '@kiti/shared/ui/app-modal';
import { colors } from '@kiti/shared/ui/theme';
import { isEmpty } from 'lodash-es';
import CouponItem from '../../../coupon-item/src/lib/StoreProductUiCouponItem';

const StyledCouponList = styled.div`
  .coupon-list {
    &__header {
      background-color: ${colors.primary};
      color: ${colors.white};
      padding: 10px 16px;
      position: relative;
    }
    &__title {
      font-size: 17px;
      line-height: 24px;
      font-weight: 500;
      text-align: center;
    }
    &__close {
      font-size: 24px;
      width: 24px;
      height: 24px;
      position: absolute;
      text-align: center;
      left: 10px;
      top: 10px;
    }
  }
`;

const StyledWrap = styled.div`
  background-color: ${colors.white};
  padding: 12px 16px;
  .coupon-item {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export const StyledTitle = styled.div`
  margin-bottom: 12px;
  color: ${colors.gray_90};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

type Props = {
  isOpen: any;
  onClose: any;
  data: any;
  headerStyle?: any;
  dataASACoupon: any;
  listASACoupon: any;
  fetchASACoupon: any;
};

export const CouponList = (props: Props) => {
  const {
    isOpen,
    onClose,
    data,
    headerStyle,
    dataASACoupon,
    listASACoupon,
    fetchASACoupon,
  } = props;

  return (
    <AppModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      shouldFocusAfterRender
      style={{
        overlay: {
          zIndex: 998,
        },
        content: {
          top: 'auto',
          left: '0',
          right: '0',
          bottom: '0',
          padding: '0',
          border: 'none',
          overflowY: 'auto',
          height: '100%',
          borderRadius: 0,
          backgroundColor: '#eee',
        },
      }}
      ariaHideApp={false}
    >
      <StyledCouponList className="coupon-list">
        <div className="coupon-list__header" style={headerStyle}>
          <div className="coupon-list__close" onClick={onClose}>
            ×
          </div>
          <div className="coupon-list__title">Ưu đãi</div>
        </div>
        <StyledWrap>
          {isEmpty(data) ? '' : <StyledTitle>Các mã giảm giá khác</StyledTitle>}
          {(data || []).map((el, index) => (
            <CouponItem key={index} data={el} />
          ))}
        </StyledWrap>
      </StyledCouponList>
    </AppModal>
  );
};

export default CouponList;
