import React, { useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainStack } from './Navigator'

const Navigation: React.FC = ({ }) => {
  const navigatorRef = useRef<any>()

  const Stack = MainStack

  return (
    <NavigationContainer
      ref={navigatorRef}>
      <Stack />
    </NavigationContainer>
  )
}

export default Navigation
