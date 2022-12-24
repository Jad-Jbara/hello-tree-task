import Images from 'assets/Images'
import BottomScreenButton from 'components/BottomScreenButton'
import BottomContainer from 'components/BottomScreenContainer'
import ToggleButton from 'components/Buttons/ToggleButton'
import IntroLogo from 'components/IntroLogo'
import LabeledInput from 'components/LabeledInput'
import Colors from 'constants/ui/Colors'
import { StatusBar } from 'expo-status-bar'
import OTPModal from 'modals/OTPModal'
import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'

const OTPScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    buttonTitle,
    description,
    title,
  } = translations.language
  const [input, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')


  const selectLanguage = async () => {
    // await LanguageStore.setLocale(selectedLanguage)
    navigation.navigate('VerifyEmailScreen')
  }

  const closeModal = () => {
    navigation.goBack()
  }
  const goNext = () => {
    navigation.replace('StepsScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <StatusBar backgroundColor={Colors.blue} />
        <OTPModal
          visible
          value={code}
          setValue={setCode}
          close={closeModal}
          onButtonPress={goNext}
        />
      </View>
    </View>
  )
}

export default OTPScreen
