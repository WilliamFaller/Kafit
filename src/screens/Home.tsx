import React, { useCallback, useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text, Icon, Box, Pressable } from 'native-base';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { training } from '../db/trainingData';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { ExerciseCard } from '@components/ExerciseCard';
import { HomeHeader } from '@components/HomeHeader';


interface TrainingItem {
    day: string;
    groups: string[];
}

export function Home() {
  const [selectedTraining, setSelectedTraining] = useState<string>('');
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const defaultTraining = "abc1";
  const date = new Date();
  const day = date.getDay();

  const selectedTrainingData = training[selectedTraining as keyof typeof training] || {};

  let trainingArray: TrainingItem[] = [];
  trainingArray = Object.keys(selectedTrainingData.days || {}).map((key) => ({
    day: key,
    groups: selectedTrainingData.days[key as keyof typeof selectedTrainingData.days]
  }));

  console.log(trainingArray);

  const reorderedTrainingArray = trainingArray && trainingArray.length > 0
    ? [...trainingArray.slice(1), trainingArray[0]]
    : [];

  const handleOpenExerciseDetails = (item: TrainingItem, selectedTraining: string | null) => {
    if (selectedTraining) {
      navigation.navigate('exercise', { item, selectedTraining });
    }
  };

  useFocusEffect(useCallback(() => {
    const fetchTraining = async () => {
      try {
        const storedTraining = await AsyncStorage.getItem('selectedTraining1');
        setSelectedTraining(storedTraining || defaultTraining);
      } catch (error) {
        console.error('Error fetching training:', error);
      }
    };

    fetchTraining();
  }, []));

  return (
    <VStack flex={1}>
      <HomeHeader />
      <VStack mt={6} flex={1} px={8}>
        <Heading fontFamily="heading" color="gray.200" fontSize="md" mb={4}>
          Treino do Dia
        </Heading>
        <Pressable onPress={() => handleOpenExerciseDetails(trainingArray[day], selectedTraining)} _pressed={{ bg: "#680b0b" }} justifyContent="center" alignItems="center" bg="red.800" h={16} mb={6} rounded="md">
          <HStack mx={4}>
            <Box flex={1} mt={0.5}>
              <Heading color="white" fontSize="lg">
                {day && reorderedTrainingArray[day-1]?.day}
              </Heading>
            </Box>
            <Box bg="#32353C" rounded="full" p={1}>
              <Icon
                as={Entypo}
                name="chevron-right"
                color="gray.200"
              />
            </Box>
          </HStack>
        </Pressable>
        <HStack justifyContent="space-between" mb={5}>
          <Heading fontFamily="heading" color="gray.200" fontSize="md">
            Meus Treinos
          </Heading>
          <Text fontFamily="heading" color="gray.200" fontSize="sm">
            6
          </Text>
        </HStack>
        <FlatList
          data={reorderedTrainingArray}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <ExerciseCard
              name={item.day}
              groups={item.groups}
              onPress={() => handleOpenExerciseDetails(item, selectedTraining)}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 16 }}
        />
      </VStack>
    </VStack>
  );
}
