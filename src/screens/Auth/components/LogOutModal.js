import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style'
import Modal from 'react-native-modal'
import * as AuthActions from '../../../redux/actions/AuthActions';
import MyText from '../../../components/MyText'
import CustomButton from '../../../components/CustomButton'

const LogOutModal = ({ dispatch,logOutModal,logOutData}) => {
console.log(logOutModal,logOutData,'logout Modal')
  
    const onDismise = () => { 
        dispatch(AuthActions.onLogutModal(false))
    }
 const handlelogout = () => {
    const payload ={
        token: logOutData
    }
        dispatch(AuthActions.onLogoutAccount(payload))
        console.log('first')
 }
    return (
        <Modal isVisible={logOutModal} onBackdropPress={() => onDismise()}>
            <View style={styles.container}>
         <MyText title={'You seems to be logged in another device. Please click on below to logout from all devices. '} textStyle={{fontSize:15,textAlign:'center'}}/>
         <CustomButton name={'LogOut'} style={{width:SCREEN_WIDTH * 0.3,paddingVertical:Sizes.fixPadding * 0.6,marginTop:Sizes.fixHorizontalPadding}} onpress={() => handlelogout()}/>
                
            </View>
        </Modal>
    )
}

const mapStateToProps = state => ({
    logOutData: state.authreducer.logOutData,
    logOutModal: state.authreducer.logOutModal
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(LogOutModal)

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: '90%',
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding * 1.5,
        justifyContent: 'center',
        // paddingTop: Sizes.fixPadding * 2.5,
        // height:300,
    },
   
})