import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Suspense, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { setTopLevelNavigator } from './src/navigations/NavigationServices'
import StackNavigation from './src/navigations/StatckNavigation'
import Toast from 'react-native-toast-message'
import LogOutModal from './src/screens/Auth/components/LogOutModal'
import Loader from './src/components/Loader'

const App = () => {

  return (
    
  <View style={styles.container}>
   <Suspense fallback={<Text>Loading...</Text>}>
      
    <NavigationContainer
          ref={c => setTopLevelNavigator(c)}
          fallback={<Text>Loading</Text>}>
          <StackNavigation />
          <Toast/>
        </NavigationContainer>
        <LogOutModal/>
        <Loader/>
        </Suspense>
  </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})