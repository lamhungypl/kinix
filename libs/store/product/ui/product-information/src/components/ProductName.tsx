import styled from 'styled-components';

export const StyledProductName = styled.h1`
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: 400;
  margin-bottom: 4px;
  margin-top: 0px;
  word-break: break-word;
`;

export const ProductName = ({ name = '' }) => {
  return <StyledProductName>{name}</StyledProductName>;
};
