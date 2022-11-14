import isPropValid from '@emotion/is-prop-valid';

const T = (args: {
  paddingTop?: any;
  paddingBottom?: any;
  paddingLeft?: any;
  paddingRight?: any;
  marginTop?: any;
  marginBottom?: any;
  marginLeft?: any;
  marginRight?: any;
}) => {
  const e = args || {};
  const t = { ...e };

  Object.entries(e).forEach((e) => {
    const [r, n1] = e;
    if (!n1) {
      delete t[r];
    }
  });

  return t;
};

const R = (props: {
  [x: string]: any;
  pt?: any;
  pb?: any;
  pl?: any;
  pr?: any;
  paddingTop?: any;
  paddingBottom?: any;
  paddingLeft?: any;
  paddingRight?: any;
  px?: any;
  py?: any;
  p?: any;
  padding?: any;
  mt?: any;
  mb?: any;
  ml?: any;
  mr?: any;
  marginTop?: any;
  marginBottom?: any;
  marginLeft?: any;
  marginRight?: any;
  mx?: any;
  my?: any;
  m?: any;
  margin?: any;
}) => {
  const {
    pt,
    pb,
    pl,
    pr,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    px,
    py,
    p,
    padding,
    mt,
    mb,
    ml,
    mr,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    mx,
    my,
    m,
    margin,
    ...rest
  } = props;

  const hasPadding =
    pt ||
    pb ||
    pl ||
    pr ||
    paddingTop ||
    paddingBottom ||
    paddingLeft ||
    paddingLeft ||
    paddingRight ||
    px ||
    py;

  const hasMargin =
    mt ||
    mb ||
    ml ||
    mr ||
    marginTop ||
    marginBottom ||
    marginLeft ||
    marginRight ||
    mx ||
    my;

  const paddingUtilities = hasPadding
    ? T({
        paddingTop: pt || paddingTop || py,
        paddingBottom: pb || paddingBottom || py,
        paddingLeft: pl || paddingLeft || px,
        paddingRight: pr || paddingRight || px,
      })
    : {};

  const marginUtilities = hasMargin
    ? T({
        marginTop: mt || marginTop || my,
        marginBottom: mb || marginBottom || my,
        marginLeft: ml || marginLeft || mx,
        marginRight: mr || marginRight || mx,
      })
    : {};
  return {
    ...marginUtilities,
    ...paddingUtilities,
    margin: m || margin,
    padding: p || padding,
    ...rest,
  };
};

export const styleProps = [
  'display',
  'flex',
  'flexDirection',
  'flexWrap',
  'flexShrink',
  'alignItems',
  'justifyContent',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'position',
  'p',
  'padding',
  'pt',
  'paddingTop',
  'pb',
  'paddingBottom',
  'pl',
  'paddingLeft',
  'pr',
  'paddingRight',
  'px',
  'py',
  'm',
  'margin',
  'mt',
  'marginTop',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'mr',
  'marginRight',
  'mx',
  'my',
  'top',
  'right',
  'left',
  'bottom',
  'color',
  'backgroundColor',
  'whiteSpace',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'border',
  'borderRadius',
  'transform',
  'zIndex',
  'filter',
  'backgroundImage',
] as const;

export const stylePropsReduce = styleProps.reduce((cssKey, cssProperty) => {
  cssKey[cssProperty] = true;
  return cssKey;
}, {});

export const useProperties = (
  e: { [s: string]: unknown } | ArrayLike<unknown>
) => {
  const t = {};
  const n = {};
  Object.entries(e).forEach((item) => {
    const [a, i] = item;

    if (a in stylePropsReduce) {
      n[a] = i;
    } else {
      if (isPropValid(a)) {
        t[a] = i;
      }
    }
  });

  return {
    validProps: t,
    styleProps: R(n),
  };
};
export const colorProps = ['color', 'backgroundColor', 'borderColor'];

export const colors = {
  black: '#242424',
  warmGrey: '#787878',
  deepSkyBlue: '#017fff',
  iceBlue: '#f0f8ff',
  white: '#fff',
  lightGrey: '#f2f2f2',
  niceBlue: '#0d5cb6',
  backdrop: 'rgba(0, 0, 0, 0.5)',
  lightSage: '#e7f8f1',
  deepGreen: '#0d5302',
  red: '#ff424e',
  lightRed: '#ffcccf',
  failure: 'rgba(0, 0, 0, 0.8)',
  pinkishGrey: '#c7c7c7',
  shadow: 'rgba(0, 0, 0, 0.15)',
  borderLine: '#484461',
  orange_40: '#FFB56C',
  red_40: '#FF99A0',
  red_60: '#FF424E',
  asaBg_L0: '#1B1928',
  asaBg_L2: '#36324D',
  blue_60: '#1A94FF',
  purple_10: '#F2F0FE',
  purple_40: '#C6BCF8',
  purple_60: '#856EFA',
  purple_70: '#6F55ED',
  purple_90: '#402DA1',
  gray_10: '#F5F5FA',
  gray_20: '#EBEBF0',
  gray_40: '#c4c4cf',
  gray_50: '#A6A6B0',
  gray_60: '#808089',
  gray_70: '#64646D',
  gray_90: '#38383D',
  orange_60: '#FC820A',
  tab_active: '#0B74E5',
  text_link: '#0B74E5',
  green_50: '#2DC26D',
  blue_70: '#0B74E5',
};

export const zIndex = {
  modal: 999,
  tooltip: 9999,
  toast: 99999,
};

export const fontSizes = {
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  base: {
    fontSize: 14,
    lineHeight: 20,
  },
  medium: {
    fontSize: 16,
    lineHeight: 24,
  },
  large: {
    fontSize: 18,
    lineHeight: 24,
  },
  xlarge: {
    fontSize: 20,
    lineHeight: 32,
  },
};

export const defaultTheme = {
  colors: colors,
  zIndex: zIndex,
  fontSizes: fontSizes,
};
