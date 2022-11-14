import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StoreAsaUiCashbackWidgetProps {}

const StyledStoreAsaUiCashbackWidget = styled.div`
  color: pink;
`;

export function StoreAsaUiCashbackWidget(props: StoreAsaUiCashbackWidgetProps) {
  return (
    <StyledStoreAsaUiCashbackWidget>
      <h1>Welcome to StoreAsaUiCashbackWidget!</h1>
    </StyledStoreAsaUiCashbackWidget>
  );
}

export default StoreAsaUiCashbackWidget;
