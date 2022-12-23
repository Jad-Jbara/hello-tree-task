import AsyncStorage from '@react-native-async-storage/async-storage'
import keys from 'constants/keys'
import english from 'constants/Locale/english'

class LanguageStore {
  locale = ''

  async getLocale() {
    const locale = await AsyncStorage.getItem(keys.LOCALE_KEY)
    this.locale = locale
  }

  async setLocale(locale: string) {
    this.locale = locale
    await AsyncStorage.setItem(keys.LOCALE_KEY, locale)
  }

  get textLocale() {
    switch (this.locale) {
      case 'en':
        return english
      default:
        return english
    }
  }
}
export default new LanguageStore()