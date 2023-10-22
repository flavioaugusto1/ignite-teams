import { Container, Icon, ButtonIconTypeStyleProps } from "./style";
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ name, type = 'PRIMARY', ...rest }: Props) {
  return(
    <Container {...rest}>
      <Icon 
        name={name}
        type={type}
      />
    </Container>
  )
}