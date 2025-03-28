import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import CustomSearchInput from '../../components/CustomSearchInput'
import Candle2 from '../../assests/Svg/candle-2.svg'
import CustomButton from '../../components/CustomButton'
import { navigate } from '../../navigations/NavigationServices'

const TestTypes = () => {
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
    {searchbarinfo()}
    {testData()}
    </>
  }
  contentContainerStyle={{ padding:Sizes.fixPadding }}
/>
    {nextBtn()}
</ImageBackground>
  )
  function nextBtn() {
    return(
        <View style={{position:'absolute',bottom:50,alignSelf:'center'}}>
            <CustomButton name={'Next'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9,width:SCREEN_WIDTH * 0.9, }} activeOpacity={0.6} onpress={() => navigate('testFrequency')}/>
        </View>
    )
  }
  function testData() {
    const handleSelect = (id) => {
        setSelectedId((prevId) => (prevId === id ? null : id));
      };
    const data = [
        { id: "1", title: "Verbal Ability Test", abbreviation: "V" },
        { id: "2", title: "Logic & Reasoning Test", abbreviation: "L" },
        { id: "3", title: "Attention Test", abbreviation: "A" },
        { id: "4", title: "Spatial Ability Test", abbreviation: "S" },
        { id: "5", title: "Numerical Ability Test", abbreviation: "N" },
        { id: "6", title: "Learning Ability Test", abbreviation: "L" },
        { id: "7", title: "Perceptual Speed & Accuracy Tests", abbreviation: "P" },
        { id: "8", title: "Memory Test", abbreviation: "M" },
      ];
      const renderItem = ({item}) => {
        const isSelected = item?.id === selectedId;
        return(
            <TouchableOpacity
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => handleSelect(item?.id)}
      >
            <View style={styles.circle}>
              <Text style={styles.letter}>{item?.abbreviation}</Text>
            </View>
            <Text style={styles.text}>{item?.title}</Text>
          </TouchableOpacity>
        )
      }
    return(
        <View style={{marginTop:Sizes.fixHorizontalPadding}}>
              <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item?.id}
      numColumns={3}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
    />
        </View>
    )
  }
  function searchbarinfo() {
    return(
      <CustomSearchInput placeholder={'Search'} showButton={true} svgLogo={Candle2}/>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Test Types'}/>
        </View>
    )
  }
}

export default TestTypes

const styles = StyleSheet.create({
    background:{ flex:1},
    container: {
        padding: 0,
      },
      row: {
        justifyContent: "space-between",
      },
      card: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 10,
        alignItems: "center",
        padding: Sizes.fixHorizontalPadding * 1.8,
        margin: Sizes.fixHorizontalPadding * 0.8,
        minWidth: "30%",
        maxWidth: "30%",
       borderWidth:1,
       borderColor:Colors.linecolor
      },
      selectedCard: {
        // backgroundColor: "#DCE5FF",
        borderWidth: 2,
        borderColor: Colors.primaryTheme,
      },
      circle: {
        width: SCREEN_WIDTH * 0.1,
        height:SCREEN_WIDTH * 0.1,
        borderRadius: 100,
        backgroundColor: Colors.grayA,
        justifyContent: "center",
        alignItems: "center",
      },
      letter: {
        fontSize: 18,
       fontFamily:'Poppins-Medium',
        color: Colors.primaryTheme,
      },
      text: {
        textAlign: "center",
        fontSize: 13,
        marginTop: 5,
        fontFamily:'Poppins-Regular',
        color: Colors.textBlue,
      },
    
})