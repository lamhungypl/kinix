import { LeftOutline } from '@kiti/shared/ui/app-icons';
import { colors } from '@kiti/shared/ui/theme';
import { HeaderCartIcon } from '@kiti/store/cart/ui/header-cart-icon';
import styled from 'styled-components';

const StyledHeaderSearch = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 56px;
  .btn-back {
    min-width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: 0;
    outline: 0;
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .title {
    color: #fff;
    font-size: 17px;
    text-align: center;
    width: 100%;
  }
`;
type Props = {
  title: string;
};

export const AccountPageHeader = ({ title }: Props) => {
  const backToPrevHistory = () => {};
  return (
    <StyledHeaderSearch>
      <button className="btn-back" onClick={backToPrevHistory}>
        <LeftOutline />
      </button>
      <div className="title">{title}</div>
      <HeaderCartIcon />
    </StyledHeaderSearch>
  );
};

export default AccountPageHeader;
