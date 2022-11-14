import { CouponModal, FullCoupon } from '@kiti/mobile/ui/common';
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  data?: any;
};

type State = {};

export default class CouponItem extends Component<Props, State> {
  state = {
    isSaved: !!this.props.data?.saved,
    isOpenCouponInfo: false,
    isFirstOpenCouponInfo: false,
    toastMessage:
      'Lưu thành công. Bạn có thể xem và sử dụng mã giảm giá ở trang Giỏ Hàng',
    isShowToast: false,
    toastType: 'success',
  };
  saveCoupon(e, n) {
    return () => {
      console.log({ e, n });

      this.setState({
        isSaved: true,
        isOpenCouponInfo: false,
      });
    };
  }

  showInfo(e) {
    return () => {
      this.setState({
        isOpenCouponInfo: e,
        isFirstOpenCouponInfo: true,
      });
    };
  }

  showToast(e) {
    return () => {
      this.setState({
        isShowToast: e,
      });
    };
  }
  render() {
    const {
      isSaved,
      isOpenCouponInfo,
      isFirstOpenCouponInfo,
      toastMessage,
      isShowToast,
      toastType,
    } = this.state;

    const data = this.props.data;
    const { rule_id, coupon_code } = data || {};

    return (
      <>
        <FullCoupon
          style={{
            width: '100%',
          }}
          couponInfo={data}
          onAction={this.saveCoupon(rule_id, coupon_code)}
          status={data?.saved || isSaved ? 'saved' : 'available'}
          onInfoClick={this.showInfo(true)}
          className={'coupon-item'}
        />
        {isFirstOpenCouponInfo && (
          <CouponModal
            isOpen={isOpenCouponInfo}
            onClose={this.showInfo(false)}
            actionButtonText={'Lưu'}
            couponModalInfo={data}
            onAction={this.saveCoupon(rule_id, coupon_code)}
            status={data?.saved || isSaved ? 'saved' : 'available'}
          />
        )}
      </>
    );
  }
}
