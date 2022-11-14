import { colors } from '@kiti/shared/ui/theme';
import React from 'react';
import styled from 'styled-components';

type Props = {};

const StyledCouponTag = styled.div`
  padding: 5px 12px;
  border: 1px solid
    ${({ color }) => {
      return color || colors.orange60;
    }};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ color }) => {
    return color || colors.orange60;
  }};
  position: relative;
  margin: 0 4px;
  &:before,
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${colors.white};
    border: 1px solid
      ${({ color }) => {
        return color || colors.orange60;
      }};
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
`;

const CouponTag = ({ label, color }) => {
  return <StyledCouponTag color={color}>{label}</StyledCouponTag>;
};

export default CouponTag;
