import { noop } from 'lodash-es';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scroll-carousel {
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }
  .carousel-item {
    width: 100%;
    display: inline-block;
  }
`;

type Props = {
  children: any;
  swipeOptions: any;
  className: any;
  onRef?: Function;
  childCount?: any;
};
export const Carousel = (props: Props) => {
  const intervalId = useRef<any>();

  const {
    children,
    swipeOptions,
    className,
    onRef = noop,
    childCount = children.length,
  } = props;

  const {
    transitionEnd,
    transitionMove = noop,
    startSlide = 0,
    auto = false,
  } = swipeOptions;

  const [stateSlide, setStateSlide] = useState(startSlide + 2);

  const [state, setState] = useState(false);

  const scrollCarouselRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const someRef = useRef<any>({});
  const S = useRef(0);
  const elementClientX = useRef(0);
  const E = useRef(0);
  const scrollCarouselTransitionX = useRef(-1 * stateSlide * 100);
  let N = false;

  try {
    window.addEventListener(
      'bypass_scroll_passive',
      null,
      Object.defineProperty({}, 'passive', {
        get() {
          N = true;
        },
      })
    );
  } catch (error) {
    console.log(error);
  }

  const T = useMemo(
    () =>
      !!N && {
        passive: false,
      },
    [N]
  );

  const slideToItem = useCallback(
    (slideIndex: number, args1?: any, arg2?: any) => {
      const isTransform = args1 || true;

      const scrollCarouselTime = arg2 || 300;

      setStateSlide(slideIndex);

      scrollCarouselTransitionX.current =
        0 === slideIndex ? -200 : -1 * slideIndex * 100;

      scrollCarouselRef.current.style.transition = isTransform
        ? `transform ${scrollCarouselTime / 1e3}s ease-out`
        : '';

      scrollCarouselRef.current.style.transform = `translateX(${scrollCarouselTransitionX}%)`;
    },
    []
  );

  const slideCallback = useCallback(
    (itemIndex: number, args1?: any) => {
      const transitionTime = args1 || 300;
      const n = itemIndex + 2;

      if (stateSlide !== n) {
        slideToItem(n, true, transitionTime);
        console.log('transition', itemIndex);

        transitionEnd(itemIndex);
      }
    },
    [slideToItem, stateSlide, transitionEnd]
  );

  useEffect(() => {
    if (auto) {
      clearInterval(intervalId.current);

      if (auto && childCount > 1) {
        const e = stateSlide + 1;
        intervalId.current = setInterval(() => {
          if (e >= childCount + 2) {
            slideToItem(e);
            setTimeout(() => {
              slideToItem(e - childCount, false);
              transitionEnd(e - (childCount + 2));
            }, 300);

            return;
          }
          slideCallback(e - 2);
        }, auto);
      }

      return () => clearInterval(intervalId.current);
    }
  }, [stateSlide, auto, childCount, slideCallback, slideToItem, transitionEnd]);

  useEffect(() => {
    if (!auto && intervalId.current) {
      return clearInterval(intervalId.current);
    }
  }, [auto, intervalId]);

  useEffect(() => {
    if (scrollCarouselRef?.current) {
      someRef.current.slide = slideCallback;
      someRef.current.el = scrollCarouselRef.current;
      onRef(someRef.current);
    }
  }, [onRef, slideCallback, stateSlide]);

  useEffect(() => {
    if (
      carouselContainerRef &&
      carouselContainerRef.current &&
      childCount > 1
    ) {
      const carouselContainerRefCurrent = carouselContainerRef.current;
      const handleEventClickIn = (evt: any) => {
        clearInterval(intervalId.current);
        if (evt.touches) {
          evt = evt.touches[0];
        }
        if (!S.current) {
          S.current = 1;
          elementClientX.current = evt.clientX;
        }
      };

      const handleEventClickMove = (evt: any) => {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.touches) {
          evt = evt.touches[0];
        }

        const elementClientXRemain = evt.clientX - elementClientX.current;
        if (1 === S.current && 0 !== elementClientXRemain) {
          S.current = 2;
          E.current = scrollCarouselTransitionX.current;
        }
        if (2 === S.current) {
          const containerClientWidth =
            carouselContainerRef.current?.clientWidth || 0;

          scrollCarouselTransitionX.current =
            E.current + (elementClientXRemain / containerClientWidth) * 100;

          scrollCarouselRef.current.style.transform = `translateX(${scrollCarouselTransitionX.current}%)`;

          transitionMove(scrollCarouselTransitionX.current);
        }
      };

      const handleEventClickOut = () => {
        if (2 === S.current) {
          S.current = 0;
          if (
            Math.abs(scrollCarouselTransitionX.current + 100 * stateSlide) > 20
          ) {
            const e =
              scrollCarouselTransitionX.current < E.current
                ? stateSlide + 1
                : stateSlide - 1;

            if ((slideToItem(e), e >= childCount + 2)) {
              slideToItem(e);
              setTimeout(() => {
                slideToItem(e - childCount, false);
                transitionEnd(e - (childCount + 2));
              }, 300);
              return;
            }
            if (e <= 1) {
              slideToItem(e);
              setTimeout(() => {
                slideToItem(childCount + 2 - e, false);
                transitionEnd(childCount - (2 - e));
              }, 300);
              return;
            }

            transitionEnd(e - 2);
          } else {
            slideToItem(stateSlide);
          }
        }
      };

      carouselContainerRefCurrent.addEventListener(
        'mousedown',
        handleEventClickIn,
        false
      );
      carouselContainerRefCurrent.addEventListener(
        'touchstart',
        handleEventClickIn,
        T
      );

      carouselContainerRefCurrent.addEventListener(
        'mousemove',
        handleEventClickMove,
        false
      );
      carouselContainerRefCurrent.addEventListener(
        'touchmove',
        handleEventClickMove,
        T
      );
      carouselContainerRefCurrent.addEventListener(
        'mouseup',
        handleEventClickOut,
        false
      );
      carouselContainerRefCurrent.addEventListener(
        'touchend',
        handleEventClickOut,
        false
      );

      return () => {
        carouselContainerRefCurrent.removeEventListener(
          'mousedown',
          handleEventClickIn,
          false
        );
        carouselContainerRefCurrent.removeEventListener(
          'touchstart',
          handleEventClickIn,
          false
        );
        carouselContainerRefCurrent.removeEventListener(
          'mouseup',
          handleEventClickOut,
          false
        );
        carouselContainerRefCurrent.removeEventListener(
          'touchend',
          handleEventClickOut,
          false
        );
        carouselContainerRefCurrent.removeEventListener(
          'mousemove',
          handleEventClickMove,
          false
        );
        carouselContainerRefCurrent.removeEventListener(
          'touchmove',
          handleEventClickMove,
          false
        );
      };
    }
  }, [
    T,
    carouselContainerRef,
    childCount,
    children,
    slideToItem,
    stateSlide,
    transitionEnd,
    transitionMove,
  ]);

  useEffect(() => {
    if (startSlide + 2 !== stateSlide) {
      slideToItem(startSlide + 2);
    }
  }, [slideToItem, startSlide, stateSlide]);

  useEffect(() => {
    setState(true);
    slideToItem(startSlide + 2, false);
  }, [slideToItem, startSlide]);

  return (
    <StyledCarouselContainer ref={carouselContainerRef} className={className}>
      <div
        ref={scrollCarouselRef}
        style={{
          transform: `translateX(${scrollCarouselTransitionX.current}%)`,
        }}
      >
        <div className="carousel-item" data-index={-2} key={-2}>
          {state ? children[children.length - 2] : children[0]}
        </div>
        <div className="carousel-item" data-index={-1} key={-1}>
          {children[children.length - 1]}
        </div>
        {children.map((childElement: any, childIndex: number) => (
          <div
            className="carousel-item"
            data-index={childIndex}
            key={childIndex}
          >
            {childElement}
          </div>
        ))}
        <div
          className="carousel-item"
          data-index={children.length}
          key={'extra-1'}
        >
          {children[1]}
        </div>
        <div
          className="carousel-item"
          data-index={children.length + 1}
          key={'extra-2'}
        >
          {children[1]}
        </div>
      </div>
    </StyledCarouselContainer>
  );
};

/* eslint-disable-next-line */
export interface SharedUiCarouselProps {}

const StyledSharedUiCarousel = styled.div`
  color: pink;
`;

export function SharedUiCarousel(props: SharedUiCarouselProps) {
  return (
    <StyledSharedUiCarousel>
      <h1>Welcome to SharedUiCarousel!</h1>
    </StyledSharedUiCarousel>
  );
}

export default SharedUiCarousel;
