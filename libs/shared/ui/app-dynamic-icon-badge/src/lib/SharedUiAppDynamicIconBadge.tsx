import { map } from 'lodash-es';
import styled from 'styled-components';

export const StyledDynamicIconBadge = styled.img`
  display: block;
  position: absolute;
  z-index: 2;
`;

type Prop = {
  [x: string]: any;
  iconBadges?: any[];
  extraPositionStyle?: {
    topLeft: {};
    bottomLeft: {};
    topRight: {};
    bottomRight: {};
  };
  style?: any;
};

export const DynamicIconBadge = (props: Prop) => {
  const {
    iconBadges = [],
    extraPositionStyle = {
      topLeft: {},
      bottomLeft: {},
      topRight: {},
      bottomRight: {},
    },
    style,
    ...restProps
  } = props;

  console.log({ extraPositionStyle });

  return (
    <>
      {map(iconBadges, (element, index) => {
        const { placement, code, icon, icon_width, icon_height } = element;

        return (
          <StyledDynamicIconBadge
            key={code}
            src={icon}
            // placement={placement}
            width={icon_width}
            height={icon_height}
            style={{ ...style, placement: placement }}
            {...restProps}
          />
        );
      })}
    </>
  );
};
