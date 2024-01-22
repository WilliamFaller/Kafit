import { TouchableOpacity } from 'react-native'
import { HStack, Heading, Icon, Text, VStack, Image, Box, ScrollView } from 'native-base'

import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import {training} from '../db/trainingData'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import BodySvg from '@assets/body.svg'
import { Carrossel } from '@components/Carrossel'

export function Exercise({ route }: { route: Array<any> }) {
  const { item, selectedTraining } = route.params
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const selectedDay = item.day;

  function handleGoBack() {
    navigation.goBack()
  }
  
  const exercises = training[selectedTraining].exercises[item.day]

  return (
    <VStack flex={1}>

      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={Feather}
            name="arrow-left"
            color="red.500"
            size={6}
          />
        </TouchableOpacity>
        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading fontFamily="heading" color="gray.100" fontSize="lg" flexShrink={1}>
            {item.day}
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text fontFamily="heading" color="gray.200" ml={1}>
              {item.groups}
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <Carrossel data={exercises}/>
      </ScrollView>
    </VStack>
  )
}