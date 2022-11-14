import { ProductCouponSection } from '@kiti/store/product/ui/product-coupon-section';
import { ProductInformationSection } from '@kiti/store/product/ui/product-information';

export const ProductNormal = () => {
  const checkLoadingServer = false;
  return (
    <>
      <ProductInformationSection />
      {checkLoadingServer ? (
        <div
          style={{
            width: '100%',
            minHeight: 200,
            background: 'white',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            minHeight: 200,
          }}
        >
          <ProductCouponSection />
        </div>
      )}
    </>
  );
};
