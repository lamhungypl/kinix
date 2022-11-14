import { Right } from '@kiti/shared/ui/app-icons';
import { colors } from '@kiti/shared/ui/theme';
import { useAsa, useDataSelector } from '@kiti/shared/utils/app-store';
import { get, isEmpty } from 'lodash-es';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import CouponList from '../../../coupon-list/src/lib/StoreProductUiCouponList';
import CouponTag from '../components/CouponTag';

const StyledCoupon = styled.div`
  padding: 12px 16px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  .coupon {
    &__text {
      font-size: 15px;
      font-weight: 500;
      color: ${colors.black86};
      flex: 1;
    }
    &__tags {
      display: flex;
      padding: 0 4px 0 0;
    }
    &__tag {
      padding: 6px 12px;
      border: 1px solid ${colors.blue};
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      line-height: 16px;
      color: ${colors.blue};
      position: relative;
      margin: 0 4px;
      &:before,
      &:after {
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${colors.white};
        border: 1px solid ${colors.blue};
        border-top-color: transparent;
        border-left-color: transparent;
        position: absolute;
        top: 50%;
        margin-top: -6px;
        border-radius: 50%;
      }
      &:before {
        left: -7px;
        transform: rotate(-45deg);
      }
      &:after {
        right: -7px;
        transform: rotate(135deg);
      }
    }
  }
`;

type Props = {};

export const ProductCouponSection = (props: Props) => {
  const { productDetail } = useDataSelector();

  const productId =
    productDetail?.current_seller?.product_id || productDetail?.id || null;

  const sellerId = productDetail?.current_seller?.id;

  const [openModal, setOpenModal] = useState(false);
  const { asaCouponData, fetchGetASAProductCoupon } = useAsa();

  const listAsaCouponsItems =
    get(asaCouponData, 'coupon_asa.coupons.items') || {};

  const couponNormal = get(asaCouponData, 'coupon_normal') || {};

  const couponNormalData = couponNormal?.data || [];

  const fetchGetASAProductCouponCallback = useCallback(() => {
    fetchGetASAProductCoupon({
      pId: productId,
      sellerId: sellerId,
    });
  }, [fetchGetASAProductCoupon, productId, sellerId]);

  const handleFetchCouponInit = useCallback(() => {
    setOpenModal(true);
    console.log('modal open');

    fetchGetASAProductCouponCallback();
  }, [fetchGetASAProductCouponCallback]);

  const handleClose = useCallback(() => {
    setOpenModal(false);
  }, []);

  useEffect(() => {
    window.location.search.includes('coupon=true') && handleFetchCouponInit();
  }, [handleFetchCouponInit]);

  return asaCouponData == null ||
    !asaCouponData.firstLoaded ||
    isEmpty(asaCouponData) ||
    (isEmpty(couponNormalData) && isEmpty(listAsaCouponsItems)) ? null : (
    <>
      <StyledCoupon className="coupon" onClick={handleFetchCouponInit}>
        <div className="coupon__text">{asaCouponData?.coupon_qty || ''}</div>
        <div className="coupon__tags">
          {(asaCouponData?.coupon_label || []).map((label, index) => {
            return <CouponTag key={index} label={label} color={colors.blue} />;
          })}
        </div>
        <Right />
      </StyledCoupon>
      {openModal && (
        <CouponList
          data={couponNormalData}
          dataASACoupon={asaCouponData}
          isOpen={openModal}
          onClose={handleClose}
          listASACoupon={listAsaCouponsItems}
          fetchASACoupon={fetchGetASAProductCouponCallback}
        />
      )}
    </>
  );
};

export default ProductCouponSection;
