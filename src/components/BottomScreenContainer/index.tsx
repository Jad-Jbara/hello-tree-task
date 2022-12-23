import React, { PropsWithChildren } from 'react'
import { Image, KeyboardAvoidingView, Text, View } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'
import MainButton from 'components/Buttons/MainButton'
import Animated, { FadeInDown, FadeOutDown, FadeOutUp } from 'react-native-reanimated'

type Props = PropsWithChildren<{
  onButtonPress?: () => void
  buttonLabel: string
}>

const BottomContainer: React.FC<Props> = ({
  children,
  buttonLabel,
  onButtonPress
}: Props) => {
  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOutUp}
      style={styles.container}>
      {children}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <MainButton
            label={buttonLabel}
            onPress={onButtonPress}
          />
        </View>
      </View>
    </Animated.View>
  )
}

export default BottomContainer