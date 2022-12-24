import React from 'react'
import {
  Text,
  View
} from 'react-native'

import MainButton from 'components/Buttons/MainButton'
import Wheel from 'components/Wheel'

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
