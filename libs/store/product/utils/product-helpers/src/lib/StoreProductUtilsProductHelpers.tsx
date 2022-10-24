import _ from 'lodash-es';

const EMPTY = 'empty';
const O = (e: string | any[], t: any, n: { [x: string]: any }) => {
  for (
    let r = (t: number) => {
        const r = e[t],
          o = r.code,
          a = r.values;
        (e[t].hasShortVariantsText = true),
          a.forEach((r: { label: any; status: string }) => {
            const a = r.label,
              i = void 0 === a ? '' : a;
            i.length > 8 && (e[t].hasShortVariantsText = false),
              i === n[o] ? (r.status = 'selected') : (r.status = '');
          });
      },
      o = 0;
    o < e.length;
    o++
  )
    r(o);

  for (
    let a = (r: number) => {
        const o = e[r],
          a = o.code;
        o.values.forEach(({ label }) => {
          const i = label;
          if (i === n[a])
            for (
              let c = (n: string | number) => {
                  const r = e[n],
                    o = r.code;
                  r.values.forEach((e: { label: any; status: any }) => {
                    _.find(t, (t) => {
                      return t[a] === i && t[o] === e.label;
                    }) || (e.status = EMPTY);
                  });
                },
                u = r + 1;
              u < e.length;
              u++
            )
              c(u);
        });
      },
      i = 0;
    i < e.length;
    i++
  )
    a(i);
  for (
    let c = (r: number) => {
        const o = e[r],
          a = o.code;
        o.values.forEach(({ label }) => {
          const i = label;
          if (i === n[a])
            for (
              let c = (n: number) => {
                  const r = e[n],
                    o = r.code;
                  r.values.forEach((e: { label: any; status: any }) => {
                    _.find(t, (t) => {
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
      u = e.length - 1;
    u > -1;
    u--
  )
    c(u);
  if (1 === e.length) {
    const s = e[0],
      d = s.code;
    s.values.forEach((e: { label: any; status: any }) => {
      const n = e.label;
      _.find(t, (e) => {
        return e[d] === n;
      }) || (e.status = EMPTY);
    });
  }
  return e;
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
