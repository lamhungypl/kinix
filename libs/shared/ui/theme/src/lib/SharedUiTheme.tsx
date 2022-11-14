import { css } from 'styled-components';

export const extraColor = {
  yellow_50: '#FFC400',
  cta_60: '#ff2e6d',
  red_10: '#FFF0F1',
  green_70: '#079449',
  blue_20: '#DBEEFF',
  green_30: '#B7EFC3',
  green_50: '#2DC26D',
  tikiNgonOverlay: 'rgba(39, 39, 42, 0.7)',
  green_20: '#d7fae0',
  text_link: '#0B74E5',
  green_10: '#EFFFF4',
  blue_10: '#F0F8FF',
  blue_70: '#0B74E5',
  purple_10: '#F2F0FE',
  purple_20: '#ECE9FD',
  purple_30: '#DFD9FA',
  purple_50: '#FAF9FF',
  purple_60: '#856EFA',
  purple_70: '#6F55ED',
  purple_80: '#5A41D9',
  purple_90: '#402DA1',
};

const extraColors = {
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
};
export const colors = {
  base: '#333',
  primary: '#1ba8ff',
  danger: '#FF424E',
  muted: '#787878',
  gray: '#e0e0e0',
  warning: '#fd820a',
  success: '#26BC4E',
  backgroundGray: '#F2F2F2',
  black86: '#242424',
  silver: '#bdbdbd',
  backgroundOverlay: 'rgba(0, 0, 0, 0.5)',
  whiteGhost: 'rgba(255, 255, 255, 0.6)',
  brownGrey: '#999999',
  grayLight: '#fafafa',
  disabled: '#c7c7c7',
  veryLightPink: '#eeeeee',
  baseGray: '#f2f2f2',
  green: '#009900',
  yellow: '#fdd835',
  wheat: '#fcf8e4',
  lineGray: '#d8d8d8',
  warningText: '#f48f2d',
  warningBg: '#fff5ec',
  grayNote: '#676767',
  blue: '#0d5cb6',
  greenBold: '#0d5302',
  veryLightBlue: '#e5f2ff',
  orange: '#fd570a',
  red500: '#EE4F14',
  gray0: '#F5F7FC',
  gray80: '#F5F7FC',
  gray100: '#F0F3FA',
  gray200: '#E6EBF5',
  gray210: '#D8DDE8',
  gray300: '#AFB8C9',
  gray400: '#828BA0',
  gray500: '#606778',
  black700: '#2A2D34',
  green500: '#2DC275',
  blue600: '#1894E0',
  blueNavy600: '#0D5CB6',
  whiteTwo: '#f1f1f1',
  redTiki: '#FF3945',
  orange500: '#F59D5D',
  blue70: '#0B74E5',
  blue10: '#F0F8FF',
  blue30: '#C2E1FF',
  orange10: '#FFF5EB',
  orange60: '#FD8208',
  orange30: '#FFD1A4',
  green10: '#EFFFF4',
  green40: '#78DA90',
  gray_10: '#F5F5FA',
  gray_20: '#EBEBF0',
  gray_30: '#DDDDE3',
  gray_40: '#C4C4CF',
  gray_50: '#A6A6B0',
  gray_60: '#808089',
  gray_70: '#64646D',
  gray_80: '#515158',
  gray_90: '#38383D',
  gray_100: '#27272A',
  blue_10: '#F0F8FF',
  blue_20: '#DBEEFF',
  blue_30: '#C2E1FF',
  blue_50: '#5eb4ff',
  blue_60: '#1A94FF',
  red_40: '#FF99A0',
  red_30: '#FFB8BC',
  red_60: '#FF424E',
  green_10: '#EFFFF4',
  green_30: '#B7EFC3',
  green_50: '#2DC26D',
  green_60: '#00AB56',
  red_70: '#D93843',
  yellow_50: '#FFC400',
  yellow_20: '#FFF5C7',
  orange_50: '#FF9F41',
  orange_60: '#fc820a',
  blue_80: '#0D5BB5',
  ...extraColors,
  ...extraColor,
};

export const SomeTheme = css`
  font-size: 14px;
  color: ${colors.red_60};
  background: ${extraColor.red_10};
  box-shadow: inset 0px 0px 0px 1px ${colors.red_60};
  border-radius: 2px;
  min-width: 36px;
  min-height: 20px;
  text-align: center;
  padding: 0px 3px;
  line-height: 20px;
  margin-left: 8px;
`;

export const c = colors;

export const b = colors;

export const a = SomeTheme;

const defaultColors = {
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
};

const zIndex = {
  modal: 999,
  tooltip: 9999,
  toast: 99999,
};

export const defaultTheme = {
  colors: defaultColors,
  zIndex,
};
