/* eslint-disable react/jsx-pascal-case */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';

import { baseCouponTypographyStyle } from '../components/CouponIconText';
import { Toast } from '../components/Toast';
import { copyIcon, CouponStatus, successIcon } from '../utils/helpers';
import { colors, zIndex } from '../utils/useProperties';
import { Box, getFinalCouponInfo } from '../utils/utils';

const StyledCouponModalContainer = styled(Box)<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s ease-in-out;
`;

const animation = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledCouponModal1 = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 1px;
  right: 1px;
  background-color: ${colors.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-top: 16px;
  animation: ${animation} 200ms ease-in-out;
`;

const StyledCouponModal1_1 = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  width: 64px;
  height: 22px;
  padding: 8px;
  top: -22px;
`;
const StyledCouponModal1_1_1 = styled(Box)`
  width: 48px;
  height: 6px;
  border-radius: 3px;
  background: ${colors.white};
`;
const StyledCouponModalShortTitle = styled(Box)`
  ${baseCouponTypographyStyle}
  font-size: 24px;
  line-height: 32px;
  max-height: 32px;
  font-weight: 500;
  margin: 0px 16px 16px;
  color: ${colors.black};
  text-align: center;
`;

const StyledCouponModal1_2_1 = styled(Box)<{ rowWrap?: any }>`
  display: flex;
  align-items: center;
  flex-flow: ${({ rowWrap }) => rowWrap && 'row wrap'};

  &:nth-child(odd) {
    background-color: #fafafa;
  }
`;
const StyledCouponModal1_2_2 = styled(Box)`
  width: 33.33%;
  min-width: 110px;
  flex: none;
  padding: 12px 16px;
  font-size: 13px;
  line-height: 20px;
  color: ${colors.warmGrey};
`;

const StyledCouponCodeText = styled(Box)`
  padding: 12px 16px;
  font-size: 13px;
  line-height: 20px;
  color: ${colors.black};
`;
const StyledCouponModalCouponCode = styled(StyledCouponCodeText)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  word-break: break-all;
`;

export const StyledCopyCodeImg = styled.img`
  cursor: pointer;
`;

const StyledConditionUl = styled.ul`
  list-style: disc;
  padding: 0 16px;
  margin: 0;
  margin-top: -16px;
`;

const StyledSaveButton = styled(Button)`
  height: 44px;
  margin: 12px 16px;
`;
//------------------------------------------------------------------------------
const availableStatuses = [CouponStatus.AVAILABLE];

export const CouponModal = (props) => {
  const {
    couponModalInfo,
    isOpen,
    onClose,
    onAction,
    actionButtonText = 'Luu',
    showActionButton,
    status,
    hideCouponCode,
    'data-view-index': dataViewIndex,
    'data-view-id': dataViewId,
  } = props;

  const couponModalContainerRef = useRef<HTMLDivElement>(null);
  const x = useRef(null);

  const [_, E] = useState(false);

  const [C, T] = useState(_ ? 1 : 0);

  const I = useRef(null);

  const [show, setShow] = useState(false);

  const finalCouponInfo = getFinalCouponInfo(couponModalInfo);

  const {
    coupon_code = '',
    long_description = '',
    short_title = '',
    period = '',
  } = finalCouponInfo;

  const periods = period.split(' ');
  const periodEnd = periods[periods.length - 1] || '';

  let isAvailable = availableStatuses.includes(status);

  if (void 0 !== showActionButton) {
    isAvailable = showActionButton;
  }

  const M = Array.isArray(long_description)
    ? long_description
    : long_description.split('\n');

  useEffect(() => {
    let couponModalContainerNode = document.getElementById(
      'coupon-modal-container'
    );

    if (!couponModalContainerNode) {
      couponModalContainerNode = document.createElement('div');
      couponModalContainerNode.id = 'coupon-modal-container';
      couponModalContainerNode.style.cssText = `display: none; position: fixed; left:0; right: 0; top: 0; bottom: 0; z-index:${zIndex.modal}`;
      document.body.appendChild(couponModalContainerNode);
    }

    couponModalContainerRef.current =
      couponModalContainerNode as HTMLDivElement;
  }, []);

  useEffect(() => {
    T(isOpen ? 1 : 0);
    const e = setTimeout(() => {
      E(isOpen);
      if (couponModalContainerRef.current) {
        const e = window.getComputedStyle(couponModalContainerRef.current);

        if (isOpen && 'none' === e.display) {
          couponModalContainerRef.current.style.display = 'block';
        } else {
          if (!(isOpen || 'none' === e.display)) {
            setShow(false);
            couponModalContainerRef.current.style.display = 'none';
          }
        }
      }
    }, 300);
    return () => {
      clearTimeout(e);
    };
  }, [isOpen]);

  const X = useCallback(
    (e) => {
      if (e.target === x.current) {
        onClose?.();
      }
    },
    [onClose]
  );

  const handleCopyCode = useCallback(() => {
    if (I.current) {
      I.current.select();
      I.current.setSelectionRange(0, 999999);
      document.execCommand('copy');
      setShow(true);
    }
  }, []);

  const onHide = useCallback(() => {
    setShow(false);
  }, []);

  return couponModalContainerRef.current && _
    ? createPortal(
        <StyledCouponModalContainer ref={x} opacity={C} onClick={X}>
          <StyledCouponModal1>
            <StyledCouponModal1_1>
              <StyledCouponModal1_1_1 />
            </StyledCouponModal1_1>
            <StyledCouponModalShortTitle>
              {short_title}
            </StyledCouponModalShortTitle>
            {hideCouponCode ? (
              <div />
            ) : (
              <StyledCouponModal1_2_1 pr={16}>
                <StyledCouponModal1_2_2>Mã</StyledCouponModal1_2_2>
                <StyledCouponModalCouponCode pr={8}>
                  {coupon_code}
                </StyledCouponModalCouponCode>
                <StyledCopyCodeImg
                  onClick={handleCopyCode}
                  src={copyIcon}
                  alt="copy-icon"
                />
                <input
                  ref={I}
                  type={'text'}
                  value={coupon_code}
                  readOnly={true}
                  style={{
                    top: -9999,
                    position: 'fixed',
                    zIndex: -1,
                    textIndent: '-9999px',
                    border: 'none !important',
                    outline: 'none !important',
                    pointerEvents: 'none',
                  }}
                />
              </StyledCouponModal1_2_1>
            )}
            <StyledCouponModal1_2_1 pr={16}>
              <StyledCouponModal1_2_2>Hạn sử dụng</StyledCouponModal1_2_2>
              <StyledCouponModalCouponCode>
                {periodEnd}
              </StyledCouponModalCouponCode>
            </StyledCouponModal1_2_1>
            <StyledCouponModal1_2_1 rowWrap={true}>
              <StyledCouponModal1_2_2>Điều kiện</StyledCouponModal1_2_2>
              <StyledCouponCodeText
                style={{
                  width: '100%',
                }}
              >
                <StyledConditionUl>
                  {M.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </StyledConditionUl>
              </StyledCouponCodeText>
            </StyledCouponModal1_2_1>

            <StyledCouponModal1_2_1 rowWrap={true}>
              {isAvailable && (
                <StyledSaveButton fullWidth onClick={onAction}>
                  {actionButtonText}
                </StyledSaveButton>
              )}
              <StyledSaveButton
                fullWidth
                type={isAvailable ? 'secondary' : 'primary'}
                onClick={onClose}
                style={{
                  marginTop: 0,
                }}
              >
                Đóng
              </StyledSaveButton>
            </StyledCouponModal1_2_1>
            <Toast
              icon={<img src={successIcon} alt="success-icon" />}
              message={'Mã giảm giá đã được sao chép thành công'}
              onHide={onHide}
              show={show}
            />
          </StyledCouponModal1>
        </StyledCouponModalContainer>,
        couponModalContainerRef.current
      )
    : null;
};
