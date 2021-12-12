import { Container, Data, Image, List, SubText } from './styles'
import { IUserRepository } from '../../modules/users/IUserRepository'
import { Link } from 'react-router-dom'

type UserProps = {
  user: IUserRepository
}

export function Card(props: UserProps) {
  const { user } = props

  return (
    <Container>
      <Link state={user} to="/profile">
        <Image width={200} height={200} src={user.picture} />
      </Link>
      <List>
        <Data>
          <SubText>Name:</SubText> {user.name}
        </Data>
        <Data>
          <SubText>Age:</SubText> {user.age}
        </Data>
        <Data>
          <SubText>Eyes Color:</SubText> {user.eyeColor}
        </Data>
        <Data>
          <SubText>Company:</SubText> {user.company}
        </Data>
        <Data>
          <SubText>Email:</SubText> {user.email}
        </Data>
      </List>
    </Container>
  )
}
