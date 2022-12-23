import React, { useState } from 'react'
import { Image, KeyboardTypeOptions, Text, TextInput, View } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'
import MainButton from 'components/Buttons/MainButton'
import Animated, { FadeIn, FadeInDown, FadeOutDown, FadeOutUp, ZoomIn, ZoomOut } from 'react-native-reanimated'
import Colors from 'constants/ui/Colors'
import DropDownPicker from 'react-native-dropdown-picker'

type Props = {
  placeholder?: string
  value: string
  onChangeText: (value: string) => (void | Promise<void>)
  isErrorShown?: boolean
  errorMessage?: string
  checkForError?: () => void
  onBlur?: () => void
  withDropDown?: boolean
  pickerValues?: { value: string, label: string }[]
  pickerValue?: string
  setPickerValue?: any
  keyboardType?: KeyboardTypeOptions
}

const LabeledInput: React.FC<Props> = ({
  placeholder = 'EMAIL',
  onChangeText,
  value,
  isErrorShown,
  errorMessage,
  checkForError,
  onBlur,
  pickerValue,
  withDropDown,
  pickerValues,
  setPickerValue,
  keyboardType
}: Props) => {
  // const isUnputInvalid = isErrorShown
  const [pickerOpen, setPickerOpen] = useState()

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
      <View style={styles.row}>
        {withDropDown && <DropDownPicker
          open={pickerOpen}
          setOpen={setPickerOpen}
          items={pickerValues}
          value={pickerValue}
          setValue={setPickerValue}
          style={styles.picker}
          dropDownContainerStyle={styles.container}
          containerStyle={styles.containerStyle}
        />}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          cursorColor={Colors.blue}
          onBlur={onInputBlur}
          keyboardType={keyboardType}
          style={[styles.input, isErrorShown && styles.redBorder, withDropDown && styles.removedBorderRadius]}
        />
      </View>
    </>
  )
}

export default LabeledInput