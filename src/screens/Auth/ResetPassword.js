import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from '../../assests/style'
import AuthHeader from './components/AuthHeader'
import ResetPassLogo from '../../assests/Svg/resetpass.svg'
import ResetPassModalLogo from '../../assests/Svg/resetpassmodal.svg'
import MyText from '../../components/MyText'
import MyTextinput from '../../components/MyTextinput'
import PasswordLogo from '../../assests/Svg/password.svg'
import EyeShow from '../../assests/Svg/eyeoff.svg'
import EyeOn from '../../assests/Svg/eyeon.svg'
import CustomButton from '../../components/CustomButton'
import Modal from 'react-native-modal';
import { navigate, resetToScreen } from '../../navigations/NavigationServices'
import { connect } from 'react-redux'
import * as AuthActions from '../../redux/actions/AuthActions';
import Toast from 'react-native-toast-message'

const ResetPassword = ({dispatch,resetEmail}) => {
     const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [passModal,setPassModal] = useState(false)
      
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
          {resetPassLogo()}
          {resetPassText()}
          {passwordConfirmInputs()}
          {resetpassButton()}
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
      <MyText title={`Password Reset Successful`} textStyle={{ color: '#505A61', fontSize: 20, textAlign: 'center', marginVertical: Sizes.fixHorizontalPadding }} />
      <CustomButton name={'Login'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.8, marginTop: Sizes.fixHorizontalPadding * 2,marginBottom:Sizes.fixPadding * 2 }} activeOpacity={0.6} onpress={() => {setPassModal(false); resetToScreen('signin')}} />
        </View>
<Toast/>
      </Modal>
      </View>
    )
  }
  function resetpassButton() {
    const handleResetPassword = () => {
      const payload ={
        email: resetEmail?.email,
        new_password: password,
        confirm_password: confirmPassword,
        onComplete: () => setPassModal(true)
      }
      dispatch(AuthActions.changeUserPassword(payload))
    }
    
    return (
      <CustomButton name={'Save New Password'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.8, marginTop: Sizes.fixHorizontalPadding * 2 }} activeOpacity={0.6} onpress={() => handleResetPassword()} />
    )
  }
  function passwordConfirmInputs() {
    return (
      <View>
        <MyTextinput placeholder="Enter New Password" secureTextEntry SvgIcon={PasswordLogo} value={password} onChangeText={(txt) => setPassword(txt)}
          SvgIcon2={EyeShow} SvgIcon3={EyeOn} />
        <MyTextinput placeholder="Confirm Password" SvgIcon={PasswordLogo} value={confirmPassword} onChangeText={(txt) => setConfirmPassword(txt)} SvgIcon2={EyeShow} SvgIcon3={EyeOn} />
      </View>
    )
  }
  function resetPassText() {
    return (
      <View style={{ marginBottom: Sizes.fixPadding }}>
        <MyText title={`Great!`} textStyle={{ color: Colors.primaryTheme, fontSize: 20, textAlign: 'center', marginBottom: Sizes.fixHorizontalPadding }} />
        <MyText title={'Set your new password'} textStyle={{ color: Colors.black, fontSize: 16, textAlign: 'center', fontFamily: 'Poppins-Regular', paddingHorizontal: Sizes.fixPadding * 1.5,fontFamily:'Poppins-Regular' }} />
      </View>
    )
  }
  function resetPassLogo() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: Sizes.fixPadding }}>
        <ResetPassLogo width={SCREEN_WIDTH * 0.7} height={SCREEN_HEIGHT * 0.25} />
      </View>
    )
  }
  function Header() {
    return (
      <View style={{ marginTop: 55 }}>
        <AuthHeader title={'Reset Password'} />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  resetEmail: state.authreducer.resetEmail,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: Sizes.fixPadding * 1.4
      },
      background: { flex: 1 },
})