
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,

  elevation: 24,
}

export default StyleSheet.create({
  bottomContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginTop: 20,
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingVertical: 12,
    ...shadow,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    ...Typography.heading1
  },
  description: {
    ...Typography.placeholder,
    paddingVertical: 10,
    paddingBottom: 30,
  },
  closeContainer: {
    alignItems: 'flex-start',
  },
  closeButton: {
    backgroundColor: Colors.veryLightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: 40,
    height: 40,
    borderRadius: 99,
  },
  closeIcon: {
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  step: {
    flex: 1,
    backgroundColor: `${Colors.grey}60`,
    marginHorizontal: 4,
    borderRadius: 9,
    height: 4
  },
  selectedStep: {
    backgroundColor: Colors.blue
  },
})