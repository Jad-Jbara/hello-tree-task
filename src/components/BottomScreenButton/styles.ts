
import Colors from 'constants/ui/Colors'
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
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: Colors.white,
    marginTop: 20,
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingVertical: 12,
    ...shadow,
  },
})