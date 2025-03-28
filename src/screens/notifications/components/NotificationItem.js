import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style';
import CustomButton from '../../../components/CustomButton';

const NotificationItem = memo(({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imagebox}>
        <Image source={require('../../../assests/images/notificationImage/upgradeplan.png')} style={styles.icon} resizeMode="contain" />
        </View>
        <View style={styles.content}>
            {item?.badge ? ( <CustomButton name={item?.badge} textStyle={{ fontSize: 12, fontFamily: 'Poppins-Regular' }} style={{ backgroundColor: Colors.green, paddingVertical: Sizes.fixPadding * 0.3,width:SCREEN_WIDTH * 0.2,alignSelf:'flex-start',marginBottom:4 }} activeOpacity={0.6} />) : null }
       
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.time}>{item?.time}</Text>
        </View>
      </View>
    );
  });

export default NotificationItem

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primaryTheme,
        backgroundColor: Colors.white,
        marginBottom:Sizes.fixHorizontalPadding
      },
      icon: {
        width: SCREEN_WIDTH * 0.06,
        height: SCREEN_WIDTH * 0.06,
      },
      content: {
        flex: 1,
        marginLeft: Sizes.fixHorizontalPadding * 1.3,
      },
      title: {
        fontSize: 14,
        fontFamily:'Poppins-Regular',
        color:Colors.textBlue
      },
      time: {
        fontSize: 12,
        fontFamily:'Poppins-Regular',
        color: "#CCD2E3",
      },
      imagebox:{
        height:SCREEN_WIDTH * 0.12,
        width:SCREEN_WIDTH * 0.12,
        backgroundColor:Colors.lightblue,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
      }    
})