import { Image, IImageProps } from "native-base";

export function AppLogo({ ...rest }) {
  return (
    <Image
      w={32}
      h={16}
      {...rest}
          />
  )
}