import React from 'react'

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import LanguageScreen from 'screens/Authentication/Language'
import VerifyEmailScreen from 'screens/Authentication/VerifyEmail'
import RequestAccessScreen from 'screens/Authentication/RequestAccess'
import RequestSuccessScreen from 'screens/Authentication/RequestSuccess'
import IntroductionScreen from 'screens/Onboarding/Introduction'
import TutorialScreen from 'screens/Onboarding/Tutorial'
import TestSpinScreen from 'screens/Onboarding/TestSpin'

const defaultNavigationOptions = () => ({
  screenOptions: {
    headerMode: 'float',
    headerBackTitle: ' ',
    headerShown: true,
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
  }
})

const navigationOptions = () => ({
  screenOptions: {
    headerMode: 'float',
    headerShown: false,
  }
})

const createStack = (Stack: any, screens: Array<{ name: string }>, navigatorOptions: any = defaultNavigationOptions) => {
  return (
    <Stack.Navigator {...navigatorOptions()}>
      {screens.map((screen) => <Stack.Screen key={screen.name} name={screen.name} component={screen.component} {...screen} />)}
    </Stack.Navigator>
  )
}

const AuthNavigator = createNativeStackNavigator()
const AuthStack = () => {
  const screens = [
    { name: 'LanguageScreen', component: LanguageScreen, },
    { name: 'VerifyEmailScreen', component: VerifyEmailScreen, },
    { name: 'RequestAccessScreen', component: RequestAccessScreen, },
    { name: 'RequestSuccessScreen', component: RequestSuccessScreen, },
  ]
  return createStack(AuthNavigator, screens, navigationOptions)
}

const OnboardingNavigator = createNativeStackNavigator()
const OnboardingStack = () => {
  const screens = [
    { name: 'IntroductionScreen', component: IntroductionScreen },
    { name: 'TutorialScreen', component: TutorialScreen },
    { name: 'TestSpinScreen', component: TestSpinScreen },
  ]
  return createStack(OnboardingNavigator, screens, navigationOptions)
}

const MainStackNaviagtor = createNativeStackNavigator()
const MainStack = () => {
  const screens = [
    {
      name: 'Home',
      component: OnboardingStack,
    },
  ]

  return createStack(MainStackNaviagtor, screens, navigationOptions)
}

export { AuthStack, MainStack }
