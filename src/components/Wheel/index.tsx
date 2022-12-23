import React, { PropsWithChildren } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

type Props = PropsWithChildren<{
  disabled?: boolean
  onSpin?: () => void
}>

const SPIN_DURATION = 3000

const Wheel: React.FC<Props> = ({
  onSpin,
  disabled,
}: Props) => {
  const rotation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    }
  })

  // workaround for animation callback
  const onSpinEnd = () => {
    onSpin && onSpin()
  }

  const onPress = () => {
    rotation.value = withTiming(rotation.value + 360 * 10, { duration: SPIN_DURATION })
    setTimeout(() => {
      onSpinEnd()
    }, SPIN_DURATION)
  }
  return (
    <View style={styles.container}>
      {!disabled &&
        <Image
          source={Images.wheelArrow}
          style={styles.arrow} />
      }
      <Image
        source={Images.wheelBackground}
        style={styles.wheelBackground}
      />
      <Animated.Image
        source={Images.wheelForeground}
        style={[styles.wheel, animatedStyles]}
      />
      <TouchableOpacity
        style={styles.spinButtonContainer}
        onPress={onPress}
        disabled={disabled}>
        <Animated.Image
          source={Images.spinButton}
          style={styles.spinButton}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Wheel