import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  grid-area: header;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "title searchbox"
    "searchtitle searchtitle"
    "searchlist searchlist";

  @media (max-width: 640px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "title"
      "searchbox"
      "searchtitle"
      "searchlist";
  }
`;

export const SearchBar = styled.input`
  border: 0.2rem solid #3e95eb;
  border-radius: 50px;
  padding: 10px 15px;
  min-width: 300px;
  outline: none;
  @media (max-width: 440px) {
    min-width: auto;
  }
`;
export const SearchTitle = styled.p`
  padding: 10px 0;
  grid-area: searchtitle;
  width: 100%;
  font-size: 16px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  span {
    color: #333;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 640px) {
    align-self: center;
    justify-self: center;
    margin-bottom: 10px;
  }
`;
export const SearchBox = styled.div`
  grid-area: searchbox;

  justify-self: end;

  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    align-self: center;
    justify-self: center;
  }
`;

export const Button = styled.button`
  background-color: #3e95eb;
  outline: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  color: #fff;
  :hover {
    background-color: #3364b1;
  }
  border-radius: 20px;
  font-size: 14px;
  height: 40px;
  padding: 0 10px;
  width: 105px;
  text-align: center;
`;
