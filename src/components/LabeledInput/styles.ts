
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    padding: 10,
    flex: 1,
  },
  placeholder: {
    ...Typography.placeholder,
    paddingVertical: 5,
    textTransform: 'uppercase'
  },
  redBorder: {
    borderColor: Colors.red,
  },
  errorRed: {
    color: Colors.red,
  },
  errorContainer: {
    backgroundColor: Colors.fadedRed,
    borderRadius: 20,
    padding: 20,
  },
  errorText: {
    ...Typography.name,
    color: Colors.red,
  },
  picker: {
    borderColor: Colors.borderGrey,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start'
  },
  container: {
  },
  containerStyle: {
    width: '30%',
  },
  removedBorderRadius: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
})