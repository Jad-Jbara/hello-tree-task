import React, { PropsWithChildren } from 'react'
import { Image, Text, View } from 'react-native'

import Images from 'assets/Images'

import styles from './styles'

type Props = PropsWithChildren<{
  title: string
}>

const IntroLogo: React.FC<Props> = ({
  title,
  children,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={Images.spinIcon}
      />
      {children}
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default IntroLogo