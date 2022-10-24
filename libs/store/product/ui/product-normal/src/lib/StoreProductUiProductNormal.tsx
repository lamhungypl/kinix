import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StoreProductUiProductNormalProps {}

const StyledStoreProductUiProductNormal = styled.div`
  color: pink;
`;

export function StoreProductUiProductNormal(
  props: StoreProductUiProductNormalProps
) {
  return (
    <StyledStoreProductUiProductNormal>
      <h1>Welcome to StoreProductUiProductNormal!</h1>
    </StyledStoreProductUiProductNormal>
  );
}

export default StoreProductUiProductNormal;
