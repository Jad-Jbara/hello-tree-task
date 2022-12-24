
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
  },
  logoContainer: {
    flex: 2,
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
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
})