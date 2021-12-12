import styled from "styled-components";

export const Container = styled.div`
  grid-area: all;
  margin: 10px;
  display: grid;
  border-top: 1px solid #1875a3;
  padding-top: 10px;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
  justify-self: end;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
`;
