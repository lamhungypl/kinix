import { each, has, isEqual } from 'lodash-es';
import React, { forwardRef } from 'react';

import { colorProps, colors, styleProps, useProperties } from './useProperties';

type Props = {
  [key in typeof styleProps[number]]?: any;
} & {
  as?: React.ElementType | keyof HTMLElementTagNameMap;
  className?: any;
  style?: any;
  children?: any;
} & React.DOMAttributes<HTMLElement>;

export const Box = forwardRef<any, Props>((props, ref) => {
  const {
    as: AsComponent = 'div',
    className,
    style,
    children,
    ...restProperties
  } = props;

  const { validProps, styleProps } = useProperties(restProperties);

  each(colorProps, (e) => {
    if (has(restProperties, e)) {
      const t = has(colors, restProperties[e])
        ? colors[restProperties[e]]
        : restProperties[e];
      if (t) {
        styleProps[e] = t;
      }
    }
  });

  return (
    <AsComponent
      className={className}
      style={{ ...styleProps, ...style }}
      ref={ref}
      {...validProps}
    >
      {children}
    </AsComponent>
  );
});

export const WithBoxComponent = (
  elementType: keyof HTMLElementTagNameMap | React.ElementType
) => {
  return forwardRef<any, React.ComponentProps<typeof elementType>>(
    (props, ref) => {
      return <Box ref={ref} as={elementType} {...props} />;
    }
  );
};

export const getAbsoluteStyle = () => {
  return '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n';
};
export const getBox = WithBoxComponent;

export const getFinalCouponInfo = (
  data: ArrayLike<unknown> | { [s: string]: unknown }
) => {
  if (!data) return {};
  const t: any = {};

  Object.entries(data).forEach((e) => {
    const [r, a] = e;

    let i: string | any[] = '';

    if ('tags' === r) {
      i = [];
    }

    t[r] = a || i;
  });

  return t;
};
