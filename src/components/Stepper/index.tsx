import React, { PropsWithChildren } from 'react'
import { Image, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'
import Animated, { SlideInRight, SlideOutLeft, SlideOutRight, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import MainButton from 'components/Buttons/MainButton'

type Props = PropsWithChildren<{
  disabled?: boolean
  steps: { title: string, description: string, nextLabel?: string }[]
  currentStep: number
  onNext: () => void
}>

const Stepper: React.FC<Props> = ({
  steps,
  disabled,
  currentStep = 0,
  onNext
}: Props) => {
  const stepsCount = steps.length
  const rotation = useSharedValue(0)


  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    }
  })

  const onPress = () => {
    rotation.value = withTiming(rotation.value + 360 * 10, { duration: 3000 })
  }

  const currentComponent = steps[currentStep]
  return (
    <View style={styles.container}>
      <Animated.View
        key={currentStep}
        entering={SlideInRight}
        exiting={SlideOutLeft}
        style={styles.innerContainer}>
        <Text style={styles.title}>{currentComponent.title}</Text>
        <Text style={styles.description}>{currentComponent.description}</Text>
        <MainButton
          buttonStyle={styles.button}
          label={currentComponent.nextLabel || 'next'}
          onPress={onNext}
        />
      </Animated.View>
      <View style={styles.row}>
        {Array(stepsCount).fill(undefined).map((item, index) => {
          const selected = currentStep === index
          return (
            <View
              key={`stepper_indicator_${index}`}
              style={[styles.emptyStep, selected && styles.selectedStep]}>
              {/* {selected && <View style={styles.selectedStep} />} */}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default Stepper