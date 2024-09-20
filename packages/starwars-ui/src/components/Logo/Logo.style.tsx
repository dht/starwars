import styled from 'styled-components';

export const Wrapper = styled.h1`
  font-family: 'Star Jedi', sans-serif;
  color: white;
  padding: 0;
  margin: 0;
  transition: text-shadow 0.2s;
  white-space: nowrap;

  &:hover {
    text-shadow: 0 0 10px white;
  }

  &.clickable {
    cursor: pointer;
  }
`;
