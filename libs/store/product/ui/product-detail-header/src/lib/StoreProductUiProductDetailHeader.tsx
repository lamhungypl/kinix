import { colors } from '@kiti/shared/ui/theme';
import { useDataSelector } from '@kiti/shared/utils/app-store';
import { HeaderCartIcon } from '@kiti/store/cart/ui/header-cart-icon';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

// import moreMenuBg from './more-menu-bg.svg';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 56px;
  justify-content: space-between;
  .icon-margin {
    margin-left: 12px;
  }
  .icon {
    padding: 6px;
    border-radius: 20px;
    width: 32px;
    height: 32px;
  }
  .left {
    display: flex;
    align-items: center;
    > img {
      padding: 6px;
      border-radius: 20px;
      width: 32px;
      height: 32px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    > img {
      padding: 6px;
      border-radius: 20px;
      width: 32px;
    }
  }
  .more-wrapper {
    position: relative;
    .more-icon {
      margin-left: 6px;
    }
  }
  .hidden {
    max-height: 0;
    padding: 0px;
  }
  .moreMenu-visible {
    padding: 12px;
    max-height: 220px;
    opacity: 1;
    max-width: 100vw;
  }
  .more-menu-wrapper {
    position: fixed;
    pointer-events: none;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .visible {
    pointer-events: auto;
  }
`;

const StyledMoreMenu = styled.div`
  position: absolute;
  background: ${`url(${'/static/img/more-menu-bg.svg'})`} no-repeat;
  width: 186px;
  right: 0;
  padding: 0;
  color: ${colors.white};
  border-radius: 5px;
  border-top: 1px solid;
  transition: all 0.5s ease-in;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  max-width: 0;
  top: 47px;
  right: 16px;
  .more-menu-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    > span {
      padding-left: 12px;
      font-size: 13px;
    }
  }
`;

const ImgLike = ({ liked }: { liked: boolean }) => {
  return (
    <img
      className="like-icon"
      alt="like"
      src={
        liked
          ? "'https://frontend.tikicdn.com/_mobile-next/static/img/icons/liked.svg"
          : 'https://frontend.tikicdn.com/_mobile-next/static/img/icons/like.svg'
      }
    />
  );
};

type Props = {
  hideBanner?: any;
  productDetail?: any;
  isInstallBanner?: boolean;
};

export const ProductDetailHeader = ({ isInstallBanner }: Props) => {
  const router = useRouter();
  const { productDetail } = useDataSelector();
  const { id, contextual } = productDetail;
  const isContextual = !!contextual;

  const [liked, setLiked] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [transparent, setTransparent] = useState('0');

  const iconBackColor = isContextual
    ? 'Blue'
    : '0' === transparent
    ? 'White'
    : 'Blue';

  const iconBackground = isContextual
    ? ''
    : '0' === transparent
    ? '#24242480'
    : '';

  const iconCart = (
    <img
      // className="more-icon icon"
      alt="cart"
      width={20}
      height={20}
      src={`https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart${
        isContextual || '0' !== transparent ? 'Blue' : ''
      }.svg`}
    />
  );
  const handleAnimationHeader = useCallback(() => {
    const animateTransparent =
      window.scrollY < 20
        ? '0'
        : window.scrollY > 200
        ? '1'
        : (window.scrollY / 200).toString();
    if (animateTransparent !== transparent) {
      setTransparent(animateTransparent);
    }
    if (showMoreMenu) {
      setShowMoreMenu(false);
    }
  }, [showMoreMenu, transparent]);

  const likeProduct = () => {};
  const toggleShowMoreMenu = () => {
    setShowMoreMenu((prev) => !prev);
  };

  const moreMenuItem = (icon: ReactNode, text: string, onClick: any) => {
    return (
      <div className="more-menu-item" onClick={onClick}>
        {icon}
        <span>{text}</span>
      </div>
    );
  };
  const redirectToSinglePage = (route: string) => () => {
    router.push(route);
  };

  const onViewCart = () => {};

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleAnimationHeader);

    return () => {
      window.removeEventListener('scroll', handleAnimationHeader);
    };
  }, [handleAnimationHeader]);

  return (
    <StyledWrapper
      style={{
        position: isContextual ? 'sticky' : 'fixed',
        borderBottom: '1px solid rgb(239, 239, 239)',
      }}
    >
      <StyledHeader
        style={{ backgroundColor: `rgba(255,255,255,${transparent}` }}
      >
        <div className="left">
          <img
            alt="back"
            style={{ background: iconBackground }}
            src={`https://frontend.tikicdn.com/_mobile-next/static/img/icons/back${iconBackColor}.svg`}
            onClick={goBack}
          />
        </div>
        <div className="right">
          <div className="" onClick={onViewCart}>
            <HeaderCartIcon
              className="icon-margin icon"
              style={{ background: iconBackground }}
              icon={iconCart}
            />
          </div>
          <div className="more-wrapper">
            <img
              className="more-icon icon"
              style={{ background: iconBackground }}
              alt="more"
              src={`https://frontend.tikicdn.com/_mobile-next/static/img/icons/more${iconBackColor}.svg`}
              onClick={toggleShowMoreMenu}
            />
            <div
              className={clsx('more-menu-wrapper', { visible: showMoreMenu })}
              onClick={toggleShowMoreMenu}
            >
              <StyledMoreMenu
                className={clsx({ 'moreMenu-visible': showMoreMenu })}
                style={{ borderTop: '1px solid rgba(27,168,255,0' }}
              >
                {moreMenuItem(
                  <img
                    className="home-icon"
                    alt="home"
                    src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/homeWhite.svg"
                  />,
                  'Trở về Trang chủ',
                  redirectToSinglePage('/?src=mweb.tiki')
                )}
                {moreMenuItem(
                  <img
                    className="category-icon"
                    alt="category"
                    src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/category.svg"
                  />,
                  'Danh mục sản phẩm',
                  redirectToSinglePage('/category/c2?src=mwem.all_categories')
                )}
                {moreMenuItem(
                  <img
                    className="user-icon"
                    alt="user"
                    src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/user.svg"
                  />,
                  'Cá nhân',
                  redirectToSinglePage('/?src=mweb.tiki')
                )}
                {productDetail?.id && (
                  <div className="more-menu-item" onClick={likeProduct}>
                    <ImgLike liked={liked}></ImgLike>
                    <span>Yêu thích</span>
                  </div>
                )}
              </StyledMoreMenu>
            </div>
          </div>
        </div>
      </StyledHeader>
    </StyledWrapper>
  );
};

export default ProductDetailHeader;
