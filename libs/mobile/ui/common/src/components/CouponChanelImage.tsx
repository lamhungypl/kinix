import styled from 'styled-components';
import { DefaultIcon } from '../utils/helpers';

import { Box } from '../utils/utils';
import { SomeStyled } from './AnimateSkeleton';
import { CouponIcon } from './CouponIcon';
import { CouponIconText } from './CouponIconText';

const StyledCouponChanelImage = styled(Box)<{ hasIconName?: boolean }>`
  position: relative;
  width: ${({ hasIconName }) => (hasIconName ? '60px' : '88px')};
  height: ${({ hasIconName }) => (hasIconName ? '60px' : '88px')};
`;

const StyledIconName = styled(Box)`
  margin: 4px 4px 0px;
  text-align: center;
`;

export const CouponChanelImage = ({ iconInfo, disabled, onImageClick }) => {
  const { icon_url, icon_name, short_title, url } = iconInfo;
  const iconURL = icon_url || DefaultIcon;

  return (
    <SomeStyled>
      <StyledCouponChanelImage hasIconName={Boolean(icon_name)}>
        <CouponIcon
          src={iconURL}
          alt={icon_name || short_title}
          ratio={1}
          disabled={disabled}
          onClick={onImageClick}
          href={url}
        ></CouponIcon>
      </StyledCouponChanelImage>
      {icon_name && (
        <StyledIconName>
          <CouponIconText disabled={disabled}>{icon_name}</CouponIconText>
        </StyledIconName>
      )}
    </SomeStyled>
  );
};
