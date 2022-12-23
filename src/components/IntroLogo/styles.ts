
import Colors from 'constants/ui/Colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',
    alignSelf: 'center',
    maxWidth: '75%'

  },
  image: {
    resizeMode: 'contain',
    marginBottom: 48,
  },
  title: {
    color: Colors.grey,
    textAlign: 'center',
  }
})