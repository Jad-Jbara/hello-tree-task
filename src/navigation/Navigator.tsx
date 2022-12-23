import React from 'react'

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import LanguageScreen from 'screens/Authentication/Language'
import VerifyEmailScreen from 'screens/Authentication/VerifyEmail'
import RequestAccessScreen from 'screens/Authentication/RequestAccess'
import RequestSuccessScreen from 'screens/Authentication/RequestSuccess'

// import Login from 'screens/Login'

// import styles from './styles'
// import Onboarding from 'screens/Onboarding'

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
    // { name: 'Onboarding', component: Onboarding, },
  ]
  return createStack(OnboardingNavigator, screens)
}

const MainStackNaviagtor = createNativeStackNavigator()
const MainStack = () => {
  const screens = [
    {
      name: 'Home',
      component: OnboardingStack,
    },
    // {
    //   name: 'Authentication',
    //   component: AuthStack,
    // },
  ]

  return createStack(MainStackNaviagtor, screens, navigationOptions)
}

export { AuthStack }
