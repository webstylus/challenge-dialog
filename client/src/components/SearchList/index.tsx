import { Link } from "react-router-dom";

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
  const { data } = props;

  return (
    <SearchedContainer>
      {data &&
        data.map((user) => (
          <Container key={`${user._id}_${user.age}`}>
            <Link to={`/profile/${user._id}`}>
              <Image src={user.picture} />
            </Link>
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
