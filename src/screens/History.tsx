import { useState } from 'react'
import { Heading, VStack, SectionList, Text, Center } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '22.01.2024',
      day: 'Segunda-Feira',
      data: ['Costas e Biceps'],
      time: '08:52'
    },
    {
      title: '23.01.2024',
      day: 'Terça-Feira',
      data: ['Peito e Triceps'],
      time: '08:56'
    }
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderSectionFooter={({ section }) => <HistoryCard list={section} />}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Heading fontFamily="heading" color="gray.200" fontSize="md" mt={10} mb={3} ml={2}>{title}</Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color="gray.200" fontSize="md" ml={2} textAlign="center">
            Nenhum exercício registrado ainda.{'\n'}
            Bora treinar?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}