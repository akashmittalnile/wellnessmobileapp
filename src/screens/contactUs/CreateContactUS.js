import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyTextinput from '../../components/MyTextinput'
import EmailLogo from '../../assests/Svg/email.svg'
import USerLogo from '../../assests/Svg/Userlogo.svg'
import { connect } from 'react-redux'
import PhoneInput from '../Auth/components/PhoneInput'
import { formatPhoneNumber } from '../../utils/service'
import MyText from '../../components/MyText'
import CustomButton from '../../components/CustomButton'
import Modal from 'react-native-modal';
import ResetPassModalLogo from '../../assests/Svg/resetpassmodal.svg'
import Toast from 'react-native-toast-message'

const CreateContactUS = ({ customerData }) => {
    const [name, setName] = useState(customerData?.fullname ?? '')
    const [email, setEmail] = useState(customerData?.email ?? '')
    const [phone, setPhone] = useState(customerData?.phone ?? '')
    const [selectedId, setSelectedId] = useState(null);
    const [passModal,setPassModal] = useState(false)
    return (
        <ImageBackground
            source={require('../../assests/images/signinbackground.png')}
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
                {inquiryTitle()}
                {inquiryDataShow()}
                {textInfo()}
                {submitBtn()}
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
          <MyText title={`Thank You For Submitting Your Inquiry! 🌟`} textStyle={{ color: Colors.primaryTheme, fontSize: 24, textAlign: 'center', marginVertical: Sizes.fixHorizontalPadding }} />
          <MyText title={`Your Question Has Been Successfully Received. Our Team Is Diligently Working To Provide You With A Detailed And Helpful Response.`} textStyle={{ color: Colors.textBlue, fontSize: 16, textAlign: 'center', marginVertical: Sizes.fixHorizontalPadding * 0.1,fontFamily:'Poppins-Regular' }} />
          <MyText title={`Please Note That We Aim To Address All 
Inquiries Within The Next 24-48 Hours. Your Patience Is Appreciated As We Strive To Ensure The Best Possible Support For Our Valued Users.`} textStyle={{ color: Colors.textBlue, fontSize: 16, textAlign: 'center', marginVertical: Sizes.fixHorizontalPadding * 0.1,fontFamily:'Poppins-Regular' }} viewStyle={{paddingHorizontal:Sizes.fixHorizontalPadding,marginVertical:Sizes.fixHorizontalPadding}} />
          <CustomButton name={'Close'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.8, marginTop: Sizes.fixHorizontalPadding * 2,marginBottom:Sizes.fixPadding * 2 }} activeOpacity={0.6} onpress={() => {setPassModal(false)}} />
            </View>
    <Toast/>
          </Modal>
          </View>
        )
      }
    function submitBtn() {
        return(
            <CustomButton name={'Submit'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9,marginTop:Sizes.fixPadding }} activeOpacity={0.6} onpress={() => setPassModal(true)}/>
        )
    }
    function textInfo() {
        return(
            <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Type Your Message Here..."
              placeholderTextColor="#8F93A0"
              multiline
            />
          </View>
        )
    }
    function inquiryDataShow() {
        const options = [
            { id: "1", title: "Plans Related" },
            { id: "2", title: "Billing Related" },
            { id: "3", title: "General Inquiry" },
          ];
        return(
            <View style={styles.container}>
            <FlatList
              data={options}
              horizontal
              keyExtractor={(item) => item?.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.list}
              renderItem={({ item }) => {
                const isSelected = item?.id === selectedId;
                return (
                  <TouchableOpacity
                    style={[styles.item, isSelected && styles.selectedItem]}
                    onPress={() => setSelectedId(item?.id)}
                  >
                    <Text style={[styles.text, isSelected && styles.selectedText]}>
                      {item?.title}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )
    }
    function inquiryTitle() {
        return(
            <MyText title={'Select Inquiry Type'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{marginVertical:Sizes.fixHorizontalPadding}} />
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
    function Header() {
        return (
            <View style={{}}>
                <MainHeader title={'Contact Us'} />
            </View>
        )
    }
}
const mapStateToProps = state => ({
    customerData: state.common.customerData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CreateContactUS);

const styles = StyleSheet.create({
    background: { flex: 1 },
    scrollContainer: {
        flexGrow: 1,
        padding: Sizes.fixPadding
    },
    container: {
        paddingVertical: Sizes.fixHorizontalPadding,
      },
      list: {
        flexDirection: "row",
        alignItems: "center",
      },
      item: {
        paddingVertical: Sizes.fixHorizontalPadding * 1.4,
        paddingHorizontal: Sizes.fixPadding,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.linecolor,
        marginHorizontal: Sizes.fixHorizontalPadding * 0.5,
        backgroundColor: Colors.white,
      },
      selectedItem: {
        backgroundColor:Colors.primaryTheme,
        borderWidth:0
        // borderColor: "#4A90E2",
      },
      text: {
        color: Colors.textBlue,
        fontSize: 13,
        fontFamily:'Poppins-Regular'
      },
      selectedText: {
        color: Colors.white,
          fontSize: 13,
        fontFamily:'Poppins-Regular'
      },
      containerInput: {
       
        marginVertical: Sizes.fixHorizontalPadding,
        // borderWidth:1,
      },
      input: {
        width: "100%",
        height: SCREEN_WIDTH * 0.35,
        borderWidth: 1,
        borderColor: '#CCCCFF',
        borderRadius: 10,
        padding: Sizes.fixHorizontalPadding,
        backgroundColor: Colors.white,
        fontSize: 12,
        fontFamily:'Poppins-Regular'
      },
})