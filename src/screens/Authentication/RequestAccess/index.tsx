import React, { useState } from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

import BottomContainer from 'components/BottomScreenContainer'
import IntroLogo from 'components/IntroLogo'
import LabeledInput from 'components/LabeledInput'

import { isEmail } from 'helpers/EmailChecker'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'

const RequestAccessScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    buttonTitle,
    description,
    title,
    disclaimer,
    emailPlaceholder,
    enterEmail,
    invalidEmail,
  } = translations.requestAccess
  const { placeholders } = translations
  const [email, setEmail] = useState('')
  const [isErrorShown, setIsErrorShown] = useState(false)
  const [country, setCountry] = useState('KSA')
  const [city, setCity] = useState('riyadh')
  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false)
  const [isCityPickerOpen, setIsCityPickerOpen] = useState(false)

  const onInputChange = (value: string) => {
    setEmail(value)
  }

  const checkEmail = () => {
    const isEmailValid = isEmail(email)
    return isEmailValid
  }

  const verifyInvitation = () => {
    const isEmailValid = checkEmail()
    setIsErrorShown(!isEmailValid)
  }

  const checkForError = () => {
    const isEmailValid = checkEmail()
    verifyInvitation()
    if (isEmailValid) {
      navigation.navigate('RequestSuccessScreen')
    }
  }

  const requestEmailAccess = async () => {
    navigation.goBack()
  }

  const onCityPickerOpen = (value) => {
    setIsCountryPickerOpen(false)
    setTimeout(() => {
      setIsCityPickerOpen(value)
    }, 100)
  }

  const onCountryPickerOpen = (value) => {
    setIsCityPickerOpen(false)
    setTimeout(() => {
      setIsCountryPickerOpen(value)
    }, 100)
  }

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.logoContainer}>
        <IntroLogo
          title={description}>
          <Text style={styles.title}>{title}</Text>
        </IntroLogo>
      </View>
      <BottomContainer
        buttonLabel={buttonTitle}
        onButtonPress={checkForError}>
        <View style={styles.innerContainer}>
          <LabeledInput
            placeholder={emailPlaceholder}
            value={email}
            onChangeText={onInputChange}
            errorMessage={invalidEmail}
            isErrorShown={isErrorShown}
            checkForError={verifyInvitation}
          />
          <View style={styles.row}>
            <View style={styles.dropDownContainer}>
              <Text style={styles.placeholder}>
                {placeholders.country}
              </Text>
              <DropDownPicker
                value={country}
                open={isCountryPickerOpen}
                setOpen={onCountryPickerOpen}
                zIndex={1000}
                zIndexInverse={3000}
                items={[{ value: 'lebanon', label: 'LEBANON' }, { value: 'KSA', label: 'KSA' }]}
                setValue={setCountry}
                style={styles.dropDown}
              />
            </View>
            <View style={styles.dropDownContainer}>
              <Text style={styles.placeholder}>
                {placeholders.city}
              </Text>
              <DropDownPicker
                value={city}
                open={isCityPickerOpen}
                setOpen={onCityPickerOpen}
                zIndex={3000}
                zIndexInverse={1000}

                items={[{ value: 'beirut', label: 'BEIRUT' }, { value: 'riyadh', label: 'RIYADH' }]}
                setValue={setCity}
                style={styles.dropDown}
              />
            </View>
          </View>
          <Text style={styles.disclaimerText}>
            {disclaimer}
            <Text
              onPress={requestEmailAccess}
              style={styles.hyperlink}>
              {enterEmail}
            </Text>
          </Text>
        </View>
      </BottomContainer>
    </ScrollView>
  )
}

export default RequestAccessScreen
