import styled from 'styled-components';

export const MaxLineHelper = styled.div<{ maxLine?: number }>`
  ${({ maxLine }) => {
    if (maxLine) {
      return `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${maxLine};
    overflow: hidden;
    text-overflow: ellipsis;`;
    }
  }}
`;

export default MaxLineHelper;
