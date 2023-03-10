import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  FlatList,
  Text,
  View
} from 'react-native'
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated'

import ToggleButton from 'components/Buttons/ToggleButton'
import LabeledInput from 'components/LabeledInput'
import OnboardingStepsContainer from 'components/OnboardingStepsContainer'
import Colors from 'constants/ui/Colors'

import LanguageStore from 'stores/LanguageStore'

import styles from './styles'

const StepsScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    description,
    title,
  } = translations.name
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [selectedTitle, setSelectedTitle] = useState(title)
  const [selectedDescription, setSelectedDescription] = useState(description)
  const [selectedGender, setSelectedGender] = useState('male')
  const [selectedInterests, setSelectedInterests] = useState([])

  const goBack = () => {

  }

  const inputFields = [
    { field: 'firstName', value: firstName, onChangeText: setFirstName, },
    { field: 'lastName', value: lastName, onChangeText: setLastName, }
  ]

  const genders = [
    'male', 'female', 'other'
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowItem}>
        <Text style={styles.rowItemText}>{item}</Text>
      </View>
    )

  }

  const interests = [
    'Health Food',
    'Fast Food',
    'Vegan Food',
    'Vegetarian Food',
    'Alcohol',
  ]

  // should be extracted to separate files
  const steps = [
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutLeft}>
      {inputFields.map((item) => {
        return (
          <LabeledInput
            key={`titled_input_${item.field}`}
            {...item}
            value={item.value}
            onChangeText={item.onChangeText}
            placeholder={translations.placeholders[item.field]}
          />
        )
      })}
    </Animated.View>,
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutLeft}
      style={styles.row}>
      <View style={styles.floatingIndicator} />
      <View style={styles.topOpacity} />
      <View style={styles.bottomOpacity} />
      <FlatList
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        snapToInterval={40}
        decelerationRate={"fast"}
        data={Array(20).fill(undefined).map((item, index) => index)}
        renderItem={renderItem}
        snapToAlignment={'start'} />
      <FlatList
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        snapToInterval={40}
        decelerationRate={"fast"}
        data={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
        renderItem={renderItem}
        snapToAlignment={'start'} />
      <FlatList
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        snapToInterval={40}
        decelerationRate={"fast"}
        data={Array(20).fill(undefined).map((item, index) => 1986 + index)}
        renderItem={renderItem}
        snapToAlignment={'start'} />
    </Animated.View>,
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutLeft}>
      {genders.map(gender => {
        const isSelected = selectedGender === gender
        return (
          <ToggleButton
            label={translations.genders[gender]}
            isSelected={isSelected}
            onPress={() => setSelectedGender(gender)}
          />
        )
      })}
    </Animated.View>,
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutLeft}>
      {genders.map(gender => {
        const isSelected = selectedGender === gender
        return (
          <ToggleButton
            label={translations.genders[gender]}
            isSelected={isSelected}
            onPress={() => setSelectedGender(gender)}
          />
        )
      })}
    </Animated.View>,
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutLeft}
      style={styles.wrapRow}>
      {interests.map((interest, index) => {
        const isSelected = selectedInterests.includes(interest)
        return (
          <ToggleButton
            key={`interest_${interest}_${isSelected}`}
            label={interests[index]}
            isSelected={isSelected}
            onPress={() => {
              const index = selectedInterests.findIndex((item) => item === interest)
              if (index >= 0) {
                selectedInterests.splice(index, 1)
              } else {
                selectedInterests.push(interest)
              }
              setSelectedInterests(selectedInterests => [...selectedInterests])
            }}
          />
        )
      })}
    </Animated.View>
  ]

  const titles = [
    translations.name,
    translations.birthday,
    translations.gender,
    translations.maritalStatus,
    translations.interests,
  ]

  const onNext = () => {

  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} style={'dark'} />
      <OnboardingStepsContainer
        title={selectedTitle}
        titles={titles}
        description={selectedDescription}
        onBackPress={goBack}
        withSteps
        steps={steps}
        buttonLabel={'Next'}
        onButtonPress={onNext} />
    </View>
  )
}

export default StepsScreen
