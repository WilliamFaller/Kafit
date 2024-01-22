import { HStack, Heading, Text, VStack } from "native-base";

type exerciseProps = Object[] & {
  title: string;
  data: string[];
}

export function HistoryCard(list: exerciseProps) {
  const exercises = list.list
  return (
    <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" alignItems="center" justifyContent="space-between">
      <VStack mr={5} flex={1}>
        <Heading color="white" fontSize="md" fontFamily="heading" textTransform="capitalize" numberOfLines={1}>
          {exercises.day}
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          {exercises.data}
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md" >
        {exercises.time}
      </Text>
    </HStack>
  )
}