
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...Typography.button,
  },
})