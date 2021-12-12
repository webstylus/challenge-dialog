import {
  Container,
  Content,
  Title,
  HeaderContainer,
  Image,
  ProfileContainer,
  SubTitle,
  FriendList,
  FriendTitle
} from './styles'
import { useLocation } from 'react-router-dom'
import { IUserRepository } from '../../modules/users/IUserRepository'
import { Card } from '../../components/Card'

export function Profile() {
  const location = useLocation()
  const user: IUserRepository = location.state

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
            <FriendTitle>Friend List</FriendTitle>
            <FriendList>
              {user.friends.map((friend) => (
                <Card key={friend._id} user={friend} />
              ))}
            </FriendList>
          </>
        )}
      </Content>
    </Container>
  )
}
