import { ImageWrapper } from '@kiti/shared/ui/image-wrapper';
import { MaxLineHelper } from '@kiti/shared/ui/max-line-helper';
import { colors } from '@kiti/shared/ui/theme';
import { getStoredImageURL } from '@kiti/shared/utils/image-helpers';
import { Text } from '@kiti/store/product/ui/product-styled';
import styled, { css } from 'styled-components';

export const VariantTextTag = styled.div<{ status: string }>`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${colors.baseGray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({ status }) => {
    if (status === 'selected') {
      return css`
        background-color: x.b.veryLightBlue;
        box-shadow: 0px 0px 0px 1px x.b.blue;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          background-image: url('https://frontend.tikicdn.com/_mobile-next/static/img/iconsSelected.svg');
          width: 20px;
          height: 20px;
        }
      `;
    }
    if (status === 'empty') {
      return css`
        opacity: 0.5;
      `;
    }
  }}
`;

export const VariantImageContainer = styled.div`
  min-width: 60px;
  max-width: 60px;
  height: 60px;
  margin-left: 2px;
`;

export const VariantTagWithImage = styled(VariantTextTag)`
  padding: 0px;
  justify-content: flex-start;
  height: 64px;
`;

export const VariantTagWithImageText = styled(Text)`
  line-height: 16px;
  text-align: left;
  margin-left: 8px;
  margin-right: 8px;
`;

type Props = {
  variant: any;
  showImagePreview: any;
  imagePreviewURL: any;
  onVariantSelect: any;
};

export const ProductVariant = (props: Props) => {
  const { variant, showImagePreview, imagePreviewURL, onVariantSelect } = props;
  const { label, status } = variant;

  const VariantTextTagStyled = showImagePreview
    ? VariantTagWithImage
    : VariantTextTag;

  const LabelText = showImagePreview ? VariantTagWithImageText : Text;

  return (
    <VariantTextTagStyled onClick={onVariantSelect} status={status}>
      {showImagePreview && (
        <VariantImageContainer>
          <ImageWrapper
            src={getStoredImageURL(imagePreviewURL, 120)}
            alt={label}
            ratio={1}
            allowResponsive={false}
            allowLazyLoad={false}
          />
        </VariantImageContainer>
      )}
      <MaxLineHelper maxLine={3}>
        <LabelText>{label}</LabelText>
      </MaxLineHelper>
    </VariantTextTagStyled>
  );
};
