
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  indicator: {
    position: 'absolute',
    margin: 5,
    width: 15,
    height: 15,
    padding: 2,
    borderRadius: 99,
    backgroundColor: Colors.white,
    bottom: -5,
    right: -5,
  },
  redIndicator: {
    backgroundColor: Colors.red,
    borderRadius: 99,
    flex: 1,
    zIndex: 999,
  },
})