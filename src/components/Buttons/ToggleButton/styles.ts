
import Colors from 'constants/ui/Colors'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
  },
  button: {
    borderWidth: 1,
    marginVertical: 4,
  },
  label: {
    color: Colors.black,
  },
  selectedLabel: {
    color: Colors.blue
  },
  selectedContainer: {
    backgroundColor: Colors.lightBlue,
    borderColor: Colors.blue
  },
})