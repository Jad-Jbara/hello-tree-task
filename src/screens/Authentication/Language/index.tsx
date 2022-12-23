import Images from 'assets/Images'
import BottomContainer from 'components/BottomScreenContainer'
import ToggleButton from 'components/Buttons/ToggleButton'
import IntroLogo from 'components/IntroLogo'
import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'

const LanguageScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    buttonTitle,
    description,
    title,
  } = translations.language
  const [selectedLanguage, setSelectedLanguage] = useState('english')

  const langauges = [
    'english', 'french', 'arabic',
  ]

  const selectLanguage = async () => {
    await LanguageStore.setLocale(selectedLanguage)
    navigation.navigate('VerifyEmailScreen')
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, }}>
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
        onButtonPress={selectLanguage}
      >
        <View style={styles.innerContainer}>
          <ScrollView>
            {langauges.map(language => {
              const isSelected = selectedLanguage === language
              return (
                <ToggleButton
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
