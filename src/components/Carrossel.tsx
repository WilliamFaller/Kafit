import { Box, HStack, Text, VStack, Image, Heading } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';


import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'

import Carousel from 'react-native-snap-carousel';
import { Button } from './Button';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

type ExerciseProps = {
  exercises: Array<{ data: Object }>
}

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

type Props = {
  item: {
    imgUrl: string;
    title: string;
    series: number;
    repetitions: number;
    groups: string;
  }
  index?: number;
}

function ExerciseButton({ trainingStarted, handleFinishExercise }) {
  const [endExercise, setEndExercise] = useState(false);

  const handleFinish = () => {
    handleFinishExercise();
    setEndExercise(true);
  };

  useEffect(() => {
    if (!trainingStarted) {
      setEndExercise(false);
    }
  }, [trainingStarted]);

  return (
    !endExercise ?
      <Button
        isDisabled={!trainingStarted}
        title="Marcar como realizado"
        onPress={handleFinish}
      /> :
      <Button
        title="Concluido!"
        isDisabled={true}
      />
  );
}

export function Carrossel(exercises: ExerciseProps) {

  const [trainingStarted, setTrainingStarted] = useState(false);
  const [exercisesFinished, setExercisesFinished] = useState(0);
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const handleStartTrain = () => {
    setTrainingStarted(true);
  };

  const handleFinishExercise = () => {
    setExercisesFinished(prevCount => prevCount + 1);
  };

  const handleFinishTrain = () => {
    setTrainingStarted(false);
    setExercisesFinished(0);
    navigation.navigate('history')
  };

  return (
    <>
      <View style={styles.container} >
        <Carousel
          style={styles.cardCarrosel}
          data={exercises.data}
          keyExtractor={item => item.title}
          renderItem={({ item }: Props) => (

            <VStack pt={8}>
              <Box rounded="lg" overflow="hidden" mb={3}>
                <Image
                  w="full"
                  h={80}
                  source={{ uri: item.imgUrl }}
                  alt="Nome do Exercício"
                  resizeMode="cover"
                  rounded="lg"
                />
              </Box>
              <Box bg="gray.600" pb={4} px={4} rounded="md">
                <Heading fontSize="lg" alignSelf="center" mb={6} mt={5} color="gray.100">{item.title}</Heading>
                <HStack justifyContent="space-around" alignItems="center" mb={6} >
                  <HStack alignItems="center">
                    <SeriesSvg color="red.500" />
                    <Text color="gray.200" ml={2} fontSize="sm">
                      {item.series} séries
                    </Text>
                  </HStack>
                  <HStack alignItems="center">
                    <RepetitionsSvg color="red.500" />
                    <Text color="gray.200" ml={2} fontSize="sm">
                      {item.repetitions} repetições
                    </Text>
                  </HStack>
                </HStack>
                <ExerciseButton trainingStarted={trainingStarted} handleFinishExercise={handleFinishExercise} />
              </Box>
            </VStack>

          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />

      </View>
      <Box flex={1} justifyContent="flex-end" mt={4} mx={8}>
        {!trainingStarted ?
          <Button title="Iniciar Treino!" onPress={handleStartTrain} /> :
          <Button title="Concluir Treino!" onPress={handleFinishTrain} isDisabled={exercisesFinished < exercises.data.length} />
        }
      </Box>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardCarrosel: {
    width: ITEM_WIDTH,
  },
  image: {
    height: 250,
    borderRadius: 8,
  }
});
