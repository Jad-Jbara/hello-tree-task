import React, { PropsWithChildren, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

import MainButton from 'components/Buttons/MainButton'

import Images from 'assets/Images'
import styles from './styles'

type Props = PropsWithChildren<{
  onButtonPress?: () => void
  buttonLabel?: string
  withBottomButton?: boolean
  containerStyle?: ViewStyle | ViewStyle[]
  withSteps?: boolean
  steps?: React.ReactNode[]
  title?: string,
  description?: string
  onBackPress: () => void
  titles?: { title: string, description: string }[]
}>

const OnboardingStepsContainer: React.FC<Props> = ({
  buttonLabel,
  onButtonPress,
  title,
  description,
  onBackPress,
  children,
  steps,
  withSteps,
  titles
}: Props) => {
  const [currentStep, setCurrentStep] = useState(0)
  const onNextPress = () => {
    if (!withSteps) {
      onButtonPress && onButtonPress()
      return
    }
    if (currentStep === steps.length - 1) {
      return
    }
    setCurrentStep(step => step + 1)
  }

  const StepComponent = withSteps && steps[currentStep]

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep => currentStep - 1)
      return
    }
    onBackPress()
  }

  return (
    <ScrollView
      // keyboardShouldPersistTaps='handled'
      style={styles.bottomContainer}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.row}>
        {withSteps && steps.map((item, index) => {
          const isSelected = index === currentStep
          return (
            <View key={`signup_step_${index}`} style={[styles.step, isSelected && styles.selectedStep]}>

            </View>
          )
        })}
      </View>
      <View style={styles.closeContainer}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.closeButton}>
          <Image
            source={Images.backIcon}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{withSteps ? titles[currentStep].title : title}</Text>
        <Text style={styles.description}>{withSteps ? titles[currentStep].description : description}</Text>
        {children}
        <View key={currentStep}>
          {withSteps && StepComponent}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          label={currentStep === steps?.length - 1 ? 'Start spinning!' : buttonLabel}
          onPress={onNextPress}
        />
      </View>
    </ScrollView>
  )
}

export default OnboardingStepsContainer