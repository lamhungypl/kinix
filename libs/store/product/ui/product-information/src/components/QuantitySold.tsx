import { colors } from '@kiti/shared/ui/theme';
import styled from 'styled-components';

export const StyledQuantityText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const QuantitySold = (props: any) => {
  const {
    quantitySoldText,
    needSeparator = false,
    separatorHeight = 9,
    style,
    textStyle,
    ...restProps
  } = props;
  return quantitySoldText ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: colors.gray_60,
        ...style,
      }}
    >
      {needSeparator && (
        <div
          style={{
            width: 1,
            height: separatorHeight,
            backgroundColor: colors.disabled,
          }}
        />
      )}
      <StyledQuantityText
        style={{
          paddingLeft: 6,
          ...textStyle,
        }}
        {...restProps}
      >
        {quantitySoldText}
      </StyledQuantityText>
    </div>
  ) : null;
};
