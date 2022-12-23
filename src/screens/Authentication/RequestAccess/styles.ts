
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    ...Typography.heading1,
    textAlign: 'center',
    paddingTop: 16,
  },
  innerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  placeholder: {
    ...Typography.placeholder,
  },
  disclaimerText: {
    ...Typography.smallDisclaimer,
    paddingVertical: 20,
  },
  hyperlink: {
    ...Typography.smallDisclaimer,
    color: Colors.blue,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.blue,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDown: {
    borderColor: Colors.borderGrey,
  },
  dropDownContainer: {
    width: '50%',
    paddingRight: 20,
  }
})