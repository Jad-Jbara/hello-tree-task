import React, { PropsWithChildren } from 'react'
import { Image, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'
import MainButton from '../MainButton'

type Props = PropsWithChildren<{
  label?: string
  labelStyle?: TextStyle | TextStyle[]
  buttonStyle?: ViewStyle | ViewStyle[]
  isSelected?: boolean
} & TouchableOpacityProps>

const ToggleButton: React.FC<Props> = (props: Props) => {
  const {
    isSelected,
  } = props
  const buttonStyle = isSelected ? styles.selectedContainer : styles.container
  const labelStyle = isSelected ? styles.selectedLabel : styles.label

  return (
    <MainButton
      {...props}
      buttonStyle={[buttonStyle, styles.button]}
      labelStyle={labelStyle}
    />

  )
}

export default ToggleButton