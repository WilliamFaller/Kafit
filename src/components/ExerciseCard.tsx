import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, Text, VStack, Icon, Box } from "native-base";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  name: string;
  groups: string;
};

export function ExerciseCard({ name, groups, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.600" alignItems="center" p={3} pr={4} rounded="md" mb={3}>
        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            {name}
          </Heading>
          <Text color="red.500" fontSize="sm" fontFamily="heading" mt={1} numberOfLines={2}>
            {groups}
          </Text>
        </VStack>
        <Box bg="#32353C" rounded="full" p={1}>
          <Icon
            as={Entypo}
            name="chevron-right"
            color="gray.200"
          />
        </Box>
      </HStack>
    </TouchableOpacity>
  )
}