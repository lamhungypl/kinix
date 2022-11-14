import { colors } from '@kiti/shared/ui/theme';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalUserAgentStyle = styled.createGlobalStyle`
  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
  :root {
    --sat: env(safe-area-inset-top);
    --sar: env(safe-area-inset-right);
    --sab: env(safe-area-inset-bottom);
    --sal: env(safe-area-inset-left);
  }
  body {
    overflow-x: hidden;
    &.ReactModal__Body--open--allow-scroll {
      overflow: unset;
    }
  }
  img {
    max-width: 100%;
  }
  #snack-bar {
    position: fixed;
    right: 20px;
    bottom: 20px;
    > div {
      margin-top: 12px;
    }
  }
`;

export const GlobalNProgressStyle = styled.createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: ${colors.white};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${colors.white}, 0 0 5px ${colors.white};
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
  #nprogress .spinner {
    display: none;
  }
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const GlobalAnimationStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: url('https://tikicdn.com/assets/img/bg-form.png') #ddf3fe center
      bottom repeat-x;

    background-attachment: fixed;
    min-width: 320px;
    height: 100vh;
  }
  .error-box {
    margin: auto;
    width: 80%;
    min-width: 300px;
    max-width: 378px;
    max-height: 210px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    padding: 20px;
    background: #fff;
    font-family: Arial, Georgia, Serif;
    -webkit-box-shadow: 1px 1px 1px #ccc;
    box-shadow: 1px 1px 1px #ccc;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    border-radius: 8px;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .error-box img {
    float: left;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .error-box p {
    margin-top: 0;
    font-size: 13px;
    margin-bottom: 4px;
    line-height: 20px;
  }
  .error-box p span {
    color: #00b6f0;
    font-weight: bold;
  }
  .error-box p a {
    color: #00b6f0;
    font-weight: bold;
  }
  .error-box:after {
    content: ' ';
    clear: both;
    height: 0;
    padding: 0;
    display: block;
  }
  @-webkit-keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  .slideInDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
  }
  @media (min-width: 992px) {
  }
`;
