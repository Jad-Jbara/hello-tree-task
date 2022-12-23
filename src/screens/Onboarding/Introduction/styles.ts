
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.heading1,
    marginTop: 30,
  },
  description: {
    ...Typography.placeholder,
    marginBottom: 60,
  },
  buttonContainer: {
    width: '70%',

  },
})