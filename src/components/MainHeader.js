import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ArrowLeftWhite from '../assests/Svg/arrow-left-white.svg'
import { useNavigation } from '@react-navigation/native'
import { Colors, SCREEN_WIDTH, Sizes } from '../assests/style'
import { goBack } from '../navigations/NavigationServices'

const MainHeader = ({title}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
       <TouchableOpacity onPress={() => goBack()}>
                   <ArrowLeftWhite/>
               </TouchableOpacity>
       <Text style={styles.txt}>{title}</Text>
    <View>

    </View>
    </View>
  )
}

export default MainHeader

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
    txt:{
        fontSize:16,
        fontFamily:'Poppins-Medium',
        color:Colors.white
    }
})