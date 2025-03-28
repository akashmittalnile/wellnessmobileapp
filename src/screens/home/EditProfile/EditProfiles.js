import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthHeader from '../../Auth/components/AuthHeader'
import MyStatusBar from '../../../components/StatusBar'
import { Colors, getFontSize, Sizes } from '../../../assests/style'
import MainHeader from '../../../components/MainHeader'
import MyTextinput from '../../../components/MyTextinput'
import EmailLogo from '../../../assests/Svg/email.svg'
import USerLogo from '../../../assests/Svg/Userlogo.svg'
import { connect } from 'react-redux'
import PhoneInput from '../../Auth/components/PhoneInput'
import { formatPhoneNumber } from '../../../utils/service'
import MyText from '../../../components/MyText'
import CustomButton from '../../../components/CustomButton'
import { navigate } from '../../../navigations/NavigationServices'

const EditProfiles = ({customerData}) => {
      const [name, setName] = useState(customerData?.fullname ?? '' )
      const [email, setEmail] = useState(customerData?.email ?? '')
      const [phone, setPhone] = useState(customerData?.phone ?? '')

  return (
     <ImageBackground 
        source={require('../../../assests/images/signinbackground.png')} 
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
            {PhoneNumberAllInput()}
            {chooseImageData()}
            {SaveButton()}
            {ChangePasswordButton()}
        </KeyboardAwareScrollView>
    </ImageBackground>
  )
  function ChangePasswordButton() {
    return(
        <CustomButton name={'Change Password'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.green, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding }} activeOpacity={0.6} 
        onpress={() => navigate('changePasswordScreen')}
        />
    )
  }
  function SaveButton() {
    return(
        <CustomButton name={'Save'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding * 4 }} activeOpacity={0.6} />
    )
  }
  function chooseImageData() {
    return(
        <View style={{borderWidth:1,padding:Sizes.fixHorizontalPadding,borderStyle:'dashed',borderRadius:10,borderColor:Colors.textBlue,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'#C4CBFF',flexDirection:'row',alignItems:'center',justifyContent:'center',padding:Sizes.fixHorizontalPadding ,borderRadius:10,paddingHorizontal:Sizes.fixPadding}}>
                <Image source={require('../../../assests/images/galleryCamera/gallery.png')} />
                <MyText title={'Choose File'} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:3}}/>
            </TouchableOpacity>
            <MyText title={'No File Chosen'} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:10}}/>
        </View>
    )
  }
  function PhoneNumberAllInput() {
    return (
      <PhoneInput value={formatPhoneNumber(phone)} onChangeText={(txt) => setPhone(txt)} />
    )
  }
  function nameEmailInputs() {
    return (
      <View>
        <MyTextinput placeholder="Full Name"  SvgIcon={USerLogo} value={name} onChangeText={(txt) => setName(txt)} />
        <MyTextinput placeholder="Email Address" SvgIcon={EmailLogo} value={email} onChangeText={(txt) => setEmail(txt)} />
      </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Edit Profile Details'}/>
        </View>
    )
  }
}
const mapStateToProps = state => ({
    customerData: state.common.customerData,
  });
  
  const mapDispatchToProps = dispatch => ({ dispatch });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditProfiles);

const styles = StyleSheet.create({
    background:{ flex:1},
     scrollContainer: {
        flexGrow: 1,
        padding: Sizes.fixPadding 
      },
})