
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
  },
  title: {
    ...Typography.heading1,
  },
  description: {
    ...Typography.placeholder,
    color: Colors.grey,
    paddingBottom: 30,
  },
})