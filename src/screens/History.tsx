import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Heading, VStack, SectionList, Text } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'

export function History() {
  const [exercises, setExercises] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const loadExercises = async () => {
        const storedExercises = await AsyncStorage.getItem('exercises');
        if (storedExercises) {
          setExercises(JSON.parse(storedExercises));
        }
      };
      
      loadExercises();
    }, [])
    );
    
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