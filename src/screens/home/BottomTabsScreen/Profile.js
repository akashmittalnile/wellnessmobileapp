import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style'
import HomeHeader from '../components/HomeHeader'
import MyText from '../../../components/MyText'
import CustomButton from '../../../components/CustomButton'
import FastImage from 'react-native-fast-image'
import { connect } from 'react-redux'
import Email from '../../../assests/Svg/email.svg'
import Call from '../../../assests/Svg/call.svg'
import StarLogo from '../../../assests/Svg/medal-star.svg'
import ProgressCircle from '../../../components/ProgressCircle'
import { navigate } from '../../../navigations/NavigationServices'


const Profile = ({customerData}) => {
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
          {planData()}
          {monthEmotionTitle()}
          {monthDataShow()}
          </>
        }
        contentContainerStyle={{ paddingBottom: 70,padding:Sizes.fixPadding }}
      />
      
      </ImageBackground>
  )
  function monthDataShow() {
    const data = [
      { emoji: '😊', label: 'Happy', percentage: 80 },
      { emoji: '😢', label: 'Sad', percentage: 88 },
      { emoji: '😡', label: 'Anger', percentage: 43 },
      { emoji: '😟', label: 'Anxiety', percentage: 95 },
    ];
    const renderItem = ({item}) => {
      return(
        <View style={styles.card}>
        <ProgressCircle percentage={item?.percentage} radius={50} strokeWidth={10} width={50} height={50} circleColor={Colors.primaryTheme} backgroundColor={Colors.grayA} textColor={Colors.primaryTheme} />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:Sizes.fixHorizontalPadding}}> 
        <Text style={styles.emoji}>{item.emoji}</Text>
        <Text style={styles.label}>{item.label}</Text>
        </View>
   
  </View>
      )
    }
    return(
      <View>
         <FlatList
      data={data}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.label}
      contentContainerStyle={styles.listContainer}
      renderItem={renderItem}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
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
  function planData() {
    return(
      <View style={{borderWidth:1,padding:Sizes.fixHorizontalPadding * 1.4,borderColor:Colors.linecolor,borderRadius:10,marginTop:Sizes.fixHorizontalPadding,paddingHorizontal:Sizes. fixPadding}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
        <CustomButton name={'Plan A'} style={{backgroundColor:Colors.primaryTheme,width:SCREEN_WIDTH * 0.2,padding:Sizes.fixHorizontalPadding * 1.4}} activeOpacity={1}/>
      <StarLogo/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:Sizes.fixHorizontalPadding}}>
          <View style={{flexDirection:'column',justifyContent:'center'}}>
          <MyText title={'Free'} textStyle={{fontSize:42,color:Colors.textBlue}}/>
          <MyText title={'Current Plan '} textStyle={{fontSize:14,marginTop:2,color:Colors.textBlue}}/>
          </View>
        <CustomButton name={'Upgrade Now!'} style={{backgroundColor:Colors.primaryTheme,width:SCREEN_WIDTH * 0.3,padding:Sizes.fixHorizontalPadding * 1.4}} activeOpacity={1}/>
        </View>
      </View>
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
        <View style={{flexDirection:'row',alignItems:'center',marginVertical:2}}>
          <Email height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05}/>
        <MyText title={customerData?.email} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:4}}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Call height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05}/>
        <MyText title={customerData?.phone} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:4}}/>
        </View>
        
      </View>
      <CustomButton name={'Edit'} style={{backgroundColor:Colors.green,width:SCREEN_WIDTH * 0.2,padding:Sizes.fixHorizontalPadding}} activeOpacity={1} onpress={() => {
        navigate('editProfiles')
      }}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
card: {
  width: SCREEN_WIDTH * 0.445,
  // aspectRatio: 1, // Square shape
  paddingVertical:Sizes.fixPadding,
  backgroundColor: 'white',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  // marginHorizontal: Sizes.fixHorizontalPadding * 0.5,

  borderColor:Colors.linecolor,
  borderWidth:1,
  marginBottom:Sizes.fixHorizontalPadding
},
emoji: {
  fontSize: 18,
 
},
label: {
  fontSize: 14,
  fontWeight: 'Poppins-Medium',
  color: Colors.textBlue,
  marginLeft:4
},
})