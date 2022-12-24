import React, { useState } from 'react'
import {
  Text,
  View
} from 'react-native'
import BottomScreenButton from 'components/BottomScreenButton'
import LabeledInput from 'components/LabeledInput'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'

const SignUpScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    description,
    title,
  } = translations.signUp
  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('+961')


  const proceed = async () => {
    navigation.navigate('OTPScreen')
  }

  const onTextChange = (value: string) => {
    setPhoneNumber(value)
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, paddingHorizontal: 20 }}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>
          <LabeledInput
            value={phoneNumber}
            onChangeText={onTextChange}
            placeholder={'Phone number'}
            withDropDown
            keyboardType='phone-pad'
            pickerValue={code}
            pickerValues={[{ label: '+961', value: '+961' }]}
            setPickerValue={setCode}
          />
        </View>
      </View>
      <BottomScreenButton
        buttonLabel='Proceed'
        onButtonPress={proceed}
      />
    </View>
  )
}

export default SignUpScreen
