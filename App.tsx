import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Navigation from 'navigation'
import { useEffect } from 'react'
import LanguageStore from 'stores/LanguageStore'

export default function App() {
  useEffect(() => {
    const checkIfFirstTimeLogin = async () => {
      await LanguageStore.getLocale()
    }
    checkIfFirstTimeLogin()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
