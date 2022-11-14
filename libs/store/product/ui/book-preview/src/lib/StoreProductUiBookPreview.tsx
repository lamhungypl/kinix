import { actionNames } from '@kiti/shared/utils/app-store';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const BookPreview = (props: {
  id: any;
  hasBookPreview: any;
  onClick: any;
}) => {
  const { id, hasBookPreview, onClick } = props;

  const [bookData, setBookData] = useState<any>({});

  const { bookReviewTitle, bookContentUrl } = bookData;

  const fetchBookPreviewData = useCallback(() => {
    if (hasBookPreview) {
      const data: any = {};

      const bookInfoTitle = data?.book_info?.title;

      const book_header = 'data.book_header || []';

      const bookContentUrl = `Object(i.a)(${book_header}, 1)[0].src`;
      setBookData({
        bookReviewTitle: bookInfoTitle,
        bookContentUrl: bookContentUrl,
      });
    }
  }, [hasBookPreview]);

  useEffect(() => {
    if (hasBookPreview) {
      fetchBookPreviewData();
    }
  }, [fetchBookPreviewData, hasBookPreview, id]);

  return hasBookPreview && bookReviewTitle ? (
    <img
      onClick={() => {
        onClick(actionNames.BOOK_REVIEW, bookReviewTitle, {
          bookContentUrl: bookContentUrl,
        });
      }}
      className="book-review"
      src={`https://frontend.tikicdn.com/_mobile-next/static/img/icons/doc_thu.svg`}
      alt={'book-review-icon'}
      width={90}
      height={28}
    />
  ) : null;
};
