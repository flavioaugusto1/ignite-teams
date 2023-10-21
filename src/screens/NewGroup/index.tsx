import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
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

        <Button 
          title="Criar"
        />
      </Content>
    </Container>
  )
}