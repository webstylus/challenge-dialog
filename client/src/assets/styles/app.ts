import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
  grid-template-areas:
    "header"
    "all";
`;
