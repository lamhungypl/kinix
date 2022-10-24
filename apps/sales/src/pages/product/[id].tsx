import { AppBackgroundImage } from '@kiti/shared/ui/app-background-image';
import { MainLayout } from '@kiti/shared/ui/app-layout';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import ReactLazyLoad from 'react-lazyload';

import { PRODUCT_TYPE } from '../../features/product-page/contants';
import { NextPageWithLayout } from '../_app';

const ProductPageModal = dynamic(() =>
  import('@kiti/store/product/ui/product-page-modal').then(
    ({ ProductPageModal }) => ProductPageModal
  )
);
const ProductPage: NextPageWithLayout = () => {
  const productType = PRODUCT_TYPE.NORMAL;

  const renderProduct = (type: PRODUCT_TYPE) => {
    switch (type) {
      case PRODUCT_TYPE.NORMAL:
        return (
          <>
            <div>ProductNormal</div>
            {/* <ProductPageModal
              actionModal={undefined}
              onCloseHandler={undefined}
            /> */}
          </>
        );

      default:
        return null;
    }
  };
  return (
    <>
      <ReactLazyLoad>
        <div className="attach deep link"></div>
      </ReactLazyLoad>
      <ReactLazyLoad>
        {/* <ProductPageModal
          actionModal={undefined}
          onCloseHandler={undefined}
        ></ProductPageModal> */}
      </ReactLazyLoad>
      {renderProduct(productType)}
    </>
  );
};

ProductPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <>
      <AppBackgroundImage />
      <MainLayout layout="productPage">
        {/* <ProductPageHead /> */}
        {page}
      </MainLayout>
    </>
  );
};

export default ProductPage;
