import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  min-width: 550px;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SideImage = styled.div`
  flex: 1;
  background-color: black;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
