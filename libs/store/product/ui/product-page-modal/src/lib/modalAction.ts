export const actionNames = {
  OPTIONS: 'OPTIONS',
  PROMOTIONS: 'PROMOTIONS',
  DESCRIPTION: 'DESCRIPTION',
  QNA: 'QNA',
  REVIEWS: 'REVIEWS',
  WRITE_REVIEW: 'WRITE_REVIEW',
  OTHER_SELLERS: 'OTHER_SELLERS',
  VIRTUAL_TYPE_SPECIFICATIONS: 'VIRTUAL_TYPE_SPECIFICATIONS',
  FLOWER: 'FLOWER',
  BOOK_REVIEW: 'BOOK_REVIEW',
  ATTRIBUTE: 'ATTRIBUTE',
  CHILDREN_MODULE: 'CHILDREN_MODULE',
};

export const actionLabels: Record<keyof typeof actionNames, string> = {
  OPTIONS: 'Lựa Chọn Thuộc Tính',
  PROMOTIONS: '',
  DESCRIPTION: 'Mô Tả Sản Phẩm',
  QNA: 'Hỏi, Đáp Về Sản Phẩm',
  REVIEWS: 'Đánh Giá Sản Phẩm',
  WRITE_REVIEW: 'Viết nhận xét',
  OTHER_SELLERS: 'Các Nhà Cung Cấp Khác',
  VIRTUAL_TYPE_SPECIFICATIONS: '',
  FLOWER: 'Ghi chú đơn hàng',
  BOOK_REVIEW: '',
  ATTRIBUTE: '',
  CHILDREN_MODULE: '',
};
