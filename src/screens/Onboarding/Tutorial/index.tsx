import React, { useEffect, useState } from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming, ZoomIn } from 'react-native-reanimated'

import Wheel from 'components/Wheel'
import BottomContainer from 'components/BottomScreenContainer'
import Stepper from 'components/Stepper'
import CircleIndicator from 'components/CircleIndicator'
import Reward from 'components/Reward'

import LanguageStore from 'stores/LanguageStore'

import Images from 'assets/Images'
import Colors from 'constants/ui/Colors'
import styles from './styles'

const ANIMATION_DELAY_IN_MS = 500
const BACKGROUND_COLOR_ANIMATION_DURATION = 500
// should be extracted to separate component
const WheelOutline = ({ children }) => {
  return (
    <View
      style={styles.wheelOutline}>
      <View style={styles.innerOutline}>
        <View style={styles.circle}>
          <View style={styles.innerCircle}>
            {children}

          </View>
        </View>

      </View>
    </View>
  )
}

const TutorialScreen = ({ navigation }) => {
  const translations = LanguageStore.textLocale
  const {
    step1,
    step2,
    step3,
    step4,
  } = translations.tutorial
  const [selectedStep, setSelectedStep] = useState(0)
  const colors = [Colors.white, Colors.black, Colors.darkBlue, Colors.orange, Colors.green]
  const backgroundColor = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(backgroundColor.value, [0, 1, 2, 3, 4], colors)
    }
  })

  useEffect(() => {
    backgroundColor.value = withTiming(selectedStep + 1,
      {
        duration: BACKGROUND_COLOR_ANIMATION_DURATION,
      }
    )
  }, [])

  const steps = [
    step1,
    step2,
    step3,
    step4
  ]

  const skipStepsAndNavigate = () => {
    navigation.navigate('TestSpinScreen')
  }

  const onNextPress = () => {
    if (selectedStep < steps.length - 1) {
      backgroundColor.value = withTiming(selectedStep + 2, { duration: 500, })
      setSelectedStep(step => step + 1)
    } else if (selectedStep === steps.length - 1) {
      navigation.navigate('TestSpinScreen')
      skipStepsAndNavigate()
    }
  }

  const answers = [
    'Just water',
    'Regular soap',
    'Face wash',
  ]

  // should be extracted to separate components
  const stepComponents = [
    <Wheel disabled />,
    <WheelOutline>
      <Animated.View
        entering={ZoomIn}
        style={styles.questionContainer}>
        <Text style={styles.question}>What do you use to wash your face at night?</Text>
        <CircleIndicator
          position='bottom-right'
        />
        <View style={styles.starContainer}>
          <Image source={Images.starIcon} style={styles.starIcon} />
        </View>
      </Animated.View>
      <View style={styles.answersContainer}>
        {answers.map((item, index) => {
          const selected = index === 0
          return (
            <Animated.View
              entering={ZoomIn.delay(index * ANIMATION_DELAY_IN_MS)}
              key={`answer_${index}`}
              style={[styles.answer, selected && styles.selectedAnswer]}>
              <Text style={[styles.answerLabel, selected && styles.selectedAnswerLabel]}>{item}</Text>
            </Animated.View>
          )
        })}
      </View>
    </WheelOutline>,
    <WheelOutline>
      <Reward
        icon={Images.starIcon}
        position='bottom-right'
      />
      <Reward
        icon={Images.wheelIcon}
        position='top-left'
      />
      <Reward
        icon={Images.starIcon}
        position='top-right'
        title='Points'
        value={200}
        customOffsetX={100}
      />
      <Reward
        icon={Images.wheelIcon}
        position='bottom-left'
        title='Spins'
        value={5}
        customOffsetX={100}
      />
    </WheelOutline>,
    <WheelOutline>
      <Reward
        icon={Images.starIcon}
        position='bottom-right'
      />
      <Reward
        icon={Images.wheelIcon}
        position='top-left'
        title='Spins'
        value={1}
        customOffsetX={100}
      />
      <Reward
        icon={Images.ticketIcon}
        position='top-right'
      />
      <Reward
        icon={Images.giftIcon}
        position='bottom-left'
      />
    </WheelOutline>,
  ]

  const isLastStep = selectedStep === steps.length - 1

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}>
      <View style={{ flex: 3, }}>
        <StatusBar backgroundColor={colors[selectedStep + 1]} animated style='light' />
        {stepComponents[selectedStep]}
      </View>
      <BottomContainer
        withBottomButton={false}>
        <View style={styles.skipContainer}>
          {!isLastStep && <TouchableOpacity onPress={skipStepsAndNavigate}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          }
        </View>
        <View style={styles.innerContainer}>
          <Stepper
            steps={steps}
            currentStep={selectedStep}
            onNext={onNextPress}
          />
        </View>
      </BottomContainer>
    </Animated.View>
  )
}

export default TutorialScreen
