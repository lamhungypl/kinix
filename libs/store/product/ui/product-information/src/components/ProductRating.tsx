import { colors } from '@kiti/shared/ui/theme';
import { noop } from 'lodash-es';
import { memo } from 'react';
import styled from 'styled-components';

export const StartBase = (props: any) => {
  const { color, width = 11, height = 11, ...rest } = props;
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 53.867 53.867"
      enableBackground="new 0 0 53.867 53.867"
      xmlSpace="preserve"
      width={`${width}px`}
      height={`${height}px`}
      {...rest}
    >
      <polygon
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
        data-original="#EFCE4A"
        className="active-path"
        data-old_color="#cccccc"
        fill={color}
      ></polygon>
    </svg>
  );
};

export const StarFull = (props: any) => {
  const {
    color = '#FDD835',
    width = 10,
    height = 10,
    stroke = '#FFB500',
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 10"
      {...rest}
    >
      <path
        fill={color}
        fillRule="evenodd"
        stroke={stroke}
        strokeWidth="0.5"
        d="M5 .565L3.697 3.206l-2.915.423 2.109 2.056-.498 2.903L5 7.218l2.607 1.37-.498-2.903L9.218 3.63l-2.915-.423L5 .565z"
      ></path>
    </svg>
  );
};

export const StyledProductRating = styled.div`
  display: flex;
  .rating {
    font-size: 0;
    line-height: 1;
    padding: 0;
    position: relative;
    white-space: nowrap;
    display: inline-block;
    vertical-align: top;
    .rating-score {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      overflow: hidden;
      line-height: 1;
    }
    svg {
      margin-right: 2px;
    }
    > svg:last-child {
      margin-right: 0px;
    }
  }
  .review-count {
    color: #787878;
    font-size: 13px;
    line-height: 16px;
    margin-left: 7px;
    background: inherit;
  }
  .g0_1 {
    fill: #ffffff;
    fill-opacity: 0;
  }
  .g1_1 {
    fill: #c7c7c7;
  }
  .g2_1 {
    fill: #787878;
  }
  .g3_1 {
    fill: #fdd835;
  }
`;

export const ProductRating = memo((props: any) => {
  const {
    ratingAverage = 0,
    reviewCount = 0,
    showReviewCount = true,
    showStartCount = true,
    setRating = noop,
    starWidth = 10,
    startHeight = 10,
    showReview = noop,
    onClickRating = noop,
    ...restProps
  } = props;

  console.log({ setRating, showReview, onClickRating });

  const baseStars = [];
  const fullStars = [];
  const ratingScore = 2 * ratingAverage * 10;

  for (let index = 0; index < 5; index++) {
    baseStars.push(
      <StartBase
        key={index}
        width={starWidth}
        height={startHeight}
        color={colors.disabled}
      />
    );
  }

  for (let index = 0; index < ratingAverage; index++) {
    fullStars.push(
      <StarFull
        key={index}
        width={starWidth}
        height={startHeight}
        color={colors.yellow}
      />
    );
  }

  return (
    <StyledProductRating {...restProps}>
      {showStartCount && (
        <span className="rating">
          {baseStars}
          <div
            className="rating-score"
            style={{
              width: `calc(${ratingScore}% - 1px)`,
            }}
          >
            {fullStars}
          </div>
        </span>
      )}
      {showReviewCount && reviewCount > 0 && (
        <span className="review-count">{reviewCount}</span>
      )}
    </StyledProductRating>
  );
});
