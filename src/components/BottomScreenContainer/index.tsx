import React, { PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native'
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated'
import BottomScreenButton from 'components/BottomScreenButton'

import styles from './styles'

type Props = PropsWithChildren<{
  onButtonPress?: () => void
  buttonLabel?: string
  withBottomButton?: boolean
  containerStyle?: ViewStyle | ViewStyle[]
}>

const BottomContainer: React.FC<Props> = ({
  children,
  buttonLabel,
  onButtonPress,
  withBottomButton = true,
  containerStyle
}: Props) => {
  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOutUp}
      style={[styles.container, containerStyle]}>
      {children}
      {withBottomButton &&
        <BottomScreenButton
          buttonLabel={buttonLabel}
          onButtonPress={onButtonPress}
        />
      }
    </Animated.View>
  )
}

export default BottomContainer