import { useNavigate } from "react-router-dom";
import { useList } from "../../context/ListContext";

import { IUserRepository } from "../../modules/users/IUserRepository";
import {
  Container,
  Data,
  Image,
  List,
  SubText,
  SearchedContainer,
} from "./styles";

type UserProps = {
  data?: IUserRepository[];
};

export function SearchList(props: UserProps) {
  const { getUserById } = useList();
  const { data } = props;
  const navigation = useNavigate();

  function handleChangeUser(id: string) {
    getUserById({
      variables: { _id: id },
    }).then((r) => {
      const [data] = r.data ? r.data.findById : [];
    });
    navigation(`/profile/${id}`);
  }

  return (
    <SearchedContainer>
      {data &&
        data.map((user) => (
          <Container
            onClick={() => handleChangeUser(user._id)}
            key={`${user._id}_${user.age}`}
          >
            <Image src={user.picture} />

            <List>
              <Data>
                <SubText>Name:</SubText> {user.name}
              </Data>
            </List>
          </Container>
        ))}
    </SearchedContainer>
  );
}
