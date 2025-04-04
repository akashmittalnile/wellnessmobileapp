import { FlatList, Image, ImageBackground, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style'
import HomeHeader from '../components/HomeHeader'
import MyText from '../../../components/MyText'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import CustomButton from '../../../components/CustomButton'
import CustomSearchInput from '../../../components/CustomSearchInput'
import Candle2 from '../../../assests/Svg/candle-2.svg'
import EmotionalItem from './components/EmotionalItem'
import CalendarLogo from '../../../assests/Svg/calendar.svg'
import { navigate } from '../../../navigations/NavigationServices'
import * as JounalActions from '../../../redux/actions/JounalActions';
import moment from 'moment'


const Journals = ({dispatch,customerData,journalListData,isRefreshing}) => {
 
  useEffect(() => {
      dispatch(JounalActions.getJournalList());
  },[dispatch])
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
       {monthEmotionTitle()}
       {monthDataShow()}
       {journalTitle()}
       {journalData()}
    </>
    
  }
  contentContainerStyle={{ paddingBottom: 70,padding:Sizes.fixPadding }}
  refreshControl={
    <RefreshControl
      refreshing={isRefreshing}
      onRefresh={() => dispatch(JounalActions.getJournalList())
      }
    />
  }
/>
{plusbutton()}

</ImageBackground>
  )
  function plusbutton() {
    return(
      <TouchableOpacity style={{backgroundColor:Colors.primaryTheme,height:SCREEN_WIDTH * 0.2,width:SCREEN_WIDTH * 0.2,borderRadius:100,position:'absolute',bottom:Sizes.fixPadding * 5,alignSelf:'flex-end',right:Sizes.fixPadding,justifyContent:'center',alignItems:'center'}}
      onPress={() => navigate('addjournal')}
      >
        <Text style={{color:Colors.white,fontSize:60,fontWeight:'200',bottom:3}}>+</Text>
      </TouchableOpacity>
    )
  }
  function journalData() {
    const posts = [
      {
        id: '1',
        mood: 'Feeling Happy',
        emoji: 'https://cdn-icons-png.flaticon.com/512/742/742751.png',
        date: '01 Wed, 09:30',
        title: 'Spiritual Believer',
        description:
          'Today was a good day. I worked this morning & everyone showed up for their shift. The boss bought lunch for us all. It was pizza, but it was good!',
      },
      {
        id: '2',
        mood: 'Feeling Excited',
        emoji: 'https://cdn-icons-png.flaticon.com/512/742/742923.png',
        date: '02 Thu, 14:00',
        title: 'Positive Vibes',
        description:
          'Had an amazing meeting with the team today! Everyone is super motivated, and our project is shaping up well.',
      },
      {
        id: '3',
        mood: 'Feeling Excited',
        emoji: 'https://cdn-icons-png.flaticon.com/512/742/742923.png',
        date: '02 Thu, 14:00',
        title: 'Positive Vibes',
        description:
          'Had an amazing meeting with the team today! Everyone is super motivated, and our project is shaping up well.',
      },
      {
        id: '4',
        mood: 'Feeling Excited',
        emoji: 'https://cdn-icons-png.flaticon.com/512/742/742923.png',
        date: '02 Thu, 14:00',
        title: 'Positive Vibes',
        description:
          'Had an amazing meeting with the team today! Everyone is super motivated, and our project is shaping up well.',
      },
      {
        id: '5',
        mood: 'Feeling Excited',
        emoji: 'https://cdn-icons-png.flaticon.com/512/742/742923.png',
        date: '02 Thu, 14:00',
        title: 'Positive Vibes',
        description:
          'Had an amazing meeting with the team today! Everyone is super motivated, and our project is shaping up well.',
      },
    ];
    const renderItem = ({item}) => {
      return(
        <TouchableOpacity style={styles.card}
        onPress={() => navigate('journalDetailsScreen',item)}
        >
        <View style={styles.header}>
          <View style={styles.row}>
            <Image source={{ uri: item?.emoji }} style={styles.emoji} />
            <Text style={styles.title}>{'Felling Happy'}</Text>
          </View>
          <View style={styles.row}>
            <CalendarLogo />
            <Text style={styles.time}>{moment(item?.created_at).format('MM-DD-YYYY')}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>{item?.title}</Text>
        <Text style={styles.description}>{item?.notes}</Text>
      </TouchableOpacity >
      )
    }
    return(
      <View>
         <FlatList
      data={journalListData?.journals}
      renderItem={renderItem}
      // contentContainerStyle={styles.list}
    />
      </View>
    )
  }
  function journalTitle() {
    return(
      <Text style={{fontSize:18,fontFamily:'Poppins-Medium',color:Colors.textBlue,marginVertical:Sizes.fixPadding * 0.7}}>
     Today Journals
    </Text>
    )
  }
  function monthDataShow() {
    const data = [
      { emoji: '😊', label: 'Happy', percentage: 80 },
      { emoji: '😢', label: 'Sad', percentage: 88 },
      { emoji: '😡', label: 'Anger', percentage: 43 },
      { emoji: '😟', label: 'Anxiety', percentage: 95 },
    ];
    return(
      <View>
         <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.label}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => <EmotionalItem item={item} />}
    />
      </View>
    )
  }
  function monthEmotionTitle() {
    return(
      <Text style={{fontSize:18,fontFamily:'Poppins-Medium',color:Colors.textBlue,marginVertical:Sizes.fixPadding * 0.7}}>
        February 2025- Emotion 
      </Text>
    )
  }
  function searchbarinfo() {
    return(
      <CustomSearchInput placeholder={'Search'} showButton={true} svgLogo={Candle2} style={styles.input}  />
    )
  }
  function userInfo() {
   
    return(
        <View style={styles.userinfo}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <FastImage
        style={styles.image}
        source={{
          uri: customerData?.profile_photo,
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
  journalListData: state.journalReducer.journalListData,
  isRefreshing: state.common.isRefreshing,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Journals);

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
  backgroundColor: '#fff',
  padding: 12,
  borderRadius: 10,
  borderWidth:1,
  borderColor:Colors.linecolor,
  marginBottom: Sizes.fixHorizontalPadding,
},
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: Sizes.fixHorizontalPadding * 0.7,
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
},
emoji: {
  width: 20,
  height: 20,
  marginRight: Sizes.fixHorizontalPadding * 0.5,
},
title: {
  fontSize: 14,
  fontWeight: 'Poppins-Medium',
  color: Colors.primaryTheme,
},
time: {
  fontSize: 12,
  fontFamily:'Poppins-Regular',
  color: Colors.grayDark,
  marginLeft: 4,
},
subtitle: {
  fontSize: 14,
  fontFamily: 'Poppins-Medium',
  color:Colors.textBlue,
  marginBottom: 4,
},
description: {
  fontSize: 13,
  color: Colors.textBlue,
  fontFamily:'Poppins-Regular'
},
})