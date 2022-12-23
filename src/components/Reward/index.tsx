import CircleIndicator, { Position } from 'components/CircleIndicator'
import React, { PropsWithChildren, useState } from 'react'
import { Image, Text, View, ViewStyle } from 'react-native'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'


import styles from './styles'


type Props = PropsWithChildren<{
  title?: string
  value?: number
  icon: number
  position: Position
  customStyle?: ViewStyle | ViewStyle[]
  customOffsetX?: number
  customOffsetY?: number
}>

const Reward: React.FC<Props> = ({
  title,
  value,
  icon,
  position,
  customStyle,
  customOffsetX,
  customOffsetY
}: Props) => {
  const offsetX = ((customOffsetX - 15) || 30)
  const offsetY = ((customOffsetY) || 30)
  let currentPosition = {}
  switch (position) {
    case 'bottom-right':
      currentPosition = {
        top: -offsetY,
        left: -offsetX,
      }
      break
    case 'top-right':
      currentPosition = {
        bottom: -offsetY,
        left: -offsetX,
      }
      break
    case 'top-left':
      currentPosition = {
        bottom: -offsetY,
        right: -offsetX,
      }
      break
    case 'bottom-left':
      currentPosition = {
        top: -offsetY,
        right: -offsetX,
      }
      break

    default:
      currentPosition = {
        bottom: -offsetY,
        right: -offsetX,
      }
      break
  }
  return (
    <Animated.View
      entering={ZoomIn}
      exiting={ZoomOut}
      style={[styles.container, customStyle || {
        ...styles.customContainer,
        ...currentPosition,
        width: customOffsetX,
      }]}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      {title && <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>}
      <CircleIndicator
        position={position}
      />
    </Animated.View>
  )
}

export default Reward