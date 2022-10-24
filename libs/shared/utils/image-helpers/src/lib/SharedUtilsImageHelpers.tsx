function b(arg0, arg1) {
  return !(!arg0 || !arg1) && arg0.endsWith('.'.concat(arg1));
}
export const getStoredImageURL = (
  t: string,
  size: string | number,
  n?: string
) => {
  let r = `w${size}`;
  if (n) {
    r = ''.concat(`${size}x`).concat(n);
  }
  try {
    if (b(t, 'gif')) return t;
    if (!t || -1 === t.indexOf('/ts/')) {
      const i = t.split('/');
      return (
        i.forEach(function (t: string, e: number) {
          'cache' === t && (i[e + 1] = r);
        }),
        (t = i.join('/'))
      );
    }
    const s = t.split('/ts/');
    if (-1 === t.indexOf('/cache/'))
      return ''.concat(s[0], '/cache/').concat(r, '/ts/').concat(s[1]);
    if (-1 !== t.indexOf('/cache/')) {
      const a = t.split('/cache/');
      return ''.concat(a[0], '/cache/').concat(r, '/ts/').concat(s[1]);
    }
  } catch (o) {
    return t;
  }
};

export const convertPriceVND = (t: string) => {
  const e = (t += '').split('.');
  let n = e[0];
  const r = e.length > 1 ? `.${e[1]}` : '';
  for (const i = /(\d+)(\d{3})/; i.test(n); ) {
    n = n.replace(i, '$1.$2');
  }
  return `${n + r}₫`;
};
