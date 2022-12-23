
import { StyleSheet } from 'react-native'
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  innerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  indicator: {
    backgroundColor: `${Colors.grey}60`,
    width: 40,
  },
  closeContainer: {
    alignItems: 'flex-start',
  },
  closeButton: {
    backgroundColor: Colors.veryLightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: 30,
    height: 30,
    borderRadius: 99,
  },
  closeIcon: {
    resizeMode: 'contain'
  },
  rewardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardIcon: {
    resizeMode: 'contain',
    borderRadius: 999,
  },
  rewardQuantity: {
    ...Typography.heading3,
    paddingBottom: 5,
    color: Colors.white,
    position: 'absolute',
    zIndex: 999,
    // textAlignVertical: 'center',
  },
  description: {
    ...Typography.placeholder,
    paddingVertical: 10,
  },
  modalTitle: {
    ...Typography.heading1
  },
  button: {
    width: '70%'
  },
  inputBox: {
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    borderRadius: 10,
    height: 100,
    // width: 50,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digit: {
    ...Typography.heading1,
    fontSize: 40,
    lineHeight: undefined,
  },
  disclaimer: {
    ...Typography.smallDisclaimer,
    textAlign: 'center'
  },
  hyperLink: {
    ...Typography.smallDisclaimer,
    color: Colors.blue,
    textDecorationLine: 'underline',
    textDecorationStyle: Colors.blue
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hiddenTextInput: {
    opacity: 0,
  },
})