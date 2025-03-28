import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyTextinput from '../../components/MyTextinput'
import EmailLogo from '../../assests/Svg/email.svg'
import PeopleLogo from '../../assests/Svg/people.svg'
import TrashLogo from '../../assests/Svg/trash.svg'
import ResetPassModalLogo from '../../assests/Svg/resetpassmodal.svg'
import CustomButton from '../../components/CustomButton'
import MyText from '../../components/MyText'
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message'

const CreateGroups = () => {
    const [name, setName] = useState('')
      const [email, setEmail] = useState('')
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
       {nameEmailInputs()}
       {addButton()}
       {addedProfileText()}
       {addedDataShow()}
       {createGroupBtn()}
    </KeyboardAwareScrollView>
    {resetModal()}
</ImageBackground>
  )
  function resetModal() {
    return(
        <View>
        <Modal isVisible={passModal} onBackdropPress={() => setPassModal(false) }
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={{backgroundColor:'white',borderTopLeftRadius:Sizes.fixPadding,borderTopRightRadius:Sizes.fixPadding}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: Sizes.fixPadding * 2 }}>
        <ResetPassModalLogo width={SCREEN_WIDTH * 0.7} height={SCREEN_HEIGHT * 0.22} />
      </View>
      <MyText title={`Group Created Successfully`} textStyle={{ color: '#505A61', fontSize: 20, textAlign: 'center', marginVertical: Sizes.fixHorizontalPadding }} />
      <CustomButton name={'Close'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.8, marginTop: Sizes.fixHorizontalPadding * 2,marginBottom:Sizes.fixPadding * 2 }} activeOpacity={0.6} onpress={() => {setPassModal(false); }} />
        </View>
<Toast/>
      </Modal>
      </View>
    )
  }
  function createGroupBtn() {
    return(
        <CustomButton name={'Save & Create Group'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding * 2  ,width:SCREEN_WIDTH * 0.91 }} activeOpacity={0.6} onpress={() => setPassModal(true)}/>
    )
  }
  function addedDataShow() {

const data = [
    { id: '1', name: 'Michael', email: 'micha..@gmail.com' },
    { id: '2', name: 'Sarah', email: 'sarah..@gmail.com' },
    { id: '3', name: 'John', email: 'john..@gmail.com' },
  ];

  const renderItem = ({item}) => {
    return(
        <View style={styles.card}>
        <View style={styles.profileIcon}>
          <Text style={styles.initial}>A</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{item?.name}</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <EmailLogo height={SCREEN_WIDTH * 0.04} width={SCREEN_WIDTH * 0.04}/>
          <Text style={styles.email}>{item?.email}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
          <TrashLogo height={SCREEN_WIDTH * 0.06} width={SCREEN_WIDTH * 0.06}/>
        </TouchableOpacity>
      </View>
    )
  }
    return(
        <View>
             <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item?.id}
    //   contentContainerStyle={styles.listContainer}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  
        </View>
    )
  }
  function addedProfileText() {
    return(
        <MyText title={'Added Profiles'} textStyle={{ color: Colors.black, fontSize: 18, fontFamily: 'Poppins-Medium' }} viewStyle={{marginVertical:Sizes.fixPadding}}/>
    )
  }
  function addButton() {
    return(
        <CustomButton name={'Add'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding ,width:SCREEN_WIDTH * 0.91 }} activeOpacity={0.6} />
    )
  }
  function nameEmailInputs() {
    return (
      <View>
        <MyTextinput placeholder="Full Name"   value={name} SvgIcon={PeopleLogo} onChangeText={(txt) => setName(txt)} />
        <MyTextinput placeholder="Type Email Id" SvgIcon={EmailLogo} value={email} onChangeText={(txt) => setEmail(txt)} />
      </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Groups'}/>
        </View>
    )
  }
}

export default CreateGroups

const styles = StyleSheet.create({
    background:{ flex:1},
    scrollContainer: {
        flexGrow: 1,
        padding: Sizes.fixPadding 
      },
      card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: Sizes.fixHorizontalPadding * 1.4,
        marginRight: Sizes.fixHorizontalPadding,
        // elevation: 3, // Shadow effect
        width: SCREEN_WIDTH * 0.65, 
        borderWidth:1,
        borderColor:Colors.linecolor
      },
      profileIcon: {
        width: SCREEN_WIDTH * 0.12,
        height: SCREEN_WIDTH * 0.12 ,
        borderRadius: 100,
        backgroundColor: Colors.lightblue,
        justifyContent: 'center',
        alignItems: 'center',
      },
      initial: {
        fontSize: 20,
        fontWeight: 'Poppins-Regular',
        color: Colors.primaryTheme,
      },
      info: {
        flex: 1,
        marginLeft: Sizes.fixHorizontalPadding * 1.2,
      },
      name: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color:Colors.textBlue
      },
      email: {
        fontSize: 12,
        color: Colors.textBlue,
        fontFamily:'Poppins-Regular',
        marginLeft:3
      },
      deleteButton: {
        backgroundColor: '#FC6054',
        height:SCREEN_WIDTH * 0.09,
        width:SCREEN_WIDTH * 0.09,
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center'
      },
      
})