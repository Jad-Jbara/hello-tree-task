
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    height: 200,
  },
  title: {
    ...Typography.heading1,
    paddingVertical: 16,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  rowItem: {
    paddingVertical: 5,
    height: 40,
    alignItems: 'center',
  },
  rowItemText: {
    ...Typography.name,
  },
  floatingIndicator: {
    position: 'absolute',
    borderRadius: 99,
    backgroundColor: Colors.veryLightGrey,
    alignSelf: 'center',
    height: 40,
    width: '100%',
  },
  wrapRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})