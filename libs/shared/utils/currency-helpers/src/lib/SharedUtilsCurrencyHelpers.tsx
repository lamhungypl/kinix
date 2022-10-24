export const convertPriceVND = (t: string) => {
  const e = (t += '').split('.');
  let n = e[0];
  const r = e.length > 1 ? `.${e[1]}` : '';
  for (const i = /(\d+)(\d{3})/; i.test(n); ) {
    n = n.replace(i, '$1.$2');
  }
  return `${n + r}₫`;
};
