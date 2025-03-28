import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ArrowLeft from '../../../assests/Svg/arrow-left.svg'
import { Colors, Sizes } from '../../../assests/style'
import { goBack } from '../../../navigations/NavigationServices'

const AuthHeader = ({title}) => {
  return (
    <View style={{flex:0,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:Sizes.fixPadding,paddingVertical:Sizes.fixPadding}}>
        <TouchableOpacity onPress={() => goBack()}>
            <ArrowLeft/>
        </TouchableOpacity>
      <Text style={{color:Colors.black,fontSize:18,fontFamily:'Poppins-Regular'}}>{title}</Text>
      <Text></Text>
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({})