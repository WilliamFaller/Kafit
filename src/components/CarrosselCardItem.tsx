import { Box, HStack, Text, VStack, Image, Heading } from 'native-base';
import { useState } from 'react';

import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'

import { Button } from './Button';

type Props = {
  item: {
    imgUrl: string;
    title: string;
    series: number;
    repetitions: number;
  }
  index: number;
}

export function carrosselCardItem({ item, index }: Props) {
  const [trainingStarted, setTrainingStarted] = useState(false)
  const name = item.title
  return (
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
        <Heading fontSize="lg" alignSelf="center" mb={6} mt={5} color="gray.100">{name}</Heading>
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
        <Button isDisabled={trainingStarted} title="Marcar como realizado" />
      </Box>
    </VStack>
  )
}