import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View
} from 'react-native'

import BottomContainer from 'components/BottomScreenContainer'
import IntroLogo from 'components/IntroLogo'
import LabeledInput from 'components/LabeledInput'

import { isEmail } from 'helpers/EmailChecker'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'

const VerifyEmailScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    buttonTitle,
    description,
    title,
    disclaimer,
    emailPlaceholder,
    requestAccess,
    invalidEmail
  } = translations.verifyEmail
  const [email, setEmail] = useState('')
  const [isErrorShown, setIsErrorShown] = useState(false)

  const onInputChange = (value: string) => {
    setEmail(value)
  }

  const validateEmail = () => {
    const isEmailValid = isEmail(email)
    setIsErrorShown(!isEmailValid)
  }

  const requestEmailAccess = async () => {
    navigation.navigate('RequestAccessScreen')
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: 60, flexGrow: 1, }}>
      <View style={{ flex: 3, }}>
        <IntroLogo
          title={description}>
          <Text style={styles.title}>{title}</Text>
        </IntroLogo>
      </View>
      <BottomContainer
        buttonLabel={buttonTitle}
        onButtonPress={validateEmail}>
        <View style={styles.innerContainer}>
          <LabeledInput
            placeholder={emailPlaceholder}
            value={email}
            onChangeText={onInputChange}
            errorMessage={invalidEmail}
            isErrorShown={isErrorShown}
            checkForError={validateEmail}
          />
          <Text style={styles.disclaimerText}>
            {disclaimer}
            <Text
              onPress={requestEmailAccess}
              style={styles.hyperlink}>
              {requestAccess}
            </Text>
          </Text>
        </View>
      </BottomContainer>
    </ScrollView>
  )
}

export default VerifyEmailScreen
