import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from '../../assests/style'
import AuthHeader from './components/AuthHeader'
import ResetEmail from '../../assests/Svg/resetEmail.svg'
import MyText from '../../components/MyText'
import MyTextinput from '../../components/MyTextinput'
import EmailLogo from '../../assests/Svg/email.svg'
import CustomButton from '../../components/CustomButton'
import { navigate } from '../../navigations/NavigationServices'
import { connect } from 'react-redux'
import { showToastMessage } from '../../utils/service'
import * as AuthActions from '../../redux/actions/AuthActions';

const ForgotEmail = ({dispatch,resetEmail}) => {
    const [email,setEmail] = useState('')
    
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
            {resetEmailLogo()}
            {resetEmailText()}
            {resetEmailInput()}
            {resetPasswordButton()}

    
        </KeyboardAwareScrollView>
    </ImageBackground>
  )
  function resetPasswordButton() {
    const handleVerifyEmail = () => {
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
      if (email === '') {
        showToastMessage({message : 'Please Fill Your Email'})
      } else if (!emailRegex.test(email)) {
              showToastMessage({ message: 'Please enter valid email id.' });
            } else {
        const payload ={
          email: email
        }
        dispatch(AuthActions.verifyEmail(payload))
      }
    }
    return(
        <CustomButton name={'Reset Password'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.8, marginTop: Sizes.fixHorizontalPadding * 2 }} activeOpacity={0.6}  onpress={() => handleVerifyEmail()}/>
    )
  }
  function resetEmailInput() {
    return(
        <MyTextinput placeholder="Email Address"  SvgIcon={EmailLogo} value={email} onChangeText={(txt) => setEmail(txt)}/>
    )
  }
  function resetEmailText() {
    return(
        <View style={{marginBottom:Sizes.fixPadding}}>
        <MyText title={'Reset Password'} textStyle={{ color: Colors.primaryTheme, fontSize: 20, textAlign: 'center', marginBottom: Sizes.fixHorizontalPadding }} />
        <MyText title={'We Will Send An 4 Digit OTP In Your Registered Email ID'} textStyle={{ color: Colors.black, fontSize: 16, textAlign: 'center',fontFamily:'Poppins-Regular',paddingHorizontal:Sizes.fixPadding * 1.5, }} />
      </View>
    )
  }
  function resetEmailLogo() {
    return(
        <View style={{justifyContent:'center',alignItems:'center',paddingVertical:Sizes.fixPadding}}>
            <ResetEmail width={SCREEN_WIDTH * 0.7} height={SCREEN_HEIGHT * 0.25}/>
        </View>
    )
  }
  function Header() {
    return(
        <View style={{marginTop:55}}>
        <AuthHeader title={'Reset Password'}/>
        </View>
    )
  }
}
const mapStateToProps = state => ({
  resetEmail: state.authreducer.resetEmail,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ForgotEmail);

const styles = StyleSheet.create({
    scrollContainer: {
             flexGrow: 1,
             padding: Sizes.fixPadding * 1.4
            },
            background:{ flex:1},
})