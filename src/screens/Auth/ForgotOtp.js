import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from '../../assests/style'
import AuthHeader from './components/AuthHeader'
import ResetOtp from '../../assests/Svg/resetotp.svg'
import MyText from '../../components/MyText'
import CustomButton from '../../components/CustomButton'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { navigate } from '../../navigations/NavigationServices'
import { connect } from 'react-redux'
import { showToastMessage } from '../../utils/service'
import * as AuthActions from '../../redux/actions/AuthActions';

const CELL_COUNT = 4;
const ForgotOtp = ({dispatch,resetEmail}) => {
  const [value, setValue] = useState('');
  console.log(value,'check')
  const [otpprops, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
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
        {resetOtpLogo()}
        {resetEmailText()}
        {resetOtpScreen()}
        {resetOtpButton()}
        {resendText()}
      </KeyboardAwareScrollView>
    </ImageBackground>
  )
  function resendText() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: Sizes.fixHorizontalPadding * 1.7 }}>
        <MyText title={'Didn’t get OTP?  '} textStyle={{ color: Colors.black, fontSize: 16, fontFamily: 'Poppins-Regular' }} />
        <TouchableOpacity >
          <MyText title={'Resend'} textStyle={{ color: Colors.primaryTheme, fontSize: 16, fontFamily: 'Poppins-Regular' }} />
        </TouchableOpacity>
      </View>
    )
  }

  function resetOtpButton() {
    const handleVerifyOtp = () => {
      if (value === '') {
        showToastMessage({message : 'Please Fill Otp'})
      } else {
        const payload = {
          email: resetEmail?.email,
          otp: value
        }
        dispatch(AuthActions.verifyOtp(payload))
      }
    }
    return (
      <CustomButton name={'Confirm'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.8, marginTop: Sizes.fixHorizontalPadding * 2 }} activeOpacity={0.6} onpress={() => handleVerifyOtp()} />
    )
  }
  function resetOtpScreen() {
    return (
      <View style={{}}>
        <CodeField
          {...otpprops}
          ref={ref}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"

          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
    )
  }
  function resetEmailText() {
    return (
      <View style={{ marginBottom: Sizes.fixPadding }}>
        <MyText title={`Look’s Good`} textStyle={{ color: Colors.primaryTheme, fontSize: 20, textAlign: 'center', marginBottom: Sizes.fixHorizontalPadding }} />
        <MyText title={`We have sent you a verification code to (${resetEmail?.email}(${resetEmail?.code}))`} textStyle={{ color: Colors.black, fontSize: 16, textAlign: 'center', fontFamily: 'Poppins-Regular', paddingHorizontal: Sizes.fixPadding * 1.5, }} />
      </View>
    )
  }
  function resetOtpLogo() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: Sizes.fixPadding }}>
        <ResetOtp width={SCREEN_WIDTH * 0.7} height={SCREEN_HEIGHT * 0.25} />
      </View>
    )
  }
  function Header() {
    return (
      <View style={{ marginTop: 55 }}>
        <AuthHeader title={'Otp'} />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  resetEmail: state.authreducer.resetEmail,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ForgotOtp);


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: Sizes.fixPadding * 1.4
  },
  background: { flex: 1 },
  codeFieldRoot: { marginVertical: Sizes.fixPadding, alignSelf: 'center' },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 52,
    borderWidth: 1,
    borderRadius: Sizes.fixPadding * 0.4,
    borderColor: '#CCCCFF',
    textAlign: 'center',
    backgroundColor: Colors.white,
    fontSize: 16,
    marginRight: 5,
    marginHorizontal: 10,
    fontFamily: 'Poppins-Medium',
    color: Colors.black,
  },
  focusCell: {
    borderColor: Colors.primaryTheme,

  },
})