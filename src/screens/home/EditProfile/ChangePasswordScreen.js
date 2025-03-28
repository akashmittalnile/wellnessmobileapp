import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyStatusBar from '../../../components/StatusBar'
import { Colors, Sizes } from '../../../assests/style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MainHeader from '../../../components/MainHeader'
import MyTextinput from '../../../components/MyTextinput'
import PasswordLogo from '../../../assests/Svg/password.svg'
import EyeShow from '../../../assests/Svg/eyeoff.svg'
import EyeOn from '../../../assests/Svg/eyeon.svg'
import CustomButton from '../../../components/CustomButton'

const ChangePasswordScreen = () => {
    const [password, setPassword] = useState('')
          const [confirmPassword, setConfirmPassword] = useState('')
          const [oldPassword,setOldPassword] = useState('')
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
        {passwordConfirmInputs()}
        {SaveButton()}
        {cancelButton()}
    </KeyboardAwareScrollView>
</ImageBackground>
  )
  function cancelButton() {
    return(
        <CustomButton name={'Cancel'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.green, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding }} activeOpacity={0.6} 
        
        />
    )
  }
  function SaveButton() {
    return(
        <CustomButton name={'Save Password'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding * 3 }} activeOpacity={0.6} />
    )
  }
  function passwordConfirmInputs() {
    return (
      <View>
         <MyTextinput placeholder="Enter Old Password" secureTextEntry SvgIcon={PasswordLogo} value={oldPassword} onChangeText={(txt) => setOldPassword(txt)}
          SvgIcon2={EyeShow} SvgIcon3={EyeOn} />
        <MyTextinput placeholder="Enter New Password" secureTextEntry SvgIcon={PasswordLogo} value={password} onChangeText={(txt) => setPassword(txt)}
          SvgIcon2={EyeShow} SvgIcon3={EyeOn} />
        <MyTextinput placeholder="Confirm New Password" secureTextEntry SvgIcon={PasswordLogo} value={confirmPassword} onChangeText={(txt) => setConfirmPassword(txt)} SvgIcon2={EyeShow} SvgIcon3={EyeOn} />
      </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Change Password'}/>
        </View>
    )
  }
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
     background:{ flex:1},
         scrollContainer: {
            flexGrow: 1,
            padding: Sizes.fixPadding 
          },
})