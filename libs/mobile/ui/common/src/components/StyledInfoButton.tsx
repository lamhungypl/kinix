import styled from 'styled-components';

import { disabledInfoIcon, infoIcon } from '../utils/helpers';
import { getBox } from '../utils/utils';

export const BoxButton = getBox('button');
export const BoxImg = getBox('img');

export const StyledInfoImg = styled(BoxImg)`
  cursor: pointer;
`;

const StyledButtonWrapper = styled(BoxButton)`
  display: block;
  background: transparent;
  outline: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  line-height: 0px;
`;

type Props = {
  [x: string]: any;
  disabled: any;
  onClick: any;
  iconWidth?: any;
  iconHeight?: any;
} & React.ComponentProps<typeof StyledButtonWrapper>;

export const StyledInfoButton = (props: Props) => {
  const { disabled, onClick, iconWidth, iconHeight, ...rest } = props;

  const src = disabled ? disabledInfoIcon : infoIcon;
  const alt = disabled ? 'disabled-info-icon' : 'info-icon';

  return (
    <StyledButtonWrapper onClick={onClick} {...rest}>
      <StyledInfoImg
        src={src}
        alt={alt}
        width={iconWidth}
        height={iconHeight}
      />
    </StyledButtonWrapper>
  );
};
