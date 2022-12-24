
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    paddingTop: 60,
  },
  logo: {
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    ...Typography.heading1,
    paddingVertical: 16,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
})