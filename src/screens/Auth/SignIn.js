import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyTextinput from '../../components/MyTextinput'
import EmailLogo from '../../assests/Svg/email.svg'
import PasswordLogo from '../../assests/Svg/password.svg'
import AuthHeader from './components/AuthHeader'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import CustomButton from '../../components/CustomButton'
import GoogleAppleButton from './components/GoogleAppleButton'
import GoogleLogo from '../../assests/Svg/googlelogo.svg'
import AppleLogo from '../../assests/Svg/AppleIcon.svg'
import MyText from '../../components/MyText'
import { navigate } from '../../navigations/NavigationServices'
import EyeShow from '../../assests/Svg/eyeoff.svg'
import EyeOn from '../../assests/Svg/eyeon.svg'
import { showToastMessage } from '../../utils/service'
import { connect } from 'react-redux'
import * as AuthActions from '../../redux/actions/AuthActions';

const SignIn = ({dispatch}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
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
        {logoImage()}
        {usernamePasswordInput()}
        {signInButton()}
        {forgotText()}
        {/* {linepart()} */}
        {/* {googleApplebtn()} */}
        {Dontaccont()}

    </KeyboardAwareScrollView>
</ImageBackground>

  )
  function Dontaccont() {
    return(
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:Sizes.fixHorizontalPadding * 1.7}}>
            <MyText title={'Don’t Have an Account? '} textStyle={{ color: Colors.black, fontSize: 14, fontFamily:'Poppins-Medium'  }} />
            <TouchableOpacity onPress={() => navigate('signup')}>
            <MyText title={'Sign Up'} textStyle={{ color: Colors.primaryTheme, fontSize: 14, fontFamily:'Poppins-Medium'  }} />
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
          buttonStyle={{backgroundColor:'#E6E6FF',marginBottom:Sizes.fixHorizontalPadding * 0.5 }}
        />
        <GoogleAppleButton
          text="Continue with Apple"
          SvgIcon={AppleLogo}
          buttonStyle={{ marginTop: Sizes.fixHorizontalPadding * 1.5,backgroundColor:'#E6E6FF' }}
        />
      </View>
    )
  }
  function linepart() {
    return(
        <View style={{ borderWidth: 0.4, width: SCREEN_WIDTH * 0.88, backgroundColor: Colors.black, marginVertical: Sizes.fixPadding * 1.6,alignSelf:'center' }}>

        </View>
    )
  }
  function forgotText() {
    return(
        <Text style={{color:Colors.black,fontSize:14,fontFamily:'Poppins-Medium',textAlign:'center',marginTop:Sizes.fixHorizontalPadding}} 
        onPress={() => navigate('forgotemail')}
        >Forgot Your Password?</Text>
    )
  }
  function signInButton() {
    const validaton = () => {
      if (email === '') {
        showToastMessage({message: 'Please Fill The Email'})
      } else if (password === '') {
        showToastMessage({message: 'Please Fill The Password'})
      } else {
        const payload = {
          email: email,
          password: password
        }
        dispatch(AuthActions.onLogin(payload));
      }
    }
    return(
        <CustomButton name={'Sign In'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding * 2 }} activeOpacity={0.6}  onpress={() => validaton()}/>
    )
  }
  function usernamePasswordInput() {
    return(
        <View>
                <MyTextinput placeholder="Username Or Email Address" SvgIcon={EmailLogo} value={email} onChangeText={(txt) => setEmail(txt)}/>
                <MyTextinput placeholder="Password" secureTextEntry SvgIcon={PasswordLogo} value={password} onChangeText={(txt) => setPassword(txt)}  SvgIcon2={EyeShow} SvgIcon3={EyeOn}/>
        </View>
    )
  }
  function logoImage() {
    return(
<View style={styles.logoContainer}>
      <Image source={require('../../assests/images/splashimage.png')}/>
      </View>
    )
  }
  function Header() {
    return(
        <View style={{marginTop:55}}>
        <AuthHeader title={'Sign in'}/>
        </View>
    )
  }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


const styles = StyleSheet.create({
    scrollContainer: {
         flexGrow: 1,
         padding: Sizes.fixPadding * 1.4
        },
        background:{ flex:1},
        logoContainer: { alignItems: "center", marginBottom: Sizes.fixPadding * 2},
})