import styled from 'styled-components';

import { CouponStatus } from '../utils/helpers';
import { Box } from '../utils/utils';
import { StyledTagListContainer } from './AnimateSkeleton';
import Button from './Button';
import { CouponHeading } from './CouponHeading';
import { CouponText } from './CouponIconText';
import { StyledInfoButton } from './StyledInfoButton';

export const Styled1 = styled(Box)`
  display: flex;
  margin-bottom: 2px;
  overflow: hidden;
  /* minus info icon width + spacing */
  max-width: calc(100% - 20px - 8px);
`;

export const Styled2 = styled(Box)<{ disabled?: any }>`
  &:not(:first-child) {
    margin-left: 4px;
  }
  white-space: nowrap;
`;

export const Styled3 = styled(Box)`
  margin-top: auto;
  display: flex;
  align-items: flex-end;
`;

const canSavedStatus = [
  CouponStatus.AVAILABLE,
  CouponStatus.ELIGIBLE,
  CouponStatus.APPLIED,
];

export const CouponContentText = (props) => {
  const {
    detailInfo,
    status,
    disabled,
    onAction,
    onInfoClick,
    hideActionButton,
    dataViewIndex,
  } = props;

  const { tags, short_title, short_description, period, coupon_code } =
    detailInfo;

  let SAVE = 'Lưu';

  if (status === CouponStatus.ELIGIBLE) {
    SAVE = 'Áp Dụng';
  } else {
    if (status === CouponStatus.APPLIED) {
      SAVE = 'Bỏ Chọn';
    }
  }
  let canSave = canSavedStatus.includes(status);

  if (hideActionButton) {
    canSave = !hideActionButton;
  }

  return (
    <StyledTagListContainer>
      {Boolean(tags.length) && (
        <Styled1>
          {tags.map((e) => (
            <Styled2 key={e} disabled={disabled}>
              {e}
            </Styled2>
          ))}
        </Styled1>
      )}
      <StyledInfoButton
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          transform: 'translate(8px, -8px)',
        }}
        disabled={disabled}
        onClick={onInfoClick}
      />
      <Box pr={28}>
        <CouponHeading disabled={disabled}>{short_title}</CouponHeading>
        <CouponText>{short_description}</CouponText>
      </Box>
      <Styled3 className="ce">
        <CouponText pr={8}>{period}</CouponText>
        {canSave && (
          <Button onClick={onAction} ml="auto" whiteSpace="nowrap">
            {SAVE}
          </Button>
        )}
      </Styled3>
    </StyledTagListContainer>
  );
};
