import {
  ApolloError,
  LazyQueryResult,
  QueryLazyOptions,
  useLazyQuery,
  useQuery,
} from "@apollo/client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { GET_LIST, GET_LIST_SEARCH, GET_USER_BY_ID } from "../graphql";
import { IUserRepository } from "../modules/users/IUserRepository";

type QueryPropsList = {
  list?: IUserRepository[];
};

type QueryPropsFindById = {
  findById: IUserRepository[];
};

type ListContextData = {
  byIdData: QueryPropsFindById;
  getUserById: (
    options?: QueryLazyOptions<any>
  ) => Promise<LazyQueryResult<any, any>>;
  byIdLoading: boolean;
  byIdError: ApolloError | undefined;
  users: IUserRepository[];
  dataSearch: QueryPropsList;
  loadingSearch: boolean;
  listLoading: boolean;
  getListSearch: (
    options?: QueryLazyOptions<any>
  ) => Promise<LazyQueryResult<any, any>>;
  listError: ApolloError | undefined;
  errorSearch: ApolloError | undefined;
};

type ListProviderProps = {
  children: ReactNode;
};

export const ListContext = createContext({} as ListContextData);

function ListProvider({ children }: ListProviderProps) {
  const [users, setUsers] = useState([]);
  const {
    error: listError,
    loading: listLoading,
    data: listData,
  } = useQuery(GET_LIST);
  const [
    getListSearch,
    { error: errorSearch, data: dataSearch, loading: loadingSearch },
  ] = useLazyQuery(GET_LIST_SEARCH, {
    fetchPolicy: "no-cache",
  });
  const [
    getUserById,
    { error: byIdError, loading: byIdLoading, data: byIdData },
  ] = useLazyQuery(GET_USER_BY_ID);

  useEffect(() => {
    if (!listLoading) {
      const data = listData ? listData?.list : [];
      setUsers(data);
    }
  }, [listLoading]);

  return (
    <ListContext.Provider
      value={{
        byIdData,
        getUserById,
        byIdError,
        byIdLoading,
        users,
        listLoading,
        listError,
        loadingSearch,
        getListSearch,
        dataSearch,
        errorSearch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

function useList() {
  return useContext(ListContext);
}

export { ListProvider, useList };
