import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from './components/HomeHeader'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import FastImage from 'react-native-fast-image'
import MyText from '../../components/MyText'
import { connect } from 'react-redux'
import CustomButton from '../../components/CustomButton'
import CognitiveTetsCard from './components/CognitiveTetsCard'
import CogtiveIcon from '../../assests/Svg/coggitvetestgo.svg'
import EmojiMoodSelector from './components/EmojiMoodSelector'

const Home = ({customerData}) => {
    console.log(customerData?.profile_photo,'customer Data')
    const emojiMap = {
      '😌': 'Relaxed',
      '😢': 'Sad',
      '😃': 'Happy',
      '😡': 'Angry',
  };
  return (
     <ImageBackground 
            source={require('../../assests/images/signinbackground.png')} 
            style={styles.background}
            resizeMode="cover"
          >
            {Header()}
            <FlatList
          ListHeaderComponent={
            <>
            {userInfo()}
            {cognitiveTestList()}
            {cognitiveTestSetup()}
            <EmojiMoodSelector emojidata={emojiMap}/>
            </>
          }
          contentContainerStyle={{ paddingBottom: 70,padding:Sizes.fixPadding }}
        />

        </ImageBackground>
  )
  function cognitiveTestSetup() {
    return(
        <View style={styles.cognitivetestcontainer}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
        <CogtiveIcon height={SCREEN_WIDTH * 0.165} width={SCREEN_WIDTH * 0.165}/>
        <MyText title={'Setup Your Cognitive Tests'} textStyle={{fontSize:17,fontFamily:'Poppins-Medium',marginLeft:Sizes.fixHorizontalPadding,width:SCREEN_WIDTH * 0.45,}}/>
            </View>
            <CustomButton name={'Go'} style={{backgroundColor:Colors.primaryTheme,width:SCREEN_WIDTH * 0.14,padding:Sizes.fixPadding * 0.7}} activeOpacity={1}/>
        </View>
    )
  }
  function cognitiveTestList() {
    const testData = [
        { id: "1", title: "Verbal Ability Test", short: "V" },
        { id: "2", title: "Logic & Reasoning Test", short: "L" },
        { id: "3", title: "Attention Test", short: "A" },
      ];
    return(
             <FlatList
        data={testData}
        keyExtractor={(item) => item?.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => <CognitiveTetsCard item={item} />}
      />
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
  });
  
  const mapDispatchToProps = dispatch => ({ dispatch });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    background:{ 
        flex:1
    },
    userinfo:{
        backgroundColor:Colors.white,
        borderRadius:Sizes.fixHorizontalPadding ,
        borderWidth:1,
        borderColor:Colors.linecolor,
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
      listContainer: {
        marginVertical:Sizes.fixHorizontalPadding,
      
      },
      cognitivetestcontainer:{
        backgroundColor:Colors.white,
        borderWidth:1,
        borderColor:Colors.linecolor,
        borderRadius:Sizes.fixHorizontalPadding,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:Sizes.fixHorizontalPadding,
        paddingHorizontal:Sizes.fixPadding,
    }

})