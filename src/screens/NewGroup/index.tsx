import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function NewGroup() {
  return(
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas."
        />

        <Input 
          placeholder="Nome do usuário"
          // placeholderTextColor={({ theme }) => theme.COLORS.}
        />

        <Button 
          title="Criar"
          style={{ marginTop:20 }}
        />
      </Content>
    </Container>
  )
}