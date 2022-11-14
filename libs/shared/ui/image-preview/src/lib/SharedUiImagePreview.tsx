import { AppModal } from '@kiti/shared/ui/app-modal';
import {
  StyledImageSlider,
  StyledPhoto,
  StyledPhotoList,
} from '@kiti/shared/ui/image-slider';
import { Picture } from '@kiti/shared/ui/picture';
import { colors } from '@kiti/shared/ui/theme';
import { get } from 'lodash-es';
import React, { Component, createRef } from 'react';
import ReactSwipe from 'react-swipe';
import { createGlobalStyle, css } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    return isOpen
      ? css`
          html {
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
            height: 0;
          }
          body {
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
            height: 0;
          }
        `
      : '';
  }}
`;

const defaultImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABv1BMVEUAAAD////////////////////////////////m5ubo6Ojq6urr6+vu7u7v7+/w8PDx8fHy8vLy8vLz8/Pz8/P09PT19fX19fX29vb29vbu7u7v7+/w8PDx8fHx8fHy8vLz8/Pz8/P09PT09PT09PTx8fHx8fHy8vLy8vLz8/Pz8/Pz8/P09PT09PTx8fHy8vLz8/Pz8/Pz8/Pz8/Px8fHx8fHx8fHx8fHy8vLy8vLy8vLz8/Pz8/Pz8/Pz8/Px8fHx8fHy8vLy8vLx8fHx8fHx8fHx8fHy8vLy8vLy8vLy8vLy8vLz8/Pz8/Pz8/Pz8/Pz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Px8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz8/Py8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL8u4tzAAAAlHRSTlMAAQIDBAUGBwgKCwwNDxAREhMUFRYXGRobHR4fISQlJykrLS4wNzg8PT9BQkNESU1SU1VYW1xdXl9gY2ZnaGlub3d5gIKDhIaHiIuMj5CRkpOUmJmam5ydn6Gio6SoqquwsbO0tre6u72+wMTFx8jKy8zO0dXX2Nvc3+Hi4+Xm5+jp6+zt7vDx8vP09fb3+Pn6+/z9j0GhsQAAAAFiS0dEAf8CLd4AAAIXSURBVFjDY2AYBXQEfHbR5uTrZtSO6ZkyZYoJmdrlPOumgEEeObq5rQunwIEsyU7XjWqfggScSNMu6lg6BRUUk6Cb1Sh90hQMoEisdiW/uinYgAvp4YYKKojQruLfgqEvOg3GUiEYbmWY1rYaMPCVQ9lepIfblBxpUKB0QTjVTHjCrR6bryc7s4CljaF8dRLDrV4XpsQXIhCI1e1urThCPVsKrogtF2IiMxYDHHBon+zGgqRKogEsqIPFgAjs+uvQ1GpOBImG4ndBTUpIMBT4iKCrMwUJe2AxQGIyVHumKplFRhZEfwATuUWWLVh/AiPZZR5/P1B/hzAFZW4qKMeAWWI6usQAdU5UAyyABliCGFYTpxAHauVQDODtnTJFG8Som0IsCEB1QvyUKWogehLRBsShGmBIqQEcbRQawBBFqQH6lBrA2kyMAUXWos04DGAIQzMgvAtdd2eEBjCxh+EyQAvVgGYuIxTdk5KM2MHqNHAZwCyDYoA7A0MQctkmD1PHVIXDAAiAGdApCAyWbLj+Ah6EEleiDPADcSSboLwSIeT2BjEG9EuCeXqQoqpSAkVNPhEGREK5buCSHK1hYk/YgMkKsBAD1qqtymhqhCcQNCAZzhdv7NPFUJRB0AANhICOAaaiOEIGZBEoAAkaYEmpAUajBlBuAFlF2qAxoJtoA6KwG5BItAFm2A0Q8I4jCsTaMDKMAioBAFxWB2a5GC1fAAAAAElFTkSuQmCC';

type Props = {
  data: any[];
  index?: number;
  isOpen: boolean;
  onCloseHandler: (index?: number) => () => void;
  BookReviewContent?: any;
  zIndex?: number;
};

type State = {
  data?: any[];
  index?: number;
  viewWidth?: number;
  indexImageLoaded: number;
  isImageFullView: boolean;
  hideAnimation: boolean;
};

export class ImagePreview extends Component<Props, State> {
  swipeBanner = createRef<ReactSwipe>();
  photoWrapperScroll = createRef<HTMLDivElement>();
  photoItem = createRef<HTMLDivElement>();

  state = {
    index: this.props.index,
    isImageFullView: false,
    hideAnimation: false,
    data: this.props.data,
    indexImageLoaded: 0,
    viewWidth: 0,
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { data, index } = this.props;
    if (data !== prevProps.data) {
      this.setState({
        data: data,
        indexImageLoaded: 0,
      });
    }

    if (index !== prevProps.index) {
      this.setState(
        {
          index: index,
        },
        () => {
          this.photoListScrollToIndex(index);
        }
      );
    }
  }

  componentDidMount(): void {
    const index = this.props.index;
    const viewWidth = Math.max(
      get(document, 'documentelement.clientWidth', 0),
      window.innerWidth || 0
    );
    this.setState(
      {
        viewWidth: viewWidth,
      },
      () => {
        setTimeout(() => {
          this.photoListScrollToIndex(index);
        }, 500);
      }
    );
  }
  photoListScrollToIndex(itemIndex: number) {
    try {
      const photoWrapperScrollRef = this.photoWrapperScroll.current;
      const photoItemRef = this.photoItem.current;
      // const computedStyle: CSSStyleDeclaration =
      //   photoItemRef.currentStyle || window.getComputedStyle(photoItemRef);
      const computedStyle = window.getComputedStyle(photoItemRef);

      const marginX =
        parseFloat(computedStyle.marginLeft) +
        parseFloat(computedStyle.marginRight);

      const a = itemIndex * (photoItemRef.offsetWidth + marginX);

      if (a > photoWrapperScrollRef.offsetWidth / 2) {
        photoWrapperScrollRef.scrollLeft =
          a - photoWrapperScrollRef.offsetWidth / 2;
      }

      if (a < photoWrapperScrollRef.offsetWidth / 2) {
        photoWrapperScrollRef.scrollLeft = 0;
      }
    } catch (error) {
      console.log(error);
    }
  }

  updateCurrentIndex() {
    const currentSlideIndexPosition = this.swipeBanner.current.getPos();
    const nextIndex =
      this.state.data.length === 2
        ? currentSlideIndexPosition - 2
        : currentSlideIndexPosition;

    this.photoListScrollToIndex(nextIndex);
    this.setState({
      index: currentSlideIndexPosition,
    });
  }

  swipeToPhoto(photoIndex: number) {
    return () => {
      this.swipeBanner.current.slide(photoIndex, 100);
    };
  }

  render() {
    const {
      isOpen,
      onCloseHandler,
      BookReviewContent,
      data: propsData,
      zIndex = 97,
      ...restProps
    } = this.props;

    const {
      index: stateIndex,
      isImageFullView,
      hideAnimation,
      data = [],
      indexImageLoaded,
    } = this.state;

    const renderedData = data.length === 2 ? [].concat(data, data) : data;

    console.log({
      isImageFullView,
      hideAnimation,
    });
    if (renderedData.length > 30) {
      renderedData.length = 30;
    }

    return (
      <AppModal
        isOpen={isOpen}
        transitionTime={0}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            zIndex: zIndex,
            backgroundColor: colors.backgroundOverlay,
          },
          content: {
            borderRadius: 0,
            border: 'none',
            backgroundColor: colors.white,
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            padding: '0',
            overflow: 'hidden',
          },
        }}
        ariaHideApp={false}
      >
        <GlobalStyle isOpen={isOpen} />
        <StyledPhoto
          // hideAnimation={hideAnimation}
          {...restProps}
        >
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=12.0, minimum-scale=.25, user-scalable=yes"
          ></meta>
          <button className="btn-back" onClick={onCloseHandler(stateIndex)}>
            <span
              color={colors.muted}
              // size={30}
            ></span>
          </button>
          <StyledImageSlider isPreview={true}>
            <ReactSwipe
              childCount={data.length}
              className="carousel"
              swipeOptions={{
                continuous: true,
                transitionEnd: this.updateCurrentIndex,
                startSlide: stateIndex,
              }}
              ref={this.swipeBanner}
            >
              {renderedData.map(({ image, photoForCustomer }, itemIndex) => {
                const check =
                  itemIndex - stateIndex === 0 ||
                  0 === itemIndex ||
                  itemIndex - stateIndex === 1 ||
                  itemIndex <= indexImageLoaded ||
                  itemIndex === this.render.length - 1;

                const someUrl = '';

                return (
                  <div
                    key={itemIndex}
                    onClick={() => {
                      this.setState({
                        isImageFullView: !this.state.isImageFullView,
                        hideAnimation: false,
                      });
                    }}
                  >
                    <Picture
                      src={check ? someUrl : defaultImage}
                      pictureTag={
                        photoForCustomer && check ? (
                          <span className="photoForCustomer">
                            <span>Hình thực tế từ khách đã mua hàng</span>
                          </span>
                        ) : (
                          ''
                        )
                      }
                    ></Picture>
                  </div>
                );
              })}
            </ReactSwipe>
            {!renderedData[stateIndex]?.photoForCustomer && BookReviewContent && (
              <BookReviewContent
                style={{
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              />
            )}
          </StyledImageSlider>
          {data.length > 1 && (
            <StyledPhotoList ref={this.photoWrapperScroll} isPreview={true}>
              {data.map(({ image, photoForCustomer }, itemIndex) => {
                const someUrl = '';
                let someAlt = 'photo review';

                if (
                  stateIndex === itemIndex ||
                  (2 === data.length && stateIndex - 2 === itemIndex)
                ) {
                  someAlt = someAlt.concat('enabled');
                }
                if (itemIndex === 0) {
                  someAlt = someAlt.concat('first');
                }
                console.log(someAlt);

                return (
                  <div
                    key={itemIndex}
                    ref={this.photoItem}
                    onClick={this.swipeToPhoto(itemIndex)}
                  >
                    <Picture src={someUrl} dimensions="1x1" />
                  </div>
                );
              })}
              <div style={{ paddingLeft: '8px' }}></div>
            </StyledPhotoList>
          )}
        </StyledPhoto>
      </AppModal>
    );
  }
}
