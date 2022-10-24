import { Back } from '@kiti/shared/ui/app-icons';
import { colors } from '@kiti/shared/ui/theme';
import React from 'react';
import styled from 'styled-components';

const BackImg = ({ size = 20, ...rest }) => {
  return (
    <img
      alt="back"
      style={{ width: size, height: size }}
      src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"
      {...rest}
    />
  );
};

const Title = styled.div`
  color: #fff;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  text-align: center;
  padding-right: 40px;
`;

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
  }
`;

type Props = {
  closeable?: any;
  title?: any;
  actionHandler?: any;
  style?: any;
};

export class ProductPageHeader extends React.PureComponent<Props> {
  backToPrevHistory() {
    // goBack()
  }
  render() {
    const { closeable, title, actionHandler, style } = this.props;

    return (
      <StyledHeaderSearch style={style}>
        <button
          type="button"
          className="btn-back"
          onClick={actionHandler || this.backToPrevHistory}
        >
          {closeable ? <Back /> : <BackImg />}
        </button>
        <Title>{title}</Title>
      </StyledHeaderSearch>
    );
  }
}

export default ProductPageHeader;
