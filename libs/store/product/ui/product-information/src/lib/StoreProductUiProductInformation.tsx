import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StoreProductUiProductInformationProps {}

const StyledStoreProductUiProductInformation = styled.div`
  color: pink;
`;

export function StoreProductUiProductInformation(
  props: StoreProductUiProductInformationProps
) {
  return (
    <StyledStoreProductUiProductInformation>
      <h1>Welcome to StoreProductUiProductInformation!</h1>
    </StyledStoreProductUiProductInformation>
  );
}

export default StoreProductUiProductInformation;
