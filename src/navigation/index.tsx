import React, { useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthStack, MainStack } from './Navigator'

const Navigation: React.FC = ({ }) => {
  const navigatorRef = useRef<any>()

  // const isAuthenticated = AuthStore.isAuthenticated
  const Stack = MainStack //AuthStack

  return (
    <NavigationContainer
      ref={navigatorRef}>
      <Stack />
    </NavigationContainer>
  )
}

export default Navigation
