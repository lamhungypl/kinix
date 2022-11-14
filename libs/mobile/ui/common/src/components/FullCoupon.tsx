import { get } from 'lodash-es';
import styled, { css } from 'styled-components';

import {
  claimStamp,
  CouponBgSizing,
  CouponStatus,
  CouponType,
  expiredStamp,
  ForwardRef,
  ForwardRef1,
  notEligibleStamp,
  outOfStockStamp,
  savedStamp,
  useBoundingClientRect,
} from '../utils/helpers';
import { colors } from '../utils/useProperties';
import { Box, getAbsoluteStyle, getFinalCouponInfo } from '../utils/utils';
import AnimateSkeleton from './AnimateSkeleton';
import { CouponChanelImage } from './CouponChanelImage';
import { CouponContentText } from './CouponContentText';
import { StyledCouponContainer, StyledImg } from './Styled';

export const StyledSomeComponent = styled(Box)<{ disabled?: boolean }>`
  ${getAbsoluteStyle()};
  display: flex;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '')};
`;

export const StyledCoupon = styled(Box)<{ type: string }>`
  display: flex;
  position: relative;

  ${({ type }) => {
    return css`
      width: ${CouponBgSizing[type].WIDTH}px;
    `;
  }}

  .coupon-bg {
    width: 100%;
    height: ${({ type }) => {
      return `${CouponBgSizing[type].HEIGHT}px`;
    }};
    filter: drop-shadow(0px 1px 3px ${colors});
  }
`;

const disabledStatuses = [CouponStatus.EXPIRED, CouponStatus.NOT_ELIGIBLE];

const getStatusSrc = (status: string) => {
  switch (status) {
    case CouponStatus.SAVED:
      return savedStamp;
    case CouponStatus.CLAIMED:
      return claimStamp;
    case CouponStatus.EXPIRED:
      return expiredStamp;
    case CouponStatus.NOT_ELIGIBLE:
      return notEligibleStamp;
    case CouponStatus.OUT_OF_STOCK:
      return outOfStockStamp;
    default:
      return '';
  }
};

type Props = {
  [x: string]: any;
  couponInfo?: {};
  status?: string;
  onAction?: any;
  onInfoClick?: any;
  onImageClick?: any;
  loading?: boolean;
  loadingAnimation?: boolean;
  hideActionButton?: any;
  'data-view-index'?: any;
  allowFastDom?: boolean;
};
export const FullCoupon = (props: Props) => {
  const {
    couponInfo = {},
    status = 'available',
    onAction,
    onInfoClick,
    onImageClick,
    loading = false,
    loadingAnimation = true,
    hideActionButton,
    'data-view-index': dataViewIndex,
    allowFastDom = false,
    ...restProps
  } = props;

  const finalCouponInfo = getFinalCouponInfo(couponInfo);

  const {
    icon_url = '',
    icon_name = '',
    short_title = '',
    short_description = '',
    period = '',
    url = '',
    tags = [],
    coupon_code,
  } = finalCouponInfo;

  const iconInfo = {
    icon_url: icon_url,
    icon_name: icon_name,
    short_title: short_title,
    url: url,
  };

  const detailInfo = {
    tags: tags,
    short_title: short_title,
    short_description: short_description,
    period: period,
    coupon_code: void 0 === coupon_code ? '' : coupon_code,
  };

  const { elemRef, boundingRect } = useBoundingClientRect(allowFastDom);
  const width = get(boundingRect, 'width') || 0;

  const RenderCouponBg = ((e) => {
    switch (e) {
      case CouponStatus.AVAILABLE:
        return ForwardRef;
      case CouponStatus.APPLIED:
        return ForwardRef1;
      default:
        return ForwardRef;
    }
  })(status);

  const statusSrc = getStatusSrc(status);
  const disabled = disabledStatuses.includes(status);
  const hide = loading || !width;

  return (
    <StyledCoupon type={CouponType.FULL} {...restProps}>
      {hide && <AnimateSkeleton animating={loadingAnimation} />}
      <StyledCouponContainer type={CouponType.FULL} visible={!hide}>
        <RenderCouponBg
          ref={elemRef as any}
          className={'coupon-bg'}
          pixelWidth={width}
        />
        {!hide && (
          <StyledSomeComponent>
            {statusSrc && (
              <StyledImg
                src={statusSrc}
                bottom={4}
                right={4}
                alt={`${status}-stamp`}
              />
            )}
            <CouponChanelImage
              iconInfo={iconInfo}
              disabled={disabled}
              onImageClick={onImageClick}
            />
            <CouponContentText
              detailInfo={detailInfo}
              status={status}
              disabled={disabled}
              onInfoClick={onInfoClick}
              onAction={onAction}
              hideActionButton={hideActionButton}
              dataViewIndex={dataViewIndex}
            />
          </StyledSomeComponent>
        )}
      </StyledCouponContainer>
    </StyledCoupon>
  );
};
