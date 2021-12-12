import {
  Container,
  SearchBar,
  Title,
  SearchBox,
  Button,
  SearchTitle,
  SearchContainer
} from './styles'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useList } from '../../context/ListContext'
import { SearchList } from '../SearchList'
import { IUserRepository } from '../../modules/users/IUserRepository'
export function Header() {
  const { getListSearch, loadingSearch } = useList()
  const [input, setInput] = useState('')
  const [search, setSeach] = useState<IUserRepository[]>([])

  function handleGetSearch() {
    if (input.length >= 1) {
      getListSearch({ variables: { name: input } }).then((response) => {
        if (response.data?.list.length > 0) {
          setSeach(response.data.list)
        } else {
          setSeach([])
        }
      })
    } else {
      setSeach([])
    }
  }

  return (
    <Container>
      <Title>
        <Link to={'/'} reloadDocument={true}>
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
        <Button type={'button'} onClick={handleGetSearch}>
          <FaSearch color={'#fff'} fontSize="14px" /> Search
        </Button>
      </SearchBox>
      <SearchContainer>
        {input && (
          <SearchTitle>
            You looking for <span>{input} ?</span>
          </SearchTitle>
        )}
        {loadingSearch && <SearchTitle>Searching...</SearchTitle>}
        <SearchList loading={loadingSearch} data={search} />
      </SearchContainer>
    </Container>
  )
}
