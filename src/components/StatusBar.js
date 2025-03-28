import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyStatusBar = ({ backgroundColor, barStyle = 'light-content', translucent = false }) => {
    return (
        <>
            {Platform.OS === 'ios' && !translucent ? (
                <View style={{ backgroundColor, height: 60  }} />
            ) : null}
            
            <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} translucent={translucent} />
        </>
    );
};

export default MyStatusBar;
