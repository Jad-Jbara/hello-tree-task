import React, { Ref } from 'react'
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetModalProps
} from '@gorhom/bottom-sheet'

type Props = {
  passedRef: Ref<BottomSheetModal>,
  snapPoints?: string[],
  children?: any,
}

const ExtendedBottomSheetModal: React.FC<Props & BottomSheetModalProps> = ({
  passedRef,
  snapPoints = ['50%'],
  children,
  ...props
}: Props & BottomSheetModalProps) => {
  return (
    <BottomSheetModal
      ref={passedRef}
      keyboardBehavior='interactive'
      keyboardBlurBehavior='restore'
      enablePanDownToClose
      enableDismissOnClose
      index={0}
      snapPoints={snapPoints}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior='close'
        />
      )}
      {...props}>
      {children}
    </BottomSheetModal >
  )
}

export default ExtendedBottomSheetModal
