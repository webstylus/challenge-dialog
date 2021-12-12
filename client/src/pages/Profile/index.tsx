import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Card } from "../../components/Card";
import { useList } from "../../context/ListContext";
import { IUserRepository } from "../../modules/users/IUserRepository";
import {
  Container,
  Content,
  Title,
  HeaderContainer,
  Image,
  ProfileContainer,
  SubTitle,
  FriendList,
  FriendTitle,
} from "./styles";

type ParamsProps = {
  id: string;
};

export function Profile() {
  const [user, setUser] = useState<IUserRepository>({} as IUserRepository);
  const { id } = useParams() as ParamsProps;
  const { getUserById, byIdLoading, byIdError } = useList();

  function getUser(id: string) {
    getUserById({
      variables: { _id: id },
    }).then((r) => {
      const [data] = r.data ? r.data.findById : [];
      setUser(data);
    });
  }

  useEffect(() => {
    getUser(id);
  }, [id]);

  if (byIdError) {
    return (
      <Container>
        <Title>Fail to get user: {byIdError.message}</Title>
      </Container>
    );
  }

  if (byIdLoading) {
    return (
      <Container>
        <Title>Loading ...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <Image src={user.picture} />
          <ProfileContainer>
            <Title>Name: {user.name}</Title>
            <SubTitle>Age: {user.age}</SubTitle>
            <SubTitle>Email: {user.email}</SubTitle>
          </ProfileContainer>
        </HeaderContainer>

        {user.friends && (
          <>
            <FriendTitle>
              Friend List of <strong>{user.name}</strong>
            </FriendTitle>
            <FriendList>
              {user.friends.map((friend) => (
                <Card key={friend._id} user={friend} friend={true} />
              ))}
            </FriendList>
          </>
        )}
      </Content>
    </Container>
  );
}
