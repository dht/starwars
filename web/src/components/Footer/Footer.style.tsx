import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  font-family: 'Exo 2', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  margin-bottom: 30px;

  > div {
    text-align: center;
    &:after {
      content: '•';
      margin: 0 10px;
    }

    &:last-child {
      &:after {
        content: '';
        margin: 0;
      }
    }
  }
`;
