import React, { useEffect, useState } from 'react'
import {
  StatusBar,
  Text,
  View
} from 'react-native'

import MainButton from 'components/Buttons/MainButton'
import Wheel from 'components/Wheel'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'
import BottomContainer from 'components/BottomScreenContainer'
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Colors from 'constants/ui/Colors'
import Stepper from 'components/Stepper'
import SpinRewardModal from 'modals/SpinRewardModal'

const TestSpinScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    title,
    description
  } = translations.testSpin
  const colors = [Colors.green, Colors.black]
  const backgroundColor = useSharedValue(0)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(backgroundColor.value, [0, 1], colors)
    }
  })

  useEffect(() => {
    backgroundColor.value = withTiming(1, { duration: 500, })
  }, [])

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const openModal = () => {
    setIsModalVisible(true)
  }

  const signUp = () => {
    navigation.navigate('')
  }

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}>
      <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Wheel
        onSpin={openModal}
      />
      <SpinRewardModal
        visible={isModalVisible}
        close={closeModal}
        modalTitle={'You’ve just won 5 spins!'}
        buttonLabel={'Sign up and claim spins!'}
        onButtonPress={signUp}
      />
    </Animated.View>
  )
}

export default TestSpinScreen
