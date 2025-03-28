import { View, Text, Modal, Animated, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import * as CommonActions from '../redux/actions/CommonActions'
import { Colors, SCREEN_WIDTH } from '../assests/style';

const Loader = ({ isLoading, dispatch }) => {
    console.log(isLoading,'check loader')
    
    useEffect(() => {
        return () => {
            dispatch(CommonActions.setIsLoading(false))
        }
    }, [dispatch])
    return (
        <Modal
            visible={isLoading}
            transparent
        >

<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(28, 28, 28, 0.5)'}}>

<View style={{ backgroundColor: Colors.white,height:SCREEN_WIDTH * 0.2,width:SCREEN_WIDTH * 0.2,borderRadius:10,justifyContent:'center',alignItems:'center',elevation:5 }}>
 
    <ActivityIndicator size="large" color={Colors.primaryTheme} />
</View>
</View>

        </Modal>
    )
}

const mapStateToProps = state => ({
    isLoading: state.common.isLoading
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Loader)