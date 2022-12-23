
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    ...Typography.button,
  },
  wheel: {
    resizeMode: 'contain',
  },
  spinButtonContainer: {
    borderRadius: 99,
    position: 'absolute',
    zIndex: 100,
  },
  spinButton: {
    resizeMode: 'contain',
  },
  wheelBackground: {
    resizeMode: 'contain',
    position: 'absolute'
  },
  arrow: {
    resizeMode: 'contain',
    position: 'absolute',
    top: -30,
    zIndex: 999,
  }
})