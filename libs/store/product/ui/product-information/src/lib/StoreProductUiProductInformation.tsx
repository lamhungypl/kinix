import { useDataSelector } from '@kiti/shared/utils/app-store';
import { ProductSectionImages } from '@kiti/store/product/ui/product-section-images';
import { ProductConfigurable } from '../../../product-configurable/src/lib/StoreProductUiProductConfigurable';
import { ProductVariant } from '../../../product-variants/src/lib/StoreProductUiProductVariants';
import { ProductInventory } from '../components/ProductInventory/ProductInventory';

import { ProductName } from '../components/ProductName';
import { ProductPrice } from '../components/ProductPrice/ProductPrice';
import { ProductSellInfo } from '../components/ProductSellInfo';

export function ProductInformationSection(props: any) {
  const { configurableSelected, setConfigurableSelected } = props;
  const selector = useDataSelector();
  const { productDetail, firstProductImage, isLoadedWidgets } = selector;

  const onOpenModalHandler = () => {};

  const {
    id,
    current_seller,
    name,
    price,
    inventory_status: inventoryStatus,
    has_other_fee: hasOtherFree,
    configurable_products: configurableProducts,
    original_price: originalPrice,
    discountRate,
    badges_new: badgesNew,
    review_count: reviewCount,
    quantity_sold: quantitySold,
    rating_average: ratingAverage,
    badgesMap,
    asa_share_btn: asaShareBtn,
    asa_cashback_widget: asaCashbackWidget,
    deal_specs,
  } = productDetail;

  const productDecurrentSellerProductId = current_seller.product_id || null;
  const hasBookPreview = badgesMap?.has_book_preview;
  const hasCashbackWidgetText = !!asaCashbackWidget?.text;
  const productImages = [];

  const isHotDeal = productDetail?.deal_specs?.is_hot_deal || false;

  const productsTypeMinorBadge = (productDetail?.badges_new || []).filter(
    (e) => {
      return 'minor_badge' === e?.type;
    }
  );

  const hasDiscountRate = isHotDeal && discountRate > 0;

  const productSelector: any = {};
  return (
    <>
      <ProductSectionImages
        id={id}
        spId={productDecurrentSellerProductId}
        name={name}
        onBookReviewClick={onOpenModalHandler}
        // firstProductImage={firstProductImage}
        images={undefined}
        productImages={productImages}
        badgesNew={badgesNew}
        hasBookPreview={hasBookPreview}
      />
      {hasDiscountRate ? <div>Discount</div> : ''}

      <div
        style={{
          padding: '12px 16px',
          marginBottom: 8,
          background: 'white',
        }}
      >
        <ProductName name={name} />
        <ProductSellInfo
          productId={id}
          showStartCount={ratingAverage}
          ratingAverage={ratingAverage || 0}
          reviewCount={reviewCount || 0}
          quantitySold={quantitySold}
          asaShare={asaShareBtn}
        />
        {hasDiscountRate ? (
          ''
        ) : (
          <ProductPrice
            price={price}
            originalPrice={originalPrice}
            discountRate={discountRate}
          />
        )}
        {inventoryStatus && (
          <ProductInventory inventoryStatus={productDetail?.inventory_status} />
        )}
        {configurableProducts && (
          <ProductConfigurable
            configurableSelected={configurableSelected}
            setConfigurableSelected={setConfigurableSelected}
            productImages={productImages}
          />
        )}
      </div>
    </>
  );
}

export default ProductInformationSection;
