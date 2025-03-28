import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../../assests/style'
import ProgressCircle from '../../../../components/ProgressCircle'

const EmotionalItem = ({item}) => {
  return (
    <View style={styles.card}>
        <ProgressCircle percentage={item?.percentage} radius={50} strokeWidth={10} width={44} height={44} circleColor={Colors.primaryTheme} backgroundColor={Colors.grayA} textColor={Colors.primaryTheme} />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}> 
        <Text style={styles.emoji}>{item.emoji}</Text>
        <Text style={styles.label}>{item.label}</Text>
        </View>
   
  </View>
  )
}

export default EmotionalItem

const styles = StyleSheet.create({
    card: {
        width: SCREEN_WIDTH * 0.23,
        aspectRatio: 1, // Square shape
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixHorizontalPadding * 0.5,

        borderColor:Colors.linecolor,
        borderWidth:1
      },
      emoji: {
        fontSize: 18,
       
      },
      label: {
        fontSize: 14,
        fontWeight: 'Poppins-Medium',
        color: Colors.textBlue,
        marginLeft:4
      },
})