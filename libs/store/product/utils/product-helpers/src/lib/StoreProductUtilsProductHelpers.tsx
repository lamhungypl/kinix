import _, { find } from 'lodash-es';

const EMPTY = 'empty';
const O = (
  configurableOptions: any[],
  configurableProducts: any,
  selectedProduct: { [x: string]: any }
) => {
  console.log({ configurableOptions });

  configurableOptions.forEach((optionItem, index) => {
    const { code, values } = optionItem;
    configurableOptions[index].hasShortVariantsText = true;

    values.forEach((element) => {
      const { label = '' } = element;
      if (label.length > 8) {
        configurableOptions[index].hasShortVariantsText = false;
      }
      if (label === selectedProduct[code]) {
        element.status = 'selected';
      } else {
        element.status = 'selected';
      }
    });
  });

  configurableOptions.forEach((optionItem, index) => {
    const { code, values } = optionItem;
    values.forEach((element) => {
      const { label = '' } = element;
      if (label === selectedProduct[code]) {
        configurableOptions.forEach((configOptionItemClone, index) => {
          const { code: codeItemClone, values: valuesItemClone } =
            configOptionItemClone;

          valuesItemClone.forEach((elementValue) => {
            if (
              !find(configurableProducts, (productItem) => {
                return (
                  productItem[code] === label &&
                  productItem[codeItemClone] === elementValue.label
                );
              })
            ) {
              elementValue.status = EMPTY;
            }
          });
        });
      }
    });
  });

  for (
    let c = (r: number) => {
        const o = configurableOptions[r];
        const a = o.code;
        o.values.forEach(({ label }) => {
          const i = label;
          if (i === selectedProduct[a])
            for (
              let c = (n: number) => {
                  const r = configurableOptions[n],
                    o = r.code;
                  r.values.forEach((e: { label: any; status: any }) => {
                    _.find(configurableProducts, (t) => {
                      return t[a] === i && t[o] === e.label;
                    }) || (e.status = EMPTY);
                  });
                },
                u = r - 1;
              u > -1;
              u--
            )
              c(u);
        });
      },
      u = configurableOptions.length - 1;
    u > -1;
    u--
  ) {
    c(u);
  }

  if (1 === configurableOptions.length) {
    const s = configurableOptions[0];
    const d = s.code;
    s.values.forEach((e: { label: any; status: any }) => {
      const label = e.label;
      _.find(configurableProducts, (e) => {
        return e[d] === label;
      }) || (e.status = EMPTY);
    });
  }
  return configurableOptions;
};

export const getSelectedOptions = (
  { configurable_options, configurable_products }: any,
  selectedProductInfo: any
) => {
  const n = configurable_options;
  const configurable_options_ = void 0 === n ? [] : n;
  const o = configurable_products;
  const configurable_products_ = void 0 === o ? [] : o;
  const configurable_options_clone = _.cloneDeep(configurable_options_);
  return O(
    configurable_options_clone,
    configurable_products_,
    selectedProductInfo
  );
};

export const productVariantOptionsFactory = ({
  configurableOptions,
  configurableProducts,
}) => {
  const productsKeyOrder: any[] = [];
  const productsImagePreviewMap = {};
  const productsMap = _.reduce(
    configurableProducts,
    (accProductMap, dataProductItem) => {
      const productOptionsKey = configurableOptions.reduce(
        (e: string, { show_preview_image, code }: any) => {
          const keyCode = dataProductItem[code];
          return (
            show_preview_image &&
              (keyCode in productsImagePreviewMap ||
                (productsImagePreviewMap[keyCode] =
                  _.get(dataProductItem, 'images[0].large_url') ||
                  _.get(dataProductItem, 'thumbnail_url') ||
                  '')),
            e ? ''.concat(e, '@@').concat(keyCode) : keyCode
          );
        },
        ''
      );

      accProductMap[productOptionsKey] = dataProductItem;
      productsKeyOrder.push(productOptionsKey);
      return accProductMap;
    },
    {}
  );
  return {
    productsKeyOrder: productsKeyOrder,
    productsMap: productsMap,
    productsImagePreviewMap: productsImagePreviewMap,
  };
};

export const productsToImages = (products = []) => {
  return Array.isArray(products)
    ? products.map((el) => {
        return { image: { medium_url: el } };
      })
    : [];
};

const capitalizeFirstChar = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const productToOptionsValues = (...args: any[]) => {
  const e = args.length > 0 && void 0 !== args[0] ? args[0] : [];
  const t = args.length > 1 && void 0 !== args[1] ? args[1] : {};
  const n: any[] = [];
  const r: any[] = [];
  let o = false;
  e.forEach(({ code, name }) => {
    const a = code,
      i = name,
      c = capitalizeFirstChar((i || '').trim());
    c && n.push(c);
    const u = (t[a] || '').trim();
    u ? r.push(u) : (o = true);
  });
  const a = n.join(', '),
    i = o ? '' : r.filter(Boolean).join(' / ');
  return { optionsString: a, valuesString: i };
};
