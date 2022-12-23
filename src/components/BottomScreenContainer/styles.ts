
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

const shadowContainer = {
  backgroundColor: Colors.white,
  marginTop: 20,
  width: '100%',
  borderTopEndRadius: 20,
  borderTopStartRadius: 20,
  // flexGrow: 1,
  ...shadow
}

export default StyleSheet.create({
  container: {
    ...shadowContainer,
    flexGrow: 1,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    ...shadowContainer,
    paddingVertical: 12,
  },
})