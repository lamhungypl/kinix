import { DynamicIconBadge } from '@kiti/shared/ui/app-dynamic-icon-badge';
import { AppVideo } from '@kiti/shared/ui/app-video';
import { WebpImg } from '@kiti/shared/ui/app-webp-img';
import { BookPreview } from '@kiti/store/product/ui/book-preview';
import { PhotoForCustomer } from '@kiti/store/product/ui/product-image-styled';
import { noop } from 'lodash-es';
import { CSSProperties } from 'react';

type Props = {
  id: any;
  openPreviewImage?: any;
  name: any;
  currentIndex: any;
  hasBookPreview: any;
  onBookReviewClick: any;
  badgesNew?: any[];
  imgStyle?: CSSProperties;
  isOpenModal?: any;
  showVideo?: any;
  isOpenPreview?: any;
};

export const withVideoProductImage = (props: Props) => {
  const {
    id,
    openPreviewImage = noop,
    name,
    currentIndex,
    hasBookPreview,
    onBookReviewClick,
    badgesNew = [],
    imgStyle = {
      height: '100%',
    },
    isOpenModal,
    showVideo,
  } = props;

  return (
    { image = {}, photoForCustomer, isVideo, videoUrl }: any,
    n?: any,
    s?: any
  ) => {
    const imageUrl = photoForCustomer ? image.full_path : image.large_url;

    const iconBadges = [];

    return isVideo ? (
      <AppVideo
        onClick={openPreviewImage}
        image={image}
        thumbnail={imageUrl}
        title={name}
        videoUrl={videoUrl || ''}
        iconBadges={iconBadges}
        currentIndex={currentIndex}
        firstPlayVideo={!isOpenModal}
        showVideo={showVideo}
        onImgClick={isOpenModal ? noop : undefined}
      />
    ) : (
      <>
        <div
          onClick={openPreviewImage}
          data-view-id={'pdp_main_view_gallery'}
          data-view-index={n}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            height: '100vw',
          }}
        >
          <WebpImg
            alt={name}
            src={s ? imageUrl : ' T.b'}
            style={imgStyle}
            width={'100%'}
            height={'100%'}
            containerStyle={{
              width: '100%',
            }}
            // dimensions={ [750]}
          />
          {photoForCustomer && (
            <PhotoForCustomer>
              Hình thực tế từ khách đã mua hàng
            </PhotoForCustomer>
          )}
          {n === 0 && (
            <div className="picture-tag">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {!isOpenModal && (
                  <BookPreview
                    id={id}
                    hasBookPreview={hasBookPreview}
                    onClick={onBookReviewClick}
                  />
                )}
                <DynamicIconBadge
                  iconBadges={iconBadges}
                  style={{
                    position: 'initial',
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div></div>
      </>
    );
  };
};
