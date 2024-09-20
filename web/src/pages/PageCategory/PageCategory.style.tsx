import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 1fr;
`;

export const Top = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  padding: 10px 50px;
`;

export const Actions = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const Content = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-top: 20px;
`;

export const Loader = styled.div`
  padding: 10vh auto;
`;
