import React from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import LanguageStore from 'stores/LanguageStore'

import Images from 'assets/Images'
import styles from './styles'

const SocialsButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.socialsButton}
      onPress={onPress}>
      <Image
        source={Images[icon]}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  )
}

const RequestSuccessScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    description,
    title,
    socialsTitle
  } = translations.requestSuccess

  const buttons = [
    { icon: 'instagram', onPress: () => { } },
    { icon: 'facebook', onPress: () => { } },
    { icon: 'linkedIn', onPress: () => { } },
    { icon: 'twitter', onPress: () => { } },
    { icon: 'link', onPress: () => { } },
  ]

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={Images.confettiBackground}
        resizeMode={'contain'}
        style={styles.background}>
        <View style={styles.titleContainer}>
          <Image source={Images.checkIcon} style={styles.successImage} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.socialsTitle}>{socialsTitle}</Text>
          <View style={styles.row}>
            {buttons.map(item => (
              <SocialsButton
                {...item}
              />
            ))}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default RequestSuccessScreen
