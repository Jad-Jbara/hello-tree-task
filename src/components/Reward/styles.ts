
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  customContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 99,
    backgroundColor: Colors.white,
    elevation: 10,
    zIndex: 99,
  },
  textContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    ...Typography.placeholder
  },
  value: {
    ...Typography.name
  },
  icon: {
    resizeMode: 'contain',
    width: 32,
    height: 32,
  }
})