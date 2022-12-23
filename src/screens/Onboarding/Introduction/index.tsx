import Images from 'assets/Images'
import BottomContainer from 'components/BottomScreenContainer'
import MainButton from 'components/Buttons/MainButton'
import ToggleButton from 'components/Buttons/ToggleButton'
import IntroLogo from 'components/IntroLogo'
import Wheel from 'components/Wheel'
import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'

const IntroductionScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    title,
    description,
    buttonLabel
  } = translations.onboardingIntro

  const goToTutorial = () => {
    navigation.navigate('TutorialScreen')
  }

  return (
    <View style={styles.container}>
      <Wheel
        disabled
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <MainButton
        label={buttonLabel}
        buttonStyle={styles.buttonContainer}
        onPress={goToTutorial}
      />
    </View>
  )
}

export default IntroductionScreen
