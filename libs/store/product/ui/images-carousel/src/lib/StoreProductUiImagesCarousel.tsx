import { Carousel } from '@kiti/shared/ui/carousel';
import { noop } from 'lodash-es';
import { useEffect, useRef, useState } from 'react';

type Props = {
  images?: any[];
  transitionEnd?: (...args: any[]) => void;
  renderItem: any;
  currentIndex: any;
  onRef?: any;
};

export const ImagesCarousel = (props: Props) => {
  const {
    images = [],
    transitionEnd = noop,
    renderItem,
    currentIndex,
    onRef,
  } = props;

  const [state1, setState1] = useState(currentIndex);
  const [state2, setState2] = useState(currentIndex);

  const someRefChild = useRef(null);

  useEffect(() => {
    if (someRefChild.current) {
      onRef?.(someRefChild.current);
    }
  }, [onRef]);
  return (
    <Carousel
      childCount={images.length}
      className="carousel"
      swipeOptions={{
        transitionEnd: (e) => {
          if (e >= state2) {
            setState2(e);
          }
          setState1(e);
          transitionEnd(e);
        },
        startSlide: state1,
      }}
      onRef={(e: any) => {
        someRefChild.current = e;
      }}
    >
      {images.map((imageEl, index) => {
        const check =
          index - state1 === 0 ||
          0 === index ||
          index - state1 === 1 ||
          index === images.length - 1 ||
          index < state2;

        return (
          <div key={index}>
            {check ? renderItem(imageEl, index, check) : null}
          </div>
        );
      })}
    </Carousel>
  );
};
