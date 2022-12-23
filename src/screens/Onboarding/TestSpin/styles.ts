
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet, TextStyle } from 'react-native'

const commonStyle: TextStyle = {
  color: Colors.white,
  textAlign: 'center',
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.heading1,
    ...commonStyle,
    marginTop: 30,
  },
  textContainer: {
    width: '70%',
  },
  description: {
    ...Typography.placeholder,
    ...commonStyle,
    marginBottom: 60,
  },
})