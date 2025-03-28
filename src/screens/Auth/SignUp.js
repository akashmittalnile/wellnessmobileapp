import { ImageBackground, StyleSheet, Text, TouchableOpacity, View ,Platform} from 'react-native'
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
import { formatPhoneNumber, showToastMessage } from '../../utils/service'



const SignUp = ({phoneNumberCountryCode,dispatch}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  
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
      }  else if (email === '') {
        showToastMessage({ message: 'Please enter your email id.' });
      } else if (!emailRegex.test(email)) {
        showToastMessage({ message: 'Please enter valid email id.' });
      } else if (password === '') {
        showToastMessage({ message: 'Please select your address.' });
      } else if (confirmPassword === '') {
        showToastMessage({ message: 'Please check terms and conditions.' });
      } else {
    
        const payload = {
          fullname: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          phone: phone,
          role_id: 2
        };
        dispatch(AuthActions.onRegister(payload));

      }
    };
    return (
      <CustomButton name={'Sign Up'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding * 2 }} activeOpacity={0.6} onpress={() => validation()}/>
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
        <MyTextinput placeholder="Full Name"  SvgIcon={USerLogo} value={name} onChangeText={(txt) => setName(txt)} />
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