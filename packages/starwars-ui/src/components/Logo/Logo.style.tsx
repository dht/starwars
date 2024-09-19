import styled from 'styled-components';

export const Wrapper = styled.h1`
  font-family: 'Star Jedi', sans-serif;
  color: white;
  padding: 0;
  margin: 0;

  &.clickable {
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 10px white;
    }
  }
`;
