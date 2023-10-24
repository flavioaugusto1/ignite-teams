import { useState } from 'react'
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', { group })
  }

  console.log(group)

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
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop:20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}