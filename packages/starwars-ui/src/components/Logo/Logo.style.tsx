import styled from 'styled-components';

export const Wrapper = styled.h1`
  font-family: 'Star Jedi', sans-serif;
  color: white;
  padding: 0;
  margin: 0;
  transition: text-shadow 0.2s;
  white-space: nowrap;
  position: relative;

  &:hover {
    text-shadow: 0 0 10px white;
  }

  &.clickable {
    cursor: pointer;
  }
`;

export const Sub = styled.div`
  color: gold;
  font-family: 'Allison', sans-serif;
  position: absolute;
  left: 175px;
  top: -15px;
  transform: rotate(10deg);
  text-shadow: 0 0 5px #000, 0 0 10px gold;
`;
