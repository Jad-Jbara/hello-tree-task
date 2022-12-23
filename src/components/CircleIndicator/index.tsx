import React, { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'


import styles from './styles'


export type Position = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right'
type Props = PropsWithChildren<{
  customOffsett?: number
  position: Position
}>

const CircleIndicator: React.FC<Props> = ({
  customOffsett,
  position,
}: Props) => {

  const offset = customOffsett || 5

  let currentPosition: ViewStyle = {
    bottom: -offset,
    right: -offset,
  }

  switch (position) {
    case 'bottom-right':
      currentPosition = {
        bottom: -offset,
        right: -offset,
      }
      break
    case 'top-right':
      currentPosition = {
        top: -offset,
        right: -offset,
      }
      break
    case 'top-left':
      currentPosition = {
        top: -offset,
        left: -offset,
      }
      break
    case 'bottom-left':
      currentPosition = {
        bottom: -offset,
        left: -offset,
      }
      break

    default:
      currentPosition = {
        bottom: -offset,
        right: -offset,
      }

      break
  }

  return (
    <View style={[styles.indicator, currentPosition]}>
      <View style={styles.redIndicator} />
    </View>
  )
}

export default CircleIndicator