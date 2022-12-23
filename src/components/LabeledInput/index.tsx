import React, { PropsWithChildren } from 'react'
import { Image, Text, TextInput, View } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'
import MainButton from 'components/Buttons/MainButton'
import Animated, { FadeIn, FadeInDown, FadeOutDown, FadeOutUp, ZoomIn, ZoomOut } from 'react-native-reanimated'
import Colors from 'constants/ui/Colors'

type Props = {
  placeholder?: string
  value: string
  onChangeText: (value: string) => (void | Promise<void>)
  isErrorShown?: boolean
  errorMessage?: string
  checkForError?: () => void
  onBlur?: () => void
}

const LabeledInput: React.FC<Props> = ({
  placeholder = 'EMAIL',
  onChangeText,
  value,
  isErrorShown,
  errorMessage,
  checkForError,
  onBlur,
}: Props) => {
  // const isUnputInvalid = isErrorShown

  const onInputBlur = () => {
    checkForError && checkForError()
    onBlur && onBlur()
  }
  return (
    <>
      {errorMessage && isErrorShown && (
        <Animated.View
          entering={ZoomIn}
          exiting={ZoomOut}
          style={styles.errorContainer}
        >
          <Text style={styles.errorText}>{errorMessage}</Text>
        </Animated.View>
      )}
      {placeholder && <Text style={[styles.placeholder, isErrorShown && styles.errorRed]}>{placeholder}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        cursorColor={Colors.blue}
        onBlur={onInputBlur}
        style={[styles.input, isErrorShown && styles.redBorder]}
      />
    </>
  )
}

export default LabeledInput