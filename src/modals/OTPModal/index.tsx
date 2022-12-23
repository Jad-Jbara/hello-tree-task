import React, { useEffect, useMemo, useRef } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import ExtendedBottomSheetModal from 'modals/ExtendedBottomSheetModal'

import styles from './styles'
import Images from 'assets/Images'
import MainButton from 'components/Buttons/MainButton'
import OnboardingStepsContainer from 'components/OnboardingStepsContainer'


type OTPModalProps = {
  visible: boolean
  refreshing?: boolean
  buttonLabel?: string
  onSave?: () => any
  shouldClose?: boolean
  setRef?: (_ref: BottomSheetModal) => void
  close?: () => void
  onButtonPress?: () => void
  setValue?: (value: string) => void
  value?: string
}

const INPUT_BOXES_COUNT = 4

const OTPModal = ({
  visible,
  setRef,
  close,
  buttonLabel,
  onButtonPress,
  value,
  setValue
}: OTPModalProps) => {
  const listModalRef = useRef<BottomSheetModal>(null)
  const inputRef = useRef<TextInput>(null)

  const snapPoints = useMemo(() => ['88%'], [])

  useEffect(() => {
    if (visible) {
      listModalRef.current?.present()
    }
  }, [visible])

  useEffect(() => {
    listModalRef.current && setRef && setRef(listModalRef.current)
  }, [listModalRef.current])

  const setVisibility = () => {
    listModalRef?.current?.close()
    close && close()
  }

  const onChangeText = (value) => {
    if (value.length <= INPUT_BOXES_COUNT && typeof parseInt(value) === 'number') {
      setValue(value)
    }
  }

  const onNextPress = () => {
    listModalRef?.current?.close()
    onButtonPress()
  }
  return (
    <ExtendedBottomSheetModal
      handleIndicatorStyle={styles.indicator}
      passedRef={listModalRef}
      backdropComponent={() => null}
      enablePanDownToClose={false}
      snapPoints={snapPoints}>
      <OnboardingStepsContainer
        onBackPress={setVisibility}
        title='Verify your account'
        description='We’ve sent an OTP to the mobile number ending with *****722. Please enter it to verify your account.'
        onButtonPress={onNextPress}
        buttonLabel={'Next'}>
        <View style={{ flex: 1, }}>
          <View style={styles.row}>
            {Array(INPUT_BOXES_COUNT).fill(undefined).map((item, index) => {
              return (
                <TouchableOpacity style={styles.inputBox}
                  onPress={() => { inputRef.current.focus() }}
                >
                  <Text style={styles.digit}>{value?.length > 0 && value.charAt(index)}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <TextInput
            ref={inputRef}
            style={styles.hiddenTextInput}
            autoFocus
            value={value}
            keyboardType='number-pad'
            onChangeText={onChangeText}
          />
          <Text style={styles.disclaimer}>
            Didn’t receive an SMS?
            <Text style={styles.hyperLink}> Send again.</Text>
          </Text>
        </View>
      </OnboardingStepsContainer>
    </ExtendedBottomSheetModal >
  )
}

export default OTPModal
