import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style'
import DrawerIcon from '../../../assests/Svg/drawerIcon.svg'
import NotificationIcon from '../../../assests/Svg/notification.svg'
import { useNavigation } from '@react-navigation/native'
import { navigate } from '../../../navigations/NavigationServices'
const HomeHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
        <TouchableOpacity  onPress={() => navigation.openDrawer()}>
     <DrawerIcon height={SCREEN_WIDTH * 0.057} width={SCREEN_WIDTH * 0.057}/>
        </TouchableOpacity>
        <Image 
                source={require('../../../assests/images/splashimage.png')} 
                style={styles.logo} 
                resizeMode="contain" 
              />
      <TouchableOpacity onPress={() => navigate('notification')}>
        <NotificationIcon height={SCREEN_WIDTH * 0.057} width={SCREEN_WIDTH * 0.057}/>
        </TouchableOpacity>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    maincontainer:{
        flex:0,
        backgroundColor:Colors.primaryTheme,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:Sizes.fixPadding,
        height:SCREEN_WIDTH * 0.14
    },
    logo: {
        width: SCREEN_WIDTH * 0.12, 
        height: SCREEN_WIDTH * 0.12, 
      },
})