import React, { useState } from 'react'
import {
  View
} from 'react-native'
import Colors from 'constants/ui/Colors'
import { StatusBar } from 'expo-status-bar'

import OTPModal from 'modals/OTPModal'

import styles from './styles'

const OTPScreen = ({ navigation }) => {
  const [code, setCode] = useState('')

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
