import React, { PropsWithChildren } from 'react'
import { Image, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'

type Props = PropsWithChildren<{
  label?: string
  labelStyle?: TextStyle | TextStyle[]
  buttonStyle?: ViewStyle | ViewStyle[]
} & TouchableOpacityProps>

const MainButton: React.FC<Props> = ({
  children,
  label,
  labelStyle,
  buttonStyle,
  onPress,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      onPress={onPress}
      disabled={disabled}>
      {children}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  )
}

export default MainButton