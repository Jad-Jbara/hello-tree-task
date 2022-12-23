
import Colors from 'constants/ui/Colors'
import Typography from 'constants/ui/Typography'
import { Dimensions, StyleSheet, ViewStyle } from 'react-native'

const commonOutline: ViewStyle = {
  borderWidth: 1,
  borderRadius: 999,
  borderColor: Colors.borderGrey,
  alignItems: 'center',
  justifyContent: 'center',
}
export default StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: Colors.white,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.heading1,
    marginTop: 30,
  },
  description: {
    ...Typography.placeholder,
    marginBottom: 60,
  },
  buttonContainer: {
    width: '70%',
  },
  skipContainer: {
    margin: 20,
    marginVertical: 5,
    alignItems: 'flex-end'
  },
  skipText: {
    ...Typography.heading3,
    color: Colors.grey
  },
  innerContainer: {

  },
  wheelOutline: {
    width: 296,
    height: 296,
    ...commonOutline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerOutline: {
    width: 260,
    height: 260,
    ...commonOutline,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: Colors.borderGrey
  },
  circle: {
    ...commonOutline,
    width: 110,
    height: 110,
  },
  innerCircle: {
    ...commonOutline,
    width: 100,
    height: 100,
  },
  questionContainer: {
    position: 'absolute',
    zIndex: 999,
    width: Dimensions.get('window').width / 2,
    bottom: 20,
    right: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20
  },
  question: {
    ...Typography.name,
  },
  indicator: {
    position: 'absolute',
    margin: 5,
    width: 15,
    height: 15,
    padding: 2,
    borderRadius: 99,
    backgroundColor: Colors.white,
    bottom: -5,
    right: -5,
  },
  redIndicator: {
    backgroundColor: Colors.red,
    borderRadius: 99,
    flex: 1,
    zIndex: 999,
  },
  starContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 99,
    backgroundColor: Colors.white,
    top: -20,
    right: -20,
    elevation: 10,
    zIndex: 99,
  },
  answersContainer: {
    position: 'absolute',
    zIndex: 999,
    width: Dimensions.get('window').width / 2,
    top: 75,
    left: 20,
    borderRadius: 20,
    padding: 20
  },
  answer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 99,
    marginVertical: 5,
  },
  selectedAnswer: {
    backgroundColor: Colors.blue,
  },
  answerLabel: {
    ...Typography.smallDisclaimer,
    color: Colors.black,
  },
  selectedAnswerLabel: {
    color: Colors.white,
  },
  rewardStar: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 99,
    backgroundColor: Colors.white,
    top: -30,
    left: -30,
    elevation: 10,
    zIndex: 99,
  },
  rewardWheel: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 99,
    backgroundColor: Colors.white,
    bottom: -30,
    right: -30,
    elevation: 10,
    zIndex: 99,
  }
})