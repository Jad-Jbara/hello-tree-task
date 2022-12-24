
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    paddingTop: 60,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.veryLightGrey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
})