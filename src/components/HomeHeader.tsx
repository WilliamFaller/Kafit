import { HStack } from "native-base";
import { AppLogo } from "./AppLogo";

export function HomeHeader() {
  return(
    <HStack bg="gray.600" pt={16} pb={5} justifyContent="center" alignItems="center">
      <AppLogo 
        source={require('../assets/kafit-logo.png')}
        alt="Imagem do usuário"
        mr={4}
      />
    </HStack>
  )
}