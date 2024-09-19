import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 1fr;
`;

export const Top = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  padding: 0 50px;
`;

export const H1 = styled.h1`
  color: white;
  text-align: center;
`;

export const Content = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
`;
