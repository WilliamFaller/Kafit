import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "red.600"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="red.500"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "red.700"
      }}
      {...rest}
    >
      <Text        
        color={variant === "outline" ? "red.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}