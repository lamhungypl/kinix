import { colors } from '@kiti/shared/ui/theme';
import styled from 'styled-components';

const StyledHeaderCart = styled.a`
  background: 0;
  width: 44px;
  height: 40px;
  border: 0;
  margin: 0;
  color: ${colors.white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .count {
    position: absolute;
    top: -1px;
    right: -2px;
    width: 16px;
    height: 16px;
    font-size: 11px;
    line-height: 16px;
    color: ${colors.white};
    background-color: ${colors.warning};
    text-align: center;
    border-radius: 50%;
    padding-top: 1px;
  }
`;

export const HeaderCart = (props) => {
  // const items_qty = useSelector((state) =>
  //   get(state, 'mobile.common.cartsMineInfo.items_qty', 0),
  // );
  // const cart_item_count = useSelector((state) =>
  //   get(state, 'mobile.common.userInfo.cart_item_count', 0),
  // );
  const cartItemCount = 0 || 0 || 10;
  const { className, icon, style } = props;

  return (
    <StyledHeaderCart
      rel="nofollow"
      href="/checkout/cart"
      className={className}
      style={style}
      data-view-id="navigation_navigation_cart"
    >
      {icon || (
        <img
          alt="cart"
          src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"
        />
      )}
      {cartItemCount > 0 && <div className="count">{cartItemCount}</div>}
    </StyledHeaderCart>
  );
};
export default HeaderCart;
