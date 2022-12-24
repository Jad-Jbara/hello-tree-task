import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Navigation from 'navigation'

import LanguageStore from 'stores/LanguageStore'

export default function App() {
  useEffect(() => {
    const checkIfFirstTimeLogin = async () => {
      await LanguageStore.getLocale()
    }
    checkIfFirstTimeLogin()
  }, [])

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <BottomSheetModalProvider>
          <StatusBar style="auto" />
          <Navigation />
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
