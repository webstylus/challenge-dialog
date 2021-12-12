import { Card } from "../../components/Card";
import { useList } from "../../context/ListContext";
import { Container, Content, Title, SubTitle } from "./styles";

export function Home() {
  const { users, listLoading, listError } = useList();

  if (listLoading)
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );

  if (listError)
    return (
      <Container>
        <Title>Erro to get data: {listError.message}</Title>
      </Container>
    );

  return (
    <Container>
      <SubTitle>My friends</SubTitle>
      <Content>
        {users.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </Content>
    </Container>
  );
}
