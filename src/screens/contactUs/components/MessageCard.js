import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style';
import MyText from '../../../components/MyText';
import ArrowDown from '../../../assests/Svg/arrow-down'
import ArrowUp from '../../../assests/Svg/arrow-up'
import CustomButton from '../../../components/CustomButton';

const MessageCard = ({item}) => {
    const [expanded, setExpanded] = useState(false);
    console.log(expanded,'check')

    const toggleExpand = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    };
  return (
    <View style={{marginBottom:Sizes.fixHorizontalPadding}}>
        <View style={styles.container1}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MyText title={'Status: '} textStyle={{ fontSize: 14, color: '#112544' }}  />
            <MyText title={item?.status} textStyle={{ fontSize: 14, color: item?.status === 'Completed' ? Colors.green : '#112544', }} viewStyle={{marginLeft:5}} />
            </View>
            {expanded ? (<TouchableOpacity onPress={() => toggleExpand()}>
                <ArrowDown/>
            </TouchableOpacity>) :(<TouchableOpacity onPress={() => toggleExpand()}>
                <ArrowUp/>
            </TouchableOpacity>)}
        </View>
        {expanded ?   (<View style={{
            padding:Sizes.fixHorizontalPadding,
            borderWidth:1,
            borderColor:Colors.linecolor,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10
        }}>
            <View style={{borderWidth:1,borderColor:Colors.linecolor,borderRadius:10}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:Sizes.fixHorizontalPadding}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{height:SCREEN_WIDTH * 0.12,width:SCREEN_WIDTH * 0.12,borderRadius:100,backgroundColor:'#E9EDFF',justifyContent:'center',alignItems:'center'}}>
                        <MyText title={item?.user?.charAt(0)} textStyle={{ fontSize: 24, color: Colors.primaryTheme }}  />
                        </View>
                        <MyText title={item?.user} textStyle={{ fontSize: 16, color: Colors.textBlue }} viewStyle={{marginLeft:Sizes.fixHorizontalPadding}} />
                    </View>
                    <CustomButton name={item?.userType} textStyle={{ fontSize: 14, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.6,width:SCREEN_WIDTH * 0.3 }} activeOpacity={0.6} />
                </View>
                <MyText title={item?.message} textStyle={{ fontSize: 16, color: '#112544',fontFamily:'Poppins-Regular' }} viewStyle={{padding:Sizes.fixHorizontalPadding}} />
                <MyText title={item?.timestamp} textStyle={{ fontSize: 14, color:Colors.primaryTheme,fontFamily:'Poppins-Regular' }} viewStyle={{paddingHorizontal:Sizes.fixHorizontalPadding,paddingBottom:5}} />


            </View>
            {item?.responseUser === null ? null : (<View style={{borderWidth:1,borderColor:Colors.linecolor,borderRadius:10,marginTop:Sizes.fixHorizontalPadding}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:Sizes.fixHorizontalPadding}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{height:SCREEN_WIDTH * 0.12,width:SCREEN_WIDTH * 0.12,borderRadius:100,backgroundColor:'#E9EDFF',justifyContent:'center',alignItems:'center'}}>
                        <MyText title={item?.responseUser?.charAt(0)} textStyle={{ fontSize: 24, color: Colors.primaryTheme }}  />
                        </View>
                        <MyText title={item?.responseUser} textStyle={{ fontSize: 16, color: Colors.textBlue }} viewStyle={{marginLeft:Sizes.fixHorizontalPadding}} />
                    </View>
                   
                </View>
                <MyText title={item?.message} textStyle={{ fontSize: 16, color: '#112544',fontFamily:'Poppins-Regular' }} viewStyle={{padding:Sizes.fixHorizontalPadding}} />
                <MyText title={item?.responseTime} textStyle={{ fontSize: 14, color:Colors.primaryTheme,fontFamily:'Poppins-Regular' }} viewStyle={{paddingHorizontal:Sizes.fixHorizontalPadding,paddingBottom:5}} />


            </View>)}
            

        </View> ): null}
      
    </View>
  )
}

export default MessageCard

const styles = StyleSheet.create({
    container1:{
        borderWidth:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderColor:Colors.linecolor,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:Sizes.fixHorizontalPadding
    }
})