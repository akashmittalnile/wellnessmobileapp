import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style'
import HomeHeader from '../components/HomeHeader'
import MyText from '../../../components/MyText'
import CustomButton from '../../../components/CustomButton'
import FastImage from 'react-native-fast-image'
import { connect } from 'react-redux'
import CustomSearchInput from '../../../components/CustomSearchInput'
import Candle2 from '../../../assests/Svg/candle-2.svg'
import CalendarLogo from '../../../assests/Svg/calendar.svg'
import PeopleLogo from '../../../assests/Svg/people.svg'
import { navigate } from '../../../navigations/NavigationServices'

const Groups = ({customerData}) => {
  return (
     <ImageBackground 
        source={require('../../../assests/images/signinbackground.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        {Header()}
        <FlatList
      ListHeaderComponent={
        <>
          {userInfo()}
          {searchbarinfo()}
          {groupTitle()}
          {groupDataShow()}
        </>
      }
      contentContainerStyle={{ paddingBottom: 70,padding:Sizes.fixPadding }}
    />
    {plusbutton()}
    
    </ImageBackground>
  )
  function plusbutton() {
    return(
      <TouchableOpacity style={{backgroundColor:Colors.primaryTheme,height:SCREEN_WIDTH * 0.2,width:SCREEN_WIDTH * 0.2,borderRadius:100,position:'absolute',bottom:Sizes.fixPadding * 5,alignSelf:'flex-end',right:Sizes.fixPadding,justifyContent:'center',alignItems:'center'}}
      onPress={() => navigate('creategroups')}
      >
        <Text style={{color:Colors.white,fontSize:60,fontWeight:'200',bottom:3}}>+</Text>
      </TouchableOpacity>
    )
  }
  function groupDataShow() {
    const DATA = [
      { id: "1", title: "Group A" },
      { id: "2", title: "Group B" },
      { id: "3", title: "Group C" },
      { id: "4", title: "Group D" },
    ];
    const renderItem = ({item}) => {
      return(
        <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => navigate('groupDetails')}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{item?.title?.charAt(0)}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.infoRow}>
           <CalendarLogo/>
            <Text style={styles.infoText}>01 Wed, 09:30</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:5}}>
            <PeopleLogo/>
            <Text style={styles.infoText}>16</Text>
          </View>
            </View>
        
        </View>
      </TouchableOpacity>
      )
    }
    return(
      <View>
         <FlatList
      data={DATA}
      keyExtractor={(item) => item?.id}
      renderItem={renderItem}
      // contentContainerStyle={styles.listContainer}
    />
      </View>
    )
  }
  function groupTitle() {
      return(
        <Text style={{fontSize:18,fontFamily:'Poppins-Medium',color:Colors.textBlue,marginVertical:Sizes.fixPadding * 0.7}}>
          Group
        </Text>
      )
    }
  function searchbarinfo() {
    return(
      <CustomSearchInput placeholder={'Search'} showButton={true} svgLogo={Candle2} style={styles.input}  />
    )
  }
  function userInfo() {
    const localImage = Image.resolveAssetSource(require('../../../assests/images/deleteImages/profileLogo.png')).uri;
    return(
        <View style={styles.userinfo}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <FastImage
        style={styles.image}
        source={{
          uri: localImage, 
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={{flexDirection:'column',justifyContent:'center',marginLeft:Sizes.fixHorizontalPadding,width:SCREEN_WIDTH * 0.45}}> 
        <MyText title={customerData?.fullname} textStyle={{fontSize:14}}/>
        <MyText title={'Good Morning '} textStyle={{fontSize:18,marginTop:2}}/>
      </View>
      <CustomButton name={'Free Plan'} style={{backgroundColor:Colors.green,width:SCREEN_WIDTH * 0.2,padding:Sizes.fixHorizontalPadding}} activeOpacity={1}/>
            </View>
           
        </View>
    )
  }
  function Header() {
    return(
        <HomeHeader/>
    )
  }
}
const mapStateToProps = state => ({
  customerData: state.common.customerData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Groups);

const styles = StyleSheet.create({
  background:{ 
    flex:1
},
userinfo:{
  backgroundColor:Colors.white,
  borderRadius:Sizes.fixHorizontalPadding ,
  borderWidth:1,
  borderColor:Colors.primaryTheme,
  paddingVertical:Sizes.fixHorizontalPadding,
  paddingHorizontal:Sizes.fixPadding,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
},
image: {
  width: SCREEN_WIDTH * 0.15,
  height: SCREEN_WIDTH * 0.15,
  borderRadius: 100,
},
input: {

  marginTop: Sizes.fixHorizontalPadding
},
card: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: Colors.white,
  padding: Sizes.fixHorizontalPadding * 1.4,
  borderRadius: 10,
  marginBottom: Sizes.fixHorizontalPadding * 1.4,
  borderWidth:1,
  borderColor:Colors.linecolor
},
circle: {
  width: SCREEN_WIDTH * 0.1,
  height:SCREEN_WIDTH * 0.1,
  borderRadius: 100,
  backgroundColor: "#D3DAFC",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 5,
},
circleText: {
  fontSize: 20,
  fontFamily:'Poppins-Regular',
  color: Colors.primaryTheme,
},
details: {
  flex: 1,
  marginLeft:5
},
title: {
  fontSize:14,
  fontFamily:'Poppins-Medium',
  color: Colors.textBlue,
},
infoRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 3,
},
infoText: {
  marginLeft: 5,
  fontSize:12,
  color:Colors.textBlue,
  fontFamily:'Poppins-Regular'
},
})