import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  View
} from 'react-native'
import BottomContainer from 'components/BottomScreenContainer'
import ToggleButton from 'components/Buttons/ToggleButton'
import IntroLogo from 'components/IntroLogo'

import LanguageStore from 'stores/LanguageStore'

import Images from 'assets/Images'
import styles from './styles'

const LanguageScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    buttonTitle,
    description,
  } = translations.language
  const [selectedLanguage, setSelectedLanguage] = useState('english')

  const langauges = [
    'english',
    'french',
    'arabic',
  ]

  const selectLanguage = async () => {
    await LanguageStore.setLocale(selectedLanguage)
    navigation.navigate('VerifyEmailScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <IntroLogo
          title={description}>
          <Image
            source={Images.spinLogo}
            style={styles.logo}
          />
        </IntroLogo>
      </View>
      <BottomContainer
        buttonLabel={buttonTitle}
        onButtonPress={selectLanguage}>
        <View style={styles.innerContainer}>
          <ScrollView>
            {langauges.map(language => {
              const isSelected = selectedLanguage === language
              return (
                <ToggleButton
                  key={`language_button_${language}`}
                  label={translations.languages[language]}
                  isSelected={isSelected}
                  onPress={() => setSelectedLanguage(language)}
                />
              )
            })}
          </ScrollView>
        </View>
      </BottomContainer>
    </View>
  )
}

export default LanguageScreen
