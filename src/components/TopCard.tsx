import { Box, HStack, Heading, Icon, Pressable, Text } from "native-base";
import { Entypo } from '@expo/vector-icons'

export function TopCard() {
  return (
    <Box mx={8}>
    <Text fontFamily="heading" color="gray.200" fontSize="md" mb={4}></Text>
      <Pressable _pressed={{ bg: "#680b0b" }} justifyContent="center" alignItems="center" bg="red.800" h={16} mb={6} rounded="md">
        <HStack mx={4}>
          <Box flex={1} mt={0.5}>
            <Heading color="white" fontSize="lg">
              Peito e Triceps
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
    </Box>
  )
}