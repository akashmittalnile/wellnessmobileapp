import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import MyText from '../../components/MyText'

const RateUs = () => {
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
    {rateUsDataShow()}
    </>
  }
  contentContainerStyle={{ padding:Sizes.fixPadding }}
/>

</ImageBackground>
  )
  function rateUsDataShow() {
    const data = [
        {
          id: "1",
          status: "Completed",
          statusColor: "#28A745",
          user: "You",
          userType: "Plans Related",
          message:
            "I Recently Had The Pleasure Of Visiting This Furniture Store, And I Must Say, I Was Thoroughly Impressed With ...",
          timestamp: "01 Wed, 09:30",
          responseUser: "Admin",
          responseTime: "Response Received On 10 Feb, 2025",
        },
        {
          id: "2",
          status: "In-Progress",
          statusColor: "#FFC107",
          user: "You",
          userType: "Billing Related",
          message:
            "I Recently Had The Pleasure Of Visiting This Furniture Store, And I Must Say, I Was Thoroughly Impressed With ...",
          timestamp: "01 Wed, 09:30",
          responseUser: null,
          responseTime: null,
        },
      ];
      const renderItem = ({item}) => {
        return(
       <View>
        
       </View>
        )
      }
    return(
        <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.id}
        renderItem={renderItem}
      />
    </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Rating & Reviews'}/>
        </View>
    )
  }
}

export default RateUs

const styles = StyleSheet.create({
    background:{ flex:1},
})