import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useList } from "../../context/ListContext";
import { IUserRepository } from "../../modules/users/IUserRepository";
import { SearchList } from "../SearchList";
import {
  Container,
  SearchBar,
  Title,
  SearchBox,
  Button,
  SearchTitle,
} from "./styles";

export function Header() {
  const { getListSearch, loadingSearch } = useList();
  const [input, setInput] = useState("");
  const [search, setSeach] = useState<IUserRepository[]>([]);

  function handleGetSearch() {
    if (input.length >= 1) {
      getListSearch({ variables: { name: input } }).then((response) => {
        console.log(input);
        if (response.data?.list.length > 0) {
          setSeach(response.data.list);
        } else {
          setSeach([]);
        }
      });
    } else {
      setSeach([]);
    }
  }

  useEffect(() => {
    handleGetSearch();
  }, [input]);

  return (
    <Container>
      <Title>
        <Link to={"/"} reloadDocument={true}>
          MySocial
        </Link>
      </Title>

      <SearchBox>
        <SearchBar
          placeholder="Search a friend..."
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button type={"button"} onClick={handleGetSearch}>
          Search <FaSearch color={"#fff"} fontSize="14px" />
        </Button>
      </SearchBox>

      {loadingSearch && <SearchTitle>Searching...</SearchTitle>}
      {input && (
        <SearchTitle>
          You looking for <span>{input} ?</span>
        </SearchTitle>
      )}

      <SearchList data={search} />
    </Container>
  );
}
