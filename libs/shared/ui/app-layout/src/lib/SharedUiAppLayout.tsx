import { colors } from '@kiti/shared/ui/theme';
import dynamic from 'next/dynamic';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalLayoutStyle = createGlobalStyle`
  *::-webkit-scrollbar{display:none;}
`;

interface HeaderProps {
  iconBackgroundTransparent?: number;
}

export const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 56px;
  justify-content: space-between;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 6px;
    background: ${(props) =>
      `rgba(39, 39, 42, ${props.iconBackgroundTransparent || 0})`};
  }
  .title {
    height: 56px;
    position: absolute;
    top: 0;
    left: 52px;
    right: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    > span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const handleProcessBar = () => {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
};

type Props = React.PropsWithChildren<{
  layout?: string;
  title?: string;
  mainStyle?: any;
  className?: any;
}>;

export const MainLayout: React.FC<Props> = (props) => {
  const { children, layout, mainStyle, className } = props;

  useEffect(() => {
    handleProcessBar();
  }, []);

  const safeMarginTop = layout ? 70 : 0;

  return (
    <div className={className}>
      <main style={{ ...{ marginTop: safeMarginTop }, ...mainStyle }}>
        {children}
      </main>
      <GlobalLayoutStyle />
    </div>
  );
};
