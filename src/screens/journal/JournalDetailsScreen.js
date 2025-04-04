import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'

const JournalDetailsScreen = ({route}) => {
  console.log(route.params)
  return (
    <ImageBackground 
    source={require('../../assests/images/signinbackground.png')} 
    style={styles.background}
    resizeMode="cover"
  >
      <MyStatusBar 
        backgroundColor={Colors.primaryTheme} 
        barStyle='light-content' 
      />
    {Header()}
    <FlatList
  ListHeaderComponent={
    <>
    {imagePart()}
    </>
  }
  contentContainerStyle={{ padding:Sizes.fixPadding }}
/>

</ImageBackground>
  )
  function imagePart() {
    return(
      <View>
        
      </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Journal Details'}/>
        </View>
    )
  }
}

export default JournalDetailsScreen

const styles = StyleSheet.create({
  background:{ flex:1},
})