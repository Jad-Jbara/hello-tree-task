
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flexGrow: 1,
  },
  titleContainer: {
    alignItems: 'center',
    width: '75%'
  },
  successImage: {
    resizeMode: 'contain',
  },
  title: {
    ...Typography.heading1,
    textAlign: 'center',
    paddingTop: 16,
  },
  description: {
    ...Typography.name,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialsTitle: {
    ...Typography.heading2,
    paddingTop: 40,
    textAlign: 'center',
  },
  socialsButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.veryLightGrey,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})