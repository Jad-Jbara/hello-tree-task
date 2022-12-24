import React, { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'

import MainButton from 'components/Buttons/MainButton'

import styles from './styles'

type Props = PropsWithChildren<{
  onButtonPress?: () => void
  buttonLabel?: string
  withBottomButton?: boolean
  containerStyle?: ViewStyle | ViewStyle[]
}>

const BottomScreenButton: React.FC<Props> = ({
  buttonLabel,
  onButtonPress,
}: Props) => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.buttonContainer}>
        <MainButton
          label={buttonLabel}
          onPress={onButtonPress}
        />
      </View>
    </View>
  )
}

export default BottomScreenButton