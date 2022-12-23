
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '50%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    ...Typography.button,
  },
  title: {
    ...Typography.heading1,
    textAlign: 'center',
  },
  description: {
    ...Typography.placeholder,
    marginVertical: 20,
    textAlign: 'center',
    width: '85%'
  },
  button: {
    width: '60%'
  },
  emptyStep: {
    borderRadius: 99,
    backgroundColor: Colors.veryLightGrey,
    marginHorizontal: 4,
    width: 5,
    height: 5,
  },
  selectedStep: {
    width: 8,
    height: 8,
    backgroundColor: Colors.black,
  }
})