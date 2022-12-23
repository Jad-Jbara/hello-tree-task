import React, { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'

import styles from './styles'
import MainButton from 'components/Buttons/MainButton'
import Animated, { FadeInDown, FadeOutDown, FadeOutUp } from 'react-native-reanimated'

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
      {withBottomButton && <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <MainButton
            label={buttonLabel}
            onPress={onButtonPress}
          />
        </View>
      </View>}
    </Animated.View>
  )
}

export default BottomContainer