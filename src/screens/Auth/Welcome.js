import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MyText from '../../components/MyText'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton'
import GoogleAppleButton from './components/GoogleAppleButton'
import GoogleLogo from '../../assests/Svg/googlelogo.svg'
import AppleLogo from '../../assests/Svg/AppleIcon.svg'
import { navigate, resetToScreen } from '../../navigations/NavigationServices'

const Welcome = () => {
  return (
    <ImageBackground
      source={require("../../assests/images/Welcomeimage.png")}
      style={styles.background}
    >
      <LinearGradient

        colors={["#08D75F31", "#4285F448"]}
        locations={[0.31, 0.78]}
        style={styles.overlay}
      />
      <View style={styles.container}>
        {WelcomeImage()}
        {WelcomeText()}
        {signInButton()}
        {/* {linecross()} */}
        {/* {googleApplebtn()} */}

      </View>
    </ImageBackground>
  )
  function googleApplebtn() {
    return (
      <View>
        <GoogleAppleButton
          text="Sign in with Google"
          SvgIcon={GoogleLogo}
        />
        <GoogleAppleButton
          text="Continue with Apple"
          SvgIcon={AppleLogo}
          buttonStyle={{ marginTop: Sizes.fixHorizontalPadding * 1.2 }}
        />
      </View>
    )
  }
  function linecross() {
    return (
      <View style={{ borderWidth: 0.4, width: SCREEN_WIDTH * 0.87, backgroundColor: Colors.black, marginBottom: Sizes.fixPadding * 2 }}>

      </View>
    )
  }
  function signInButton() {
    const handleSignin = () => {
      // resetToScreen('signin')
      navigate('signin')
    }
    const handleSignup = () => {
      // resetToScreen('signup')
      navigate('signup')
    }
    return (
      <View style={{ marginVertical: Sizes.fixPadding * 2 }}>
        <CustomButton name={'Sign In'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.green, paddingVertical: Sizes.fixPadding * 0.9 }} activeOpacity={0.6} onpress={handleSignin} />
        <CustomButton name={'Sign Up'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9 , marginTop: Sizes.fixHorizontalPadding * 1.2 }} activeOpacity={0.6} onpress={handleSignup} />
      </View>
    )
  }
  function WelcomeText() {
    return (
      <View>
        <MyText title={'Welcome'} textStyle={{ color: Colors.white, fontSize: 24, textAlign: 'center', marginBottom: Sizes.fixHorizontalPadding }} />
        <MyText title={'Live as if you were to die tomorrow. Learn as if you were to live forever.'} textStyle={{ color: Colors.white, fontSize: 14, textAlign: 'center' }} />
      </View>
    )
  }
  function WelcomeImage() {
    return (
      <Image source={require("../../assests/images/splashimage.png")} style={styles.logo} />
    )
  }
}

export default Welcome

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding

  },
  logo: {
    width: SCREEN_WIDTH * 0.32,
    height: SCREEN_WIDTH * 0.32,
    marginBottom: Sizes.fixPadding * 2,
  },

})