import { TextStyle } from 'react-native'

import FontFamily from 'constants/ui/FontFamily'
import Colors from 'constants/ui/Colors'

class Texts {

  /**
   ** Font size: 20
   ** Font family: Bold
   ** Color: primaryColor
   **/
  get heading1(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontWeight: 'bold',
      fontSize: 24,
      color: Colors.black,
      lineHeight: 34,
    }
  }

  /**
   ** Font size: 18
   ** Font family: Bold
   ** Color: primaryColor
   **/
  get heading2(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontWeight: 'bold',
      fontSize: 18,
      color: Colors.black,
      lineHeight: 22,
    }
  }

  /**
   ** Font size: 16
   ** Font family: Bold
   ** Color: primaryColor
   **/
  get heading3(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontWeight: 'bold',
      fontSize: 16,
      color: Colors.black,
      lineHeight: 28,
    }
  }

  /**
   ** Font size: 18
   ** Font family: Light
   ** Color: primaryColor
   **/
  get body1(): TextStyle {
    return {
      fontFamily: FontFamily.light,
      fontSize: 18,
      color: Colors.black,
      lineHeight: 26,
    }
  }

  /**
   ** Font size: 16
   ** Font family: Light
   ** Color: primaryColor
   **/
  get body2(): TextStyle {
    return {
      fontFamily: FontFamily.light,
      fontSize: 16,
      color: Colors.black,
      lineHeight: 26,

    }
  }

  /**
   ** Font size: 18
   ** Font family: bold
   ** Color: white
   **/
  get button(): TextStyle {
    return {
      ...this.heading3,
      color: Colors.white,
      lineHeight: 20,
    }
  }

  /**
   ** Font size: 12
   ** Font family: Regular
   ** Color: primaryColor
   **/
  get placeholder(): TextStyle {
    return {
      fontFamily: FontFamily.regular,
      fontSize: 12,
      color: Colors.grey,
      lineHeight: 18,
    }
  }

  /**
   ** Font size: 12
   ** Font family: bold
   ** Color: grey
   **/
  get smallDisclaimer(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontWeight: 'bold',
      fontSize: 12,
      color: Colors.grey,
      lineHeight: 18,
    }
  }

  /**
   ** Font size: 20
   ** Font family: Regular
   ** Color: primaryColor
   **/
  get dropDown(): TextStyle {
    return {
      fontFamily: FontFamily.regular,
      fontSize: 20,
      color: Colors.black,
      lineHeight: 28,
    }
  }

  /**
   ** Font size: 14
   ** Font family: bold
   ** Color: primaryColor
   **/
  get name(): TextStyle {
    return {
      fontFamily: FontFamily.bold,
      fontWeight: 'bold',
      fontSize: 14,
      color: Colors.black,
      lineHeight: 20,
    }
  }
}

export default new Texts()
