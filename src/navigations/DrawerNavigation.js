import { View, Text, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';



import { connect } from 'react-redux';
import { Colors, SCREEN_WIDTH, Sizes } from '../assests/style';
import BottomTabNavigation from './BottomTabNavigation';
import MyText from '../components/MyText';
import FastImage from 'react-native-fast-image';
import CustomButton from '../components/CustomButton';
import HomeDrawer from '../assests/Svg/Drawer/homeDrawerLogo.svg'
import RecordsJournalsLogo from '../assests/Svg/Drawer/records-journal.svg'
import ManageSubscriptionLogo from '../assests/Svg/Drawer/manage-sub.svg'
import ContactUsLogo from '../assests/Svg/Drawer/headphone.svg'
import TermsCondition from '../assests/Svg/Drawer/termscondition.svg'
import PrivacyLogo from '../assests/Svg/Drawer/privacy.svg'
import LogOutLogo from '../assests/Svg/Drawer/logout.svg'
import Facebook from '../assests/Svg/Drawer/Facebook.svg'
import Instagram from '../assests/Svg/Drawer/Instagram.svg'
import Youtube from '../assests/Svg/Drawer/YouTube.svg'
import StarDrawer from '../assests/Svg/Drawer/starDrawer.svg'
import { navigate } from './NavigationServices';
import * as Actions from '../redux/actions/CommonActions'



const Drawer = createDrawerNavigator();

const MyDrawer = ({ drawerProps, customerData ,dispatch}) => {

  return (
    <DrawerContentScrollView
      {...drawerProps}
      showsVerticalScrollIndicator={false}
      style={{ top: -10, backgroundColor: Colors.white }}>
      {DrawerLogo()}
      {userInfo()}
      {DrawerItemsData()}
      {socialData()}
    </DrawerContentScrollView>
  );
  function socialData() {
    return (
      <View style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: Sizes.fixPadding * 2,
        paddingHorizontal: Sizes.fixPadding
      }}>
        <Text
          style={{
            fontSize: 14,
            color: Colors.textBlue,
            fontFamily: 'Poppins-Medium'
          }}
        >
          Follow Us!
        </Text>
        <View style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}>
          <TouchableOpacity >
            <Facebook />
          </TouchableOpacity>
          <TouchableOpacity >
            <Youtube />
          </TouchableOpacity>
          <TouchableOpacity >
            <Instagram />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  function DrawerItemsData() {
    const handleLogOut = () => {
      dispatch(Actions.logOutAccount())
    }
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding  }}
          onPress={() => navigate('homeTab')}
        >
          <HomeDrawer height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Home'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding }}>
          <RecordsJournalsLogo height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Records Journal'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding * 0.7 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding }}>
          <ManageSubscriptionLogo height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Manage Subscription'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding * 0.7 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding }}
        onPress={() => navigate('contactUs')}
        >
          <ContactUsLogo height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Contact Us'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding * 0.7 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding }}
        onPress={() => navigate('termscondition')}
        >
          <TermsCondition height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Terms & Conditions'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding * 0.7 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding }}
        onPress={() => navigate('rateUs')}
        >
          <StarDrawer height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Rate Us'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding * 0.7 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding }}>
          <PrivacyLogo height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Privacy Policy'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding * 0.7 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: Sizes.fixPadding * 0.7, marginBottom: Sizes.fixPadding }}
        onPress={() => handleLogOut()}
        >
          <LogOutLogo height={SCREEN_WIDTH * 0.05} width={SCREEN_WIDTH * 0.05} />
          <MyText title={'Log Out'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginLeft: Sizes.fixHorizontalPadding * 0.7 }} />
        </TouchableOpacity>
      </View>
    )
  }
  function userInfo() {

    return (
      <View style={{
        backgroundColor: Colors.white,
        borderRadius: Sizes.fixHorizontalPadding,
        // borderWidth:1,
        borderColor: Colors.linecolor,
        paddingVertical: Sizes.fixPadding * 2,
        paddingHorizontal: Sizes.fixHorizontalPadding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FastImage
            style={{
              width: SCREEN_WIDTH * 0.1,
              height: SCREEN_WIDTH * 0.1,
              borderRadius: 100,
            }}
            source={{
              uri: customerData?.profile_photo,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: Sizes.fixHorizontalPadding, width: SCREEN_WIDTH * 0.3 }}>
            <MyText title={customerData?.fullname} textStyle={{ fontSize: 14 }} />
            <MyText title={customerData?.email} textStyle={{ fontSize: 12, marginTop: 2, fontFamily: 'Poppins-Regular' }} />
          </View>

        </View>
        <CustomButton name={'View Profile'} style={{ backgroundColor: Colors.primaryTheme, width: SCREEN_WIDTH * 0.2, padding: Sizes.fixHorizontalPadding }} activeOpacity={1}
          textStyle={{ fontSize: 12 }}
          onpress={() => navigate('profileTab')}
        />

      </View>
    )
  }
  function DrawerLogo() {
    return (
      <View style={{ alignSelf: 'center' }}>
        <Image
          source={require('../assests/images/splashimage.png')}
          style={{ height: SCREEN_WIDTH * 0.33, width: SCREEN_WIDTH * 0.33 }}
          resizeMode="cover"
        />
      </View>
    )
  }

};

const DrawerNavigation = ({ customerData,dispatch }) => {
  return (

    <Drawer.Navigator
      drawerContent={props => <MyDrawer drawerProps={props} customerData={customerData} dispatch={dispatch} />}
      screenOptions={{ headerShown: false, drawerStyle: { width: SCREEN_WIDTH * 0.8 } }}>
      <Drawer.Screen name="drawer" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};

const mapStateToProps = state => ({
  customerData: state.common.customerData,
})
const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigation);
