import { Close } from '@kiti/shared/ui/app-icons';
import { AppModal } from '@kiti/shared/ui/app-modal';
import { WebpImg } from '@kiti/shared/ui/app-webp-img';
import { StyledPhotoList } from '@kiti/shared/ui/image-slider';
import { colors } from '@kiti/shared/ui/theme';
import { ImagesCarousel } from '@kiti/store/product/ui/images-carousel';
import {
  StyledImageSlider,
  StyledPhotosModal,
} from '@kiti/store/product/ui/product-image-styled';
import { get, map } from 'lodash-es';
import React, { Component, createRef } from 'react';
import ReactSwipe from 'react-swipe';
import { createGlobalStyle, css } from 'styled-components';
import { BookPreview } from '../../../book-preview/src/lib/StoreProductUiBookPreview';
import { withVideoProductImage } from '../../../product-image-with-video/src/lib/StoreProductUiProductImageWithVideo';

const styled = { createGlobalStyle };

const SliderPreviewGlobalStyle = styled.createGlobalStyle<{ isOpen: boolean }>`
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
  name?: string;
  data: any[];
  index?: number;
  isOpen: boolean;
  onCloseHandler: () => void;
  BookReviewContent?: any;
  zIndex?: number;
  onChangeCurrentIndex?: any;
  bookReviewContent?: any;
  id?: any;
  onBookReviewClick?: any;
  hasBookPreview?: any;
};

type State = {
  showVideo?: boolean;
};

export class ProductImageSliderPreview extends Component<Props, State> {
  swipeBanner: React.MutableRefObject<ReactSwipe | null> =
    createRef<ReactSwipe>();
  photoWrapperScroll = createRef<HTMLDivElement>();
  photoItem = createRef<HTMLDivElement>();
  video = createRef<HTMLDivElement>();

  state = {
    showVideo: false,
  };

  componentDidMount(): void {
    const index = this.props.index;

    setTimeout(() => {
      this.photoListScrollToIndex(index);
    }, 500);
  }
  photoListScrollToIndex(itemIndex: number) {
    try {
      const photoWrapperScrollRef = this.photoWrapperScroll.current;
      const photoItemRef = this.photoItem.current;
      // const computedStyle: CSSStyleDeclaration =
      //   photoItemRef.currentStyle  || window.getComputedStyle(photoItemRef);
      // console.log({ photoItemRef });

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

  updateCurrentIndex = (itemIndex?: number) => {
    console.log({ itemIndex, props: this.props });

    const { onChangeCurrentIndex, data } = this.props;

    const { showVideo } = this.state;
    const firstItemShow = 2 === data.length ? itemIndex - 2 : itemIndex;

    this.photoListScrollToIndex(firstItemShow);
    onChangeCurrentIndex(itemIndex);
    if (0 !== itemIndex && data[0].isVideo && showVideo) {
      this.setState({ showVideo: false });
    }
  };

  swipeToPhoto(photoIndex: number) {
    return () => {
      this.swipeBanner.current?.slide(photoIndex, 100);
    };
  }

  playVideo() {
    this.setState({ showVideo: true });
  }

  render() {
    const {
      index,
      isOpen,
      onCloseHandler,
      bookReviewContent,
      zIndex = 97,
      onChangeCurrentIndex,
      data,
      id,
      onBookReviewClick,
      hasBookPreview,
      ...restProps
    } = this.props;

    const { showVideo } = this.state;

    const renderedData = data.length === 2 ? [].concat(data, data) : data;

    if (renderedData.length > 30) {
      renderedData.length = 30;
    }

    return (
      <AppModal
        isOpen={isOpen}
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
        <SliderPreviewGlobalStyle isOpen={isOpen} />

        <StyledPhotosModal {...restProps}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=12.0, minimum-scale=.25, user-scalable=yes"
          ></meta>
          <button className="btn-back" onClick={onCloseHandler}>
            <Close color={colors.muted} size={30} />
          </button>
          <StyledImageSlider
            isPreview
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ImagesCarousel
              images={renderedData}
              renderItem={withVideoProductImage({
                id: id,
                name: this.props.name,
                hasBookPreview: hasBookPreview,
                onBookReviewClick: onBookReviewClick,
                imgStyle: { maxHeight: 'calc(100vh - 200px)' },
                currentIndex: index,
                isOpenModal: isOpen,
                showVideo: showVideo,
              })}
              transitionEnd={this.updateCurrentIndex}
              onRef={(ref) => {
                console.log({ ref });

                this.swipeBanner.current = ref;
              }}
              currentIndex={index}
            ></ImagesCarousel>
            {!renderedData[index].photoForCustomer && (
              <BookPreview
                id={id}
                hasBookPreview={hasBookPreview}
                onClick={onBookReviewClick}
              />
            )}
            {!showVideo && renderedData[index].isVideo && (
              <img
                alt={'play-video'}
                className={'play-video'}
                style={{ height: 28, width: 78 }}
                src={
                  'https://salt.tikicdn.com/ts/upload/a9/02/6e/bdeae45837dc46089cb1c4fee04cae6a.png'
                }
                onClick={this.playVideo}
              />
            )}
          </StyledImageSlider>
          {data.length > 1 && (
            <StyledPhotoList ref={this.photoWrapperScroll} isPreview>
              {map(data, ({ image, photoForCustomer }, itemIndex) => {
                const someUrl = photoForCustomer
                  ? image.full_path
                  : image.medium_url;

                let someAltClassname = 'photo review';

                if (
                  index === itemIndex ||
                  (2 === data.length && index - 2 === itemIndex)
                ) {
                  someAltClassname = someAltClassname.concat('enabled');
                }
                if (itemIndex === 0) {
                  someAltClassname = someAltClassname.concat('first');
                }
                console.log(someAltClassname);

                return (
                  <div
                    className={someAltClassname}
                    key={itemIndex}
                    ref={this.photoItem}
                    onClick={this.swipeToPhoto(itemIndex)}
                    style={{
                      backgroundImage: 'url('.concat(someUrl, ')'),
                    }}
                  >
                    <WebpImg src={someUrl} isCover isContain />
                  </div>
                );
              })}
              <div style={{ paddingLeft: '8px' }} />
            </StyledPhotoList>
          )}
        </StyledPhotosModal>
      </AppModal>
    );
  }
}
