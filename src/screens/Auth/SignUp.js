import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from './components/AuthHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MyText from '../../components/MyText'
import MyTextinput from '../../components/MyTextinput'
import EmailLogo from '../../assests/Svg/email.svg'
import USerLogo from '../../assests/Svg/Userlogo.svg'
import PasswordLogo from '../../assests/Svg/password.svg'
import EyeShow from '../../assests/Svg/eyeoff.svg'
import EyeOn from '../../assests/Svg/eyeon.svg'
import CustomButton from '../../components/CustomButton'
import GoogleAppleButton from './components/GoogleAppleButton'
import GoogleLogo from '../../assests/Svg/googlelogo.svg'
import AppleLogo from '../../assests/Svg/AppleIcon.svg'
import { navigate } from '../../navigations/NavigationServices'
import PhoneInput from './components/PhoneInput'
import { connect } from 'react-redux'
import * as AuthActions from '../../redux/actions/AuthActions';
import { formatPhoneNumber, imagePicker, showToastMessage } from '../../utils/service'
import RNFetchBlob from 'rn-fetch-blob'



const SignUp = ({ phoneNumberCountryCode, dispatch }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [imageData, setImageData] = useState('')

  console.log(imageData, 'check ')

  return (
    <ImageBackground
      source={require('../../assests/images/signinbackground.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {Header()}

      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled"
      >
        {createAccountText()}
        {selectImage()}
        {nameEmailInputs()}
        {PhoneNumberAllInput()}
        {passwordConfirmInputs()}
        {SignUpButton()}
        {/* {linepart()} */}
        {/* {googleApplebtn()} */}
        {alreadyAccont()}
      </KeyboardAwareScrollView>
    </ImageBackground>
  )
  function selectImage() {
    const onPicker = async type => {
      const response = await imagePicker({ type });

      if (response) {
        // updateState({ imageData: response[0] });
        setImageData(response[0])
      }
    };
    return (
      <TouchableOpacity style={{ borderWidth: 1, alignSelf: 'center', height: SCREEN_WIDTH * 0.25, width: SCREEN_WIDTH * 0.25, borderRadius: 100, borderColor: Colors.primaryTheme, marginBottom: Sizes.fixPadding, overflow: 'hidden' }}
        onPress={() => onPicker('gallary')}
      >
        <Image source={{ uri: imageData?.uri }} style={{ height: SCREEN_WIDTH * 0.25, width: SCREEN_WIDTH * 0.25 }} />
      </TouchableOpacity>
    )
  }
  function alreadyAccont() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: Sizes.fixHorizontalPadding * 1.7 }}>
        <MyText title={'Already have an account? '} textStyle={{ color: Colors.black, fontSize: 14, fontFamily: 'Poppins-Medium' }} />
        <TouchableOpacity onPress={() => navigate('signin')}>


          <MyText title={'Sign In'} textStyle={{ color: Colors.primaryTheme, fontSize: 14, fontFamily: 'Poppins-Medium' }} />
        </TouchableOpacity>
      </View>
    )
  }
  function googleApplebtn() {
    return (
      <View>
        <GoogleAppleButton
          text="Sign in with Google"
          SvgIcon={GoogleLogo}
          buttonStyle={{ backgroundColor: '#E6E6FF', marginBottom: Sizes.fixHorizontalPadding * 0.5 }}
        />
        <GoogleAppleButton
          text="Continue with Apple"
          SvgIcon={AppleLogo}
          buttonStyle={{ marginTop: Sizes.fixHorizontalPadding * 1.5, backgroundColor: '#E6E6FF' }}
        />
      </View>
    )
  }
  function linepart() {
    return (
      <View style={{ borderWidth: 0.4, width: SCREEN_WIDTH * 0.88, backgroundColor: Colors.black, marginVertical: Sizes.fixPadding * 1.6, alignSelf: 'center' }}>

      </View>
    )
  }
  function SignUpButton() {
    const validation = () => {


      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
      if (name === '') {
        showToastMessage({ message: 'Please enter your first name.' });
      } else if (email === '') {
        showToastMessage({ message: 'Please enter your email id.' });
      } else if (!emailRegex.test(email)) {
        showToastMessage({ message: 'Please enter valid email id.' });
      } else if (password === '') {
        showToastMessage({ message: 'Please select your address.' });
      } else if (confirmPassword === '') {
        showToastMessage({ message: 'Please check terms and conditions.' });
      } else {
        const payload = [
          { name: 'fullname', data: name },
          { name: 'email', data: email },
          { name: 'password', data: password },
          { name: 'password_confirmation', data: confirmPassword },
          { name: 'phone', data: phone },
          { name: 'role_id', data: 2 },
        ];
        if (imageData?.uri) {
          payload.push({
            name: 'profile_photo',
            filename: imageData.fileName || 'profile.jpg',
            type: imageData.type || 'image/jpeg',
            data: RNFetchBlob.wrap(imageData.uri.replace('file://', '')),
          });
        } 
        dispatch(AuthActions.onRegister(payload));
      }
    };
    return (
      <CustomButton name={'Sign Up'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding * 2 }} activeOpacity={0.6} onpress={() => validation()} />
    )
  }
  function passwordConfirmInputs() {
    return (
      <View>
        <MyTextinput placeholder="Create New Password" secureTextEntry SvgIcon={PasswordLogo} value={password} onChangeText={(txt) => setPassword(txt)}
          SvgIcon2={EyeShow} SvgIcon3={EyeOn} />
        <MyTextinput placeholder="Confirm Password" SvgIcon={PasswordLogo} value={confirmPassword} onChangeText={(txt) => setConfirmPassword(txt)} SvgIcon2={EyeShow} SvgIcon3={EyeOn} />
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
        <MyTextinput placeholder="Full Name" SvgIcon={USerLogo} value={name} onChangeText={(txt) => setName(txt)} />
        <MyTextinput placeholder="Email Address" SvgIcon={EmailLogo} value={email} onChangeText={(txt) => setEmail(txt)} />
      </View>
    )
  }
  function createAccountText() {
    return (
      <View style={{ flex: 0.06, justifyContent: 'center', marginBottom: Sizes.fixPadding }}>
        <MyText title={'Create An Account'} textStyle={{ color: Colors.primaryTheme, fontSize: 20, fontFamily: 'Poppins-Medium' }} />
        <MyText title={'Please Enter You Basic Details'} textStyle={{ color: Colors.black, fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: Sizes.fixHorizontalPadding }} />
      </View>
    )
  }
  function Header() {
    return (
      <View style={{ marginTop: 55 }}>
        <AuthHeader title={'Sign Up'} />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  phoneNumberCountryCode: state.authreducer.phoneNumberCountryCode,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);



const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: Sizes.fixPadding * 1.4
  },
  background: { flex: 1 }
})