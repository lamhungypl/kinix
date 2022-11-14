import { colors } from '@kiti/shared/ui/theme';
import styled from 'styled-components';

import { ProductRating } from './ProductRating';
import { QuantitySold } from './QuantitySold';

export const StyledButton = styled.button<{ isBackground?: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  padding: 4px;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  justify-content: space-between;
  background: ${({ isBackground }) => {
    return isBackground ? colors.purple_10 : colors.white;
  }};
  color: ${colors.purple_90};
  max-height: 24px;
  span {
    padding-right: 5px;
  }
`;

const AsaShareButton = (props: any) => {
  const { priceFormat, benefits, shareMessage } = props;
  const hasBenefits = !!benefits;

  return (
    <>
      <StyledButton isBackground={hasBenefits}>
        {priceFormat && <span>{priceFormat}</span>}
        <img
          alt={'share-icon'}
          width={20}
          height={20}
          src={
            hasBenefits
              ? 'https://salt.tikicdn.com/ts/brickv2og/40/64/23/15d11a10bdcb948472a405231907d894.png'
              : 'https://salt.tikicdn.com/ts/brickv2og/9a/94/d5/fc743b24b80a0589cdd2a5c728608b43.png'
          }
        />
      </StyledButton>
      {/* <div className="modal list social"></div> */}
    </>
  );
};

export const ProductSellInfo = (props: any) => {
  const {
    productId,
    showStartCount,
    ratingAverage,
    reviewCount,
    quantitySold,
    asaShare,
  } = props;

  // const onOpenModalHandler = noop;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex' }}>
        <ProductRating
          showStartCount={!!showStartCount}
          ratingAverage={ratingAverage || 0}
          reviewCount={reviewCount || 0}
          starWidth={14}
          starHeight={14}
        />
        {quantitySold.text && (
          <QuantitySold
            quantitySoldText={quantitySold?.text}
            needSeparator={!!ratingAverage}
            style={{
              fontSize: 13,
              paddingLeft: ratingAverage ? 8 : 0,
            }}
            textStyle={{
              paddingLeft: ratingAverage ? 8 : 0,
            }}
          />
        )}
      </div>
      <AsaShareButton
        benefits={asaShare?.benefits}
        priceFormat={asaShare?.price_format}
        shareMessage={asaShare?.share_message}
      />
    </div>
  );
};
