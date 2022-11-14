import { noop } from 'lodash-es';

import { dataStore } from './dataStore';

const productDetailSelector = (e: any) => e?.mobile?.product?.productDetail;

const userInfoSelector = (e: any) => e?.mobile?.common?.userInfo;

const productTypeSelector = (e: any) => e?.mobile?.product?.productType;

const firstProductImageSelector = (e: any) =>
  e?.mobile?.product?.firstProductImage;

const deliveryZoneSelector = (e: any) => e?.mobile?.product?.deliveryZone;

const isLoadedWidgetsSelector = (e: any) => e?.mobile?.product?.isLoadedWidgets;
const isRecallClientSelector = (e: any) => e?.mobile?.product?.isRecallClient;

const newPersonalizeAPISelector = (e: any) =>
  e?.mobile?.common?.webConfig?.mobileWeb?.newPersonalizeAPI;

export const useDataSelector = () => {
  const productDetail = productDetailSelector(dataStore);
  const userInfo = userInfoSelector(dataStore);
  const productType = productTypeSelector(dataStore);
  const firstProductImage = firstProductImageSelector(dataStore);
  const deliveryZone = deliveryZoneSelector(dataStore);
  const fetchProductDetail = noop;
  const fetchProductDetailClient = noop;
  const fetchProductReviewImages = noop;
  const isRecallClient = isRecallClientSelector(dataStore);
  const fetchAdditionalFeeDefaultLocation = noop;
  const fetchProductWidgets = noop;
  const isLoadedWidgets = isLoadedWidgetsSelector(dataStore);
  const fetchShortenLink = noop;

  return {
    productDetail,
    userInfo,
    productType,
    firstProductImage,
    deliveryZone,
    fetchProductDetail,
    fetchProductDetailClient,
    fetchProductReviewImages,
    isRecallClient,
    fetchAdditionalFeeDefaultLocation,
    fetchProductWidgets,
    isLoadedWidgets,
    fetchShortenLink,
  };
};

type CreateSelectorFn = (arg: typeof dataStore) => any;
export const getSelector = (cb: CreateSelectorFn) => {
  return cb(dataStore);
};

const configurableSelectedSelector = (e: any) => {
  return e?.mobile?.product?.configurableSelected;
};

export const useConfigurableSelector = () => {
  const configurableSelected = configurableSelectedSelector(dataStore);

  return {
    configurableSelected,
    setConfigurableSelected: (e: any) => {
      console.log(e);
    },
    setIsUpdateVariation: (e: any) => {
      console.log(e);
    },
  };
};

const asaSelector = (e) => {
  return e?.mobile?.product?.asaCouponData;
};

export const useAsa = () => {
  const asaCouponData = asaSelector(dataStore);

  return {
    asaCouponData,
    fetchGetASAProductCoupon: ({
      pId,
      isSSR,
      sellerId,
    }: {
      pId: any;
      isSSR?: any;
      sellerId: any;
    }) => {
      console.log({ pId, isSSR, sellerId });
    },
  };
};
