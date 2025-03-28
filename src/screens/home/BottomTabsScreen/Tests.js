import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style'
import HomeHeader from '../components/HomeHeader'
import MyText from '../../../components/MyText'
import CogtiveIcon from '../../../assests/Svg/coggitvetestgo.svg'
import CustomButton from '../../../components/CustomButton'
import ClockIcon from '../../../assests/Svg/clock.svg'
import ClockGreenIcon from '../../../assests/Svg/clockgreen.svg'
import TestIconLogo from '../../../assests/Svg/testicon.svg'
import { navigate } from '../../../navigations/NavigationServices'

const Tests = () => {
  const [newTest,setNewTest] = useState(false)
  const [CompleteTest,setCompleteTest] = useState(false)
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
          {togglebtn()}
          {testDataShow()}
        </>
      }
      contentContainerStyle={{ paddingBottom: 70,padding:Sizes.fixPadding }}
    />
    {plusbutton()}
    
    </ImageBackground>
  )
  function plusbutton() {
    return(
      <TouchableOpacity style={{backgroundColor:Colors.green,height:SCREEN_WIDTH * 0.2,width:SCREEN_WIDTH * 0.2,borderRadius:100,position:'absolute',bottom:Sizes.fixPadding * 5,alignSelf:'flex-end',right:Sizes.fixPadding,justifyContent:'center',alignItems:'center'}}
      onPress={() => navigate('testTypes')}
      >
        <Text style={{color:Colors.white,fontSize:60,fontWeight:'200',bottom:3}}>+</Text>
      </TouchableOpacity>
    )
  }
  function testDataShow() {
    const testData = [
      { id: "1", title: "Memory Test", schedule: "Daily", time: "09:30 PM" },
      { id: "2", title: "Logic & Reasoning Test", schedule: "Daily", time: "09:30 PM" },
      { id: "3", title: "Perceptual Speed & Accuracy Tests", schedule: "Daily", time: "09:30 PM" },
    ];

    const renderItem = ({item}) => {
      return(
        <View style={styles.card}>
        <TestIconLogo/>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.details}>
            <TouchableOpacity style={styles.schedule}>
              <Text style={styles.scheduleText}>{item?.schedule}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
            <ClockGreenIcon/>
            <Text style={styles.time}>{item?.time}</Text>
          </View>
            </View>
         
        </View>
      </View> 
      )
    }
    return(
      <View>
        <FlatList
      data={testData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      // contentContainerStyle={styles.listContainer}
    />
      </View>
    )
  }
  function togglebtn() {
    const handleUpcomingData = () => {
      setNewTest(true);
      setCompleteTest(false)
    }
    const handleCompletedData = () => {
      setNewTest(false);
      setCompleteTest(true)
    }
    return(
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:Sizes.fixHorizontalPadding}}>
         <CustomButton name={'Upcoming Test'} style={{backgroundColor: newTest ? Colors.green : Colors.white,width:SCREEN_WIDTH * 0.45,padding:Sizes.fixPadding * 0.9,borderWidth: newTest ? 0 :1 , borderColor:Colors.green }} activeOpacity={1} textStyle={{color:newTest ? Colors.white : Colors.green }} onpress={() => handleUpcomingData()}/>
         <CustomButton name={'Completed Test'} style={{backgroundColor: CompleteTest ?Colors.green : Colors.white,width:SCREEN_WIDTH * 0.45,padding:Sizes.fixPadding * 0.9,borderWidth: CompleteTest ? 0 :1 , borderColor:Colors.green 
         }} activeOpacity={1} textStyle={{color: CompleteTest ? Colors.white :Colors.green}} onpress={() => handleCompletedData()}/>
      </View>
    )
  }
  function userInfo() {

    return(
        <View style={styles.userinfo}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
             <CogtiveIcon height={SCREEN_WIDTH * 0.19} width={SCREEN_WIDTH * 0.19}/>
      <View style={{flexDirection:'column',justifyContent:'center',marginLeft:Sizes.fixHorizontalPadding,width:SCREEN_WIDTH * 0.54}}> 
        <MyText title={'Memory Test'} textStyle={{fontSize:14,color:Colors.white}}/>
        <View style={{flexDirection:'row',alignItems:'center',marginVertical:3}}>
        <CustomButton name={'Daily'} style={{backgroundColor:Colors.white,width:SCREEN_WIDTH * 0.15,padding:Sizes.fixHorizontalPadding * 0.5}} activeOpacity={1} textStyle={{color:Colors.green}}/>
        <View style={{flexDirection:'row',alignItems:'center',marginLeft:Sizes.fixHorizontalPadding * 0.6}}>
        <ClockIcon/>
        <MyText title={'9:30'} textStyle={{fontSize:12,color:Colors.white}} viewStyle={{marginLeft:5}}/>
        </View>
        </View>
        <MyText title={'Start Your Test Now'} textStyle={{fontSize:16,color:Colors.white}}/>
      </View>
      <CustomButton name={'Go'} style={{backgroundColor:Colors.green,width:SCREEN_WIDTH * 0.1,padding:Sizes.fixHorizontalPadding}} activeOpacity={1}/>
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

export default Tests

const styles = StyleSheet.create({
  background:{ 
    flex:1
},
userinfo:{
  backgroundColor:Colors.primaryTheme,
  borderRadius:Sizes.fixHorizontalPadding ,
  paddingVertical:Sizes.fixHorizontalPadding,
  paddingHorizontal:Sizes.fixPadding,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
},
card: {
  flexDirection: "row",
  backgroundColor: Colors.white,
  borderRadius: 12,
  padding: Sizes.fixPadding * 0.6,
  // marginHorizontal: 15,
  marginBottom: Sizes.fixPadding,
  alignItems: "center",
  borderWidth:1,
  borderColor:Colors.green
},
infoContainer: {
  flex: 1,
  marginLeft: Sizes.fixHorizontalPadding * 1.4,
},
title: {
  fontSize: 14,
 fontFamily:'Poppins-Medium',
  color: Colors.textBlue,
},
details: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 5,
},
schedule: {
  backgroundColor: Colors.white,
  paddingVertical: 4,
  paddingHorizontal: Sizes.fixPadding,
  borderRadius: 6,
  borderWidth:1,
  borderColor:Colors.green
},
scheduleText: {
  color: "#34C759",
  fontSize: 14,
  fontWeight: "500",
},

time: {
  marginLeft: 5,
  fontSize: 12,
  color: Colors.textBlue,
  fontFamily:'Poppins-Regular',
},

})