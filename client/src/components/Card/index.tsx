import { Link } from "react-router-dom";

import { IUserRepository } from "../../modules/users/IUserRepository";
import { Container, Data, Image, List, SubText } from "./styles";

type UserProps = {
  user: IUserRepository;
  friend?: boolean;
};

export function Card(props: UserProps) {
  const { user, friend } = props;

  return (
    <Container>
      {!friend ? (
        <Link to={`/profile/${user._id}`}>
          <Image width={200} height={200} src={user.picture} />
        </Link>
      ) : (
        <Image width={200} height={200} src={user.picture} />
      )}
      <List>
        <Data>
          <SubText>Name:</SubText> {user.name}
        </Data>
        <Data>
          <SubText>Age:</SubText> {user.age}
        </Data>
        {!friend && (
          <>
            <Data>
              <SubText>Eyes Color:</SubText> {user.eyeColor}
            </Data>
            <Data>
              <SubText>Company:</SubText> {user.company}
            </Data>
            <Data>
              <SubText>Email:</SubText> {user.email}
            </Data>
          </>
        )}
      </List>
    </Container>
  );
}
