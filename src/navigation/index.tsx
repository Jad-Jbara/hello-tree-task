import React, { useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthStack } from './Navigator'

const Navigation: React.FC = ({ }) => {
  const navigatorRef = useRef<any>()

  // const isAuthenticated = global.AuthStore.isAuthenticated
  const Stack = AuthStack
  console.log(Stack())
  return (
    <NavigationContainer
      ref={navigatorRef}>
      <Stack />
    </NavigationContainer>
  )
}

export default Navigation
