import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import MyStatusBar from '../../components/StatusBar'
import MyText from '../../components/MyText'
import CustomButton from '../../components/CustomButton'
import MessageCard from './components/MessageCard'
import { navigate } from '../../navigations/NavigationServices'

const ContactUs = () => {
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
    {createTitlebtn()}
    {contactUsDataShow()}
    </>
  }
  contentContainerStyle={{ padding:Sizes.fixPadding }}
/>

</ImageBackground>
  )
  function contactUsDataShow() {
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
    return(
        <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <MessageCard item={item} />}
      />
    </View>
    )
  }
  function createTitlebtn() {
    return(
        <View style={styles.titlecontainer}>
              <MyText title={'Contact Us'} textStyle={{ fontSize: 18, color: '#112544' }}  />
              <CustomButton name={'Create'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.6,width:SCREEN_WIDTH * 0.3 }} activeOpacity={0.6} onpress={() => navigate('createContactUs')}/>
        </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Contact Us'}/>
        </View>
    )
  }
}

export default ContactUs

const styles = StyleSheet.create({
    background:{ flex:1},
    titlecontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    container: {
        flex: 1,
        // backgroundColor: "#F8F9FA",
        paddingVertical: 10,
      },
})