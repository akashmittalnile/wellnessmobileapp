import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthHeader from '../../Auth/components/AuthHeader'
import MyStatusBar from '../../../components/StatusBar'
import { Colors, getFontSize, SCREEN_WIDTH, Sizes } from '../../../assests/style'
import MainHeader from '../../../components/MainHeader'
import MyTextinput from '../../../components/MyTextinput'
import EmailLogo from '../../../assests/Svg/email.svg'
import USerLogo from '../../../assests/Svg/Userlogo.svg'
import { connect } from 'react-redux'
import PhoneInput from '../../Auth/components/PhoneInput'
import { formatPhoneNumber, imagePicker } from '../../../utils/service'
import MyText from '../../../components/MyText'
import CustomButton from '../../../components/CustomButton'
import { navigate } from '../../../navigations/NavigationServices'
import Modal from 'react-native-modal';
import RNFetchBlob from 'rn-fetch-blob'
import * as AuthActions from '../../../redux/actions/AuthActions';

const EditProfiles = ({dispatch,customerData}) => {
      const [name, setName] = useState(customerData?.fullname ?? '' )
      const [email, setEmail] = useState(customerData?.email ?? '')
      const [phone, setPhone] = useState(customerData?.phone ?? '')
        //  const [passModal,setPassModal] = useState(false)
         const [imageData,setImageData] = useState('')
         console.log(imageData,'check edit Data')

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
        {/* {imageSelectModal()} */}
    </ImageBackground>
  )
  // function imageSelectModal() {
  //   const onPicker = async type => {
  //     const response = await imagePicker({ type });
  //    setPassModal(false)
  //     if (response) {
  //         // updateState({ imageData: response[0] });
  //         setImageData(response[0])
  //     }
  // };
  //   return(
  //       <View>
  //       <Modal isVisible={passModal} onBackdropPress={() => setPassModal(false) }
  //       style={{ justifyContent: 'flex-end', margin: 0 }}
  //     >
  //       <View style={{backgroundColor:'white',borderTopLeftRadius:Sizes.fixPadding,borderTopRightRadius:Sizes.fixPadding,padding:Sizes.fixPadding * 2,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
  //       <TouchableOpacity
  //                       activeOpacity={0.8}
  //                       onPress={() => onPicker('gallary')}
  //                       style={{
  //                           width: '40%',
  //                           marginBottom: Sizes.fixPadding,
  //                           padding: Sizes.fixHorizontalPadding * 1.5,
  //                           backgroundColor: '#CFECE1',
  //                           borderRadius: Sizes.fixHorizontalPadding * 0.5,
  //                           justifyContent: 'center',
  //                           alignItems: 'center',
  //                       }}>
  //                       <Image source={require('../../../assests/images/galleryCamera/gallery.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
  //                   </TouchableOpacity>
  //                   {/* <TouchableOpacity
  //                       activeOpacity={0.8}
  //                       onPress={() => onPicker('capture')}
  //                       style={{
  //                           width: '40%',
  //                           marginBottom: Sizes.fixPadding,
  //                           padding: Sizes.fixHorizontalPadding * 1.5,
  //                           backgroundColor: '#CFECE1',
  //                           borderRadius: Sizes.fixHorizontalPadding * 0.5,
  //                           justifyContent: 'center',
  //                           alignItems: 'center',
  //                       }}>
  //                       <Image source={require('../../../assests/images/galleryCamera/gallery.png')} style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: Colors.primaryTheme }} />
  //                   </TouchableOpacity>
  //   */}
  //       </View>
  //     </Modal>
  //     </View>
  //   )
  // }
  function ChangePasswordButton() {
    return(
        <CustomButton name={'Change Password'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.green, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding }} activeOpacity={0.6} 
        onpress={() => navigate('changePasswordScreen')}
        />
    )
  }
  function SaveButton() {
    const updateProfile = () => {
       const payload = [
                { name: 'fullname', data: name },
                { name: 'phone', data: phone },
              ];
              if (imageData?.uri) {
                payload.push({
                  name: 'profile_photo',
                  filename: imageData.fileName || 'profile.jpg',
                  type: imageData.type || 'image/jpeg',
                  data: RNFetchBlob.wrap(imageData.uri.replace('file://', '')),
                });
              } 
              dispatch(AuthActions.updateProfileData(payload));
    }
    return(
        <CustomButton name={'Save'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9, marginTop: Sizes.fixHorizontalPadding * 4 }} activeOpacity={0.6} onpress={() => updateProfile()}/>
    )
  }
  function chooseImageData() {
    const onPicker = async type => {
      const response = await imagePicker({ type });
    
      if (response) {
         
          setImageData(response[0])
      }
  };
    return(
        <View style={{borderWidth:1,padding:Sizes.fixHorizontalPadding,borderStyle:'dashed',borderRadius:10,borderColor:Colors.textBlue,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'#C4CBFF',flexDirection:'row',alignItems:'center',justifyContent:'center',padding:Sizes.fixHorizontalPadding ,borderRadius:10,paddingHorizontal:Sizes.fixPadding}}
             onPress={() => onPicker('gallary')}
            >
                <Image source={require('../../../assests/images/galleryCamera/gallery.png')} />

                <MyText title={'Choose File'} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:3}}/>
            </TouchableOpacity>
            {
              imageData?.uri ? ( 
              <View style={{height: SCREEN_WIDTH * 0.15, width: SCREEN_WIDTH * 0.15,borderRadius:100,overflow:'hidden',borderWidth:1,borderColor:Colors.primaryTheme,marginLeft:10}}>
                <Image source={{ uri: imageData?.uri }} style={{ height: SCREEN_WIDTH * 0.15, width: SCREEN_WIDTH * 0.15 }} />
                </View>) : (  <MyText title={'No File Chosen'} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:10}}/>)
                
            }
          
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
        <MyTextinput placeholder="Email Address" SvgIcon={EmailLogo} value={email} onChangeText={(txt) => setEmail(txt)} editable={false} inputStyle={{color:'#00000040'}} maininputStyle={{borderColor:'#00000020'}}/>
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