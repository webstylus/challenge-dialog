import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-gap: 3rem 3rem;
  align-items: center;
  margin-bottom: 30px;
`
export const SearchContainer = styled.div``

export const SearchBar = styled.input`
  border: 0.2rem solid #3e95eb;
  border-radius: 50px;
  padding: 10px 15px;
  width: 400px;
  outline: none;
`
export const SearchTitle = styled.p`
  font-size: 16px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  span {
    color: #333;
    font-weight: bold;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  a {
    color: #fff;
    text-decoration: none;
  }
`
export const SearchBox = styled.div``

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
  height: 40px;
  padding: 0 20px;

  width: 100px;
`
