import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import {
  ApolloError,
  ApolloQueryResult,
  LazyQueryResult,
  QueryLazyOptions,
  useLazyQuery,
  useQuery
} from '@apollo/client'
import { GET_LIST, GET_LIST_SEARCH } from '../graphql'
import { IUserRepository } from '../modules/users/IUserRepository'

type QueryProps = {
  list: IUserRepository[]
}

type ListContextData = {
  users: IUserRepository[]
  dataSearch: QueryProps
  loadingSearch: boolean
  listLoading: boolean
  getListSearch: (
    options?: QueryLazyOptions<any>
  ) => Promise<LazyQueryResult<any, any>>
  listError: ApolloError | undefined
  errorSearch: ApolloError | undefined
}

type ListProviderProps = {
  children: ReactNode
}

export const ListContext = createContext({} as ListContextData)

function ListProvider({ children }: ListProviderProps) {
  const [users, setUsers] = useState([])
  const {
    error: listError,
    loading: listLoading,
    data: listData
  } = useQuery(GET_LIST)
  const [
    getListSearch,
    { error: errorSearch, data: dataSearch, loading: loadingSearch }
  ] = useLazyQuery(GET_LIST_SEARCH, {
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if (!listLoading) {
      setUsers(listData?.list)
    }
  }, [listData?.list, listLoading])

  return (
    <ListContext.Provider
      value={{
        users,
        listLoading,
        listError,
        loadingSearch,
        getListSearch,
        dataSearch,
        errorSearch
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

function useList() {
  return useContext(ListContext)
}

export { ListProvider, useList }
