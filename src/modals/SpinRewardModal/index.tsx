import React, { useEffect, useMemo, useRef } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import ExtendedBottomSheetModal from 'modals/ExtendedBottomSheetModal'

import styles from './styles'
import Images from 'assets/Images'
import MainButton from 'components/Buttons/MainButton'


type SpinRewardModalProps = {
  visible: boolean
  refreshing?: boolean
  modalTitle: string
  buttonLabel?: string
  onSave?: () => any
  shouldClose?: boolean
  setRef?: (_ref: BottomSheetModal) => void
  close?: () => void
  onButtonPress?: () => void
}

const SpinRewardModal = ({
  visible,
  modalTitle,
  setRef,
  close,
  buttonLabel,
  onButtonPress
}: SpinRewardModalProps) => {
  const listModalRef = useRef<BottomSheetModal>(null)

  const snapPoints = useMemo(() => ['50%'], [])

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
  return (
    <ExtendedBottomSheetModal
      handleIndicatorStyle={styles.indicator}
      passedRef={listModalRef}
      backdropComponent={() => null}
      enablePanDownToClose={false}
      snapPoints={snapPoints}>
      <>
        <View style={styles.closeContainer}>
          <TouchableOpacity
            onPress={setVisibility}
            style={styles.closeButton}>
            <Image
              source={Images.closeIcon}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.rewardContainer}>
            <Image style={styles.rewardIcon} source={Images.wheelRewardIcon} />
            <Text style={styles.rewardQuantity}>5</Text>
          </View>
          <Text style={styles.modalTitle}>{modalTitle}</Text>
          <Text style={styles.description}>Now you’re ready to win real prizes!</Text>
          <MainButton
            label={buttonLabel}
            buttonStyle={styles.button}
            onPress={onButtonPress}
          />
        </View>

      </>
    </ExtendedBottomSheetModal>
  )
}

export default SpinRewardModal
