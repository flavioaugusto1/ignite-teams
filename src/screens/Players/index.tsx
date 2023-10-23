import { FlatList } from 'react-native';
import { useState } from 'react'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, Form, HeaderList, NumberOfPlayers } from "./style";

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Flávio', 'Isabel'])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subTitle="Adcione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon
          name="add"
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => { }}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message='Não jogadores nesse time' />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button
        title='Remover turma'
        type='SECONDARY'
      />
    </Container>
  )
}