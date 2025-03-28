import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import ProgressCircle from '../../components/ProgressCircle'
import MyText from '../../components/MyText'
import PeopleLogo from '../../assests/Svg/people.svg'
import CustomButton from '../../components/CustomButton'
import ArrowRight from '../../assests/Svg/arrow-right.svg'
import { navigate } from '../../navigations/NavigationServices'

const GroupDetails = () => {
        const [selectedId, setSelectedId] = useState(null);
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
    {groupUserScoreTest()}
    {startDeletebtn()}
    {sortTestCategory()}
    {sortCategoryData()}
    {leaderShipText()}
    {leaderShipDataShow()}
    </>
  }
  contentContainerStyle={{ padding:Sizes.fixPadding }}
/>

</ImageBackground>
  )
  function leaderShipDataShow() {
    const getBackgroundColor = (rank) => {
      switch (rank) {
        case 1:
          return Colors.primaryTheme;
        case 2:
          return Colors.green;
        case 3:
          return Colors.textBlue;
        default:
          return Colors.linecolor; 
      }
    };
    const leaderBoardData = [
        { id: "1", name: "Michael Jin", rank: 1,  },
        { id: "2", name: "Michael Jin", rank: 2,  },
        { id: "3", name: "Michael Jin", rank: 3,  },
        { id: "4", name: "Michael Jin", rank: 4,  },
        { id: "5", name: "Michael Jin", rank: 5,  },
      ];
      const renderItem = ({item}) => {
        return(
            <TouchableOpacity style={[styles.card, {}]} 
            onPress={() => navigate('testShow')}>
            <View style={[styles.rankCircle, { backgroundColor: getBackgroundColor(item.rank) }]}>
              <Text style={styles.rankText}>{item.rank}</Text>
            </View>
            <Image source={require('../../assests/images/deleteImages/profileLogo.png')} style={styles.profileImage} />
            <Text style={styles.name}>{item.name}</Text>
           <ArrowRight/>
          </TouchableOpacity>
        )
      }
    return(
        <View style={styles.containerleader}>
        <FlatList
          data={leaderBoardData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
        
    )
  }
  function leaderShipText() {
    return(
        <MyText title={'Leaderboard'} textStyle={{ fontSize: 18, color: '#112544' }} viewStyle={{marginVertical:Sizes.fixPadding}} />
    )
  }
  function sortCategoryData() {
          const options = [
              { id: "1", title: "Plans Related" },
              { id: "2", title: "Billing Related" },
              { id: "3", title: "General Inquiry Data" },
              { id: "4", title: "basic Inquiry" },
            ];
          return(
              <View style={styles.container}>
              <FlatList
                data={options}
                horizontal
                keyExtractor={(item) => item?.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={() => <View style={{width:5}}></View>}
                renderItem={({ item }) => {
                  const isSelected = item?.id === selectedId;
                  return (
                    <TouchableOpacity
                      style={[styles.item, isSelected && styles.selectedItem]}
                      onPress={() => setSelectedId(item?.id)}
                    >
                      <Text style={[styles.text, isSelected && styles.selectedText]}>
                        {item?.title}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )
      }
  function sortTestCategory() {
    return(
        <MyText title={'Sort By Test Category'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{marginVertical:Sizes.fixPadding}} />
    )
}
  function startDeletebtn() {
    return(
        <View style={styles.startdeleteContainer}>
                 <CustomButton name={'Start Your Test'} textStyle={{ fontSize: 14, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.7, marginTop: Sizes.fixHorizontalPadding ,width:'49%' }} activeOpacity={0.6} />
                 <CustomButton name={'Delete Group'} textStyle={{ fontSize: 14, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.redWellness, paddingVertical: Sizes.fixPadding * 0.7, marginTop: Sizes.fixHorizontalPadding ,width:'49%'}} activeOpacity={0.6} />
        </View>
    )
  }
  function groupUserScoreTest() {
    return(
        <View style={styles.mainContainer}>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:Colors.linecolor,borderRadius:10,paddingVertical:Sizes.fixPadding,width:'49%'}}>
            <ProgressCircle percentage={54} radius={50} strokeWidth={10} width={44} height={44} circleColor={Colors.primaryTheme} backgroundColor={Colors.grayA} textColor={Colors.primaryTheme} />
            <MyText title={'Group Score'} textStyle={{ fontSize: 13, color:Colors.textBlue,fontFamily:'Poppins-Regular' }}  />
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:Colors.linecolor,borderRadius:10,paddingVertical:Sizes.fixPadding,width:'49%'}}>
            <ProgressCircle percentage={54} radius={50} strokeWidth={10} width={44} height={44} circleColor={Colors.primaryTheme} backgroundColor={Colors.grayA} textColor={Colors.primaryTheme} />
            <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                <PeopleLogo/>
            <MyText title={'Total User Took Test'} textStyle={{ fontSize: 13, color:Colors.textBlue,fontFamily:'Poppins-Regular' }}  />
            </View>
          
            </View>
        </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Group A'}/>
        </View>
    )
  }
}

export default GroupDetails

const styles = StyleSheet.create({
    background:{ flex:1},
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        gap:Sizes.fixHorizontalPadding
    },
    startdeleteContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
        marginTop:Sizes.fixHorizontalPadding * 0.3
      
    },
    container: {
        // paddingVertical: Sizes.fixHorizontalPadding,
        margin: - Sizes.fixPadding
      },
      list: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:Sizes.fixPadding,
        paddingVertical:Sizes.fixPadding
      },
      item: {
        paddingVertical: Sizes.fixHorizontalPadding * 1.4,
        paddingHorizontal: Sizes.fixPadding,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.linecolor,
        // marginHorizontal: Sizes.fixHorizontalPadding * 0.5,
   
        backgroundColor: Colors.white,
      },
      selectedItem: {
        backgroundColor:Colors.primaryTheme,
        borderWidth:0
        // borderColor: "#4A90E2",
      },
      text: {
        color: Colors.textBlue,
        fontSize: 13,
        fontFamily:'Poppins-Regular'
      },
      selectedText: {
        color: Colors.white,
          fontSize: 13,
        fontFamily:'Poppins-Regular'
      },
      containerleader: {
        flex: 1,
      },
      card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        padding: Sizes.fixHorizontalPadding,
        borderRadius: 10,
        marginBottom: Sizes.fixHorizontalPadding,
        borderWidth: 1,
        borderColor:Colors.linecolor
      },
      rankCircle: {
        width: SCREEN_WIDTH * 0.08,
        height: SCREEN_WIDTH * 0.08,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginRight: Sizes.fixHorizontalPadding * 1.5,
      },
      rankText: {
        fontSize:16,
        fontFamily:'Poppins-Regular',
        color: Colors.white,
      },
      profileImage: {
        width: SCREEN_WIDTH * 0.085,
        height: SCREEN_WIDTH * 0.085,
        borderRadius: 20,
        marginRight: Sizes.fixHorizontalPadding * 1.5,
      },
      name: {
        flex: 1,
        fontSize: 13,
        fontFamily:'Poppins-Medium',
        color:Colors.textBlue
      },
    
})