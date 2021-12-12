import styled from "styled-components";

export const SearchedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(226, 226, 226, 1) 57%,
    rgba(195, 195, 195, 1) 100%
  );
  padding: 20px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 150px;
  box-shadow: #666 1px 1px 4px 0;
`;

export const Image = styled.img`
  border: 0.1rem solid #999;
  padding: 1px;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
export const List = styled.ul`
  list-style: none;
`;
export const Data = styled.li`
  font-size: 0.9rem;
  color: #666;
`;
export const SubText = styled.strong`
  color: #555;
`;
