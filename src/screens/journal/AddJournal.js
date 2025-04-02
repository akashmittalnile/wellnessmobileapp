import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import MyTextinput from '../../components/MyTextinput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyText from '../../components/MyText'
import WriteLogo from '../../assests/Svg/write.svg'
import MicroPhone from '../../assests/Svg/microphone.svg'
import Modal from 'react-native-modal';

const AddJournal = () => {
    const [journaltitle,setJournalTitle] = useState('')
    const [passModal,setPassModal] = useState(false)
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
    <KeyboardAwareScrollView
       contentContainerStyle={styles.scrollContainer}
       enableOnAndroid={true}
       extraScrollHeight={10}
       keyboardShouldPersistTaps="handled"
     >
      {jorunalTitle()}
      {multilineText()}
      {writeSpeakBox()}
     </KeyboardAwareScrollView>
     {openSpeakModal()}
</ImageBackground>
  )
  function openSpeakModal() {
    return(
        <View>
        <Modal isVisible={passModal} onBackdropPress={() => setPassModal(false) }
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={{backgroundColor:'white',borderTopLeftRadius:Sizes.fixPadding,borderTopRightRadius:Sizes.fixPadding,paddingVertical:Sizes.fixPadding * 2}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <MyText title={'Speak!!!'} textStyle={{fontSize:24,fontFamily:'Poppins-Medium',color:Colors.textBlue}}/>
        <MyText title={'Your Thoughts'} textStyle={{fontSize:18,fontFamily:'Poppins-Regular',color:'#B8B8B8'}} viewStyle={{marginVertical:Sizes.fixHorizontalPadding * 0.5}}/>
        </View>
        <TouchableOpacity style={styles.micboxmodal}>
            <MicroPhone height={SCREEN_WIDTH * 0.1} width={SCREEN_WIDTH * 0.1}/>
        </TouchableOpacity>
        <MyText title={'Tap & Hold To Speak'} textStyle={{fontSize:18,fontFamily:'Poppins-Regular',color:Colors.textBlue}} viewStyle={{alignSelf:'center'}}/>
        </View>


      </Modal>
      </View>
    )
  }
  function writeSpeakBox() {
    return(
        <View style={styles.wsbox}>
             <TouchableOpacity style={{backgroundColor:Colors.primaryTheme,flexDirection:'row',alignItems:'center',justifyContent:'center',padding:Sizes.fixHorizontalPadding ,borderRadius:5,paddingHorizontal:Sizes.fixPadding * 2}}
            
            >
                <WriteLogo/>
                <MyText title={'Write'} textStyle={{fontSize:14,fontFamily:'Poppins-Medium',marginLeft:7,color:Colors.white}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:Colors.green,flexDirection:'row',alignItems:'center',justifyContent:'center',padding:Sizes.fixHorizontalPadding ,borderRadius:5,paddingHorizontal:Sizes.fixPadding * 2}}
             onPress={() => setPassModal(true)}
            >
                <MicroPhone/>
                <MyText title={'Speak'} textStyle={{fontSize:14,fontFamily:'Poppins-Medium',marginLeft:7,color:Colors.white}}/>
            </TouchableOpacity>
        </View>
    )
  }
  function multilineText() {
    return(
           <View style={styles.containerInput}>
                    <TextInput
                      style={styles.input}
                      placeholder="Type Your Message Here..."
                      placeholderTextColor="#8F93A0"
                      multiline
                    />
                  </View>
    )
  }
  function jorunalTitle() {
    return(
        <MyTextinput placeholder="Journal Title"  value={journaltitle} onChangeText={(txt) => setJournalTitle(txt)}/>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Add Journal'}/>
        </View>
    )
  }
}

export default AddJournal

const styles = StyleSheet.create({
    background:{ flex:1},
    scrollContainer: {
        flexGrow: 1,
        padding: Sizes.fixPadding 
       },
       containerInput:{
marginTop:Sizes.fixHorizontalPadding
       },
       input: {
        width: "100%",
        height: SCREEN_WIDTH * 0.35,
        borderWidth: 1,
        borderColor: '#CCCCFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        padding: Sizes.fixPadding,
        backgroundColor: Colors.white,
        fontSize: 12,
        fontFamily:'Poppins-Regular'
      },
      wsbox:{
        borderWidth:1,
        borderColor: '#CCCCFF',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical:Sizes.fixPadding * 0.5
      },
      micboxmodal:{
        height:SCREEN_WIDTH * 0.25,
        width:SCREEN_WIDTH * 0.25,
        borderRadius:100,
        backgroundColor:Colors.green,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:Sizes.fixHorizontalPadding
      }
})