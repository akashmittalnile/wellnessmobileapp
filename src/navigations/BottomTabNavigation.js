import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { connect } from 'react-redux';
import Home from '../screens/home/Home';
import { Colors, SCREEN_WIDTH, Sizes } from '../assests/style';
import MyStatusBar from '../components/StatusBar';
import Journals from '../screens/home/BottomTabsScreen/Journals';
import Tests from '../screens/home/BottomTabsScreen/Tests';
import Groups from '../screens/home/BottomTabsScreen/Groups';
import Profile from '../screens/home/BottomTabsScreen/Profile';

const Tab = createBottomTabNavigator();

const MyBottonTab = ({ state, navigation, descriptors }) => {
    const selectIcon = (routeName) => {
        switch (routeName) {
            case 'homeTab':
                return require('../assests/images/bottomTab/home.png');
            case 'jornalsTab':
                return require('../assests/images/bottomTab/journalsImage.png');
            case 'testTab':
                return require('../assests/images/bottomTab/testImage.png');
            case 'groupTab':
                return require('../assests/images/bottomTab/groupImage.png');
                case 'profileTab':
                return require('../assests/images/bottomTab/profileImage.png');
            default:
                return require('../assests/images/bottomTab/home.png');
        }
    };
  
    return (
        <View style={{ height: 70, backgroundColor: Colors.white, position: 'absolute', bottom: 0, right: 0, left: 0 }}>
            <View
                style={{
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    top: 0,
                    bottom: 0,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingBottom:Sizes.fixPadding * 1.2

                }}>
                {
                    state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label = options.tabBarLabel ? options.tabBarLabel : route.name;
                        return (
                            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => navigation.navigate(route.name)}>
                              
                                    <View style={styles.itemContainer}>
                                        <Image source={selectIcon(route.name)} style={[styles.icon, { tintColor: state.index == index ? Colors.primaryTheme : Colors.black }]} />
                                        <Text style={{ fontSize:12, fontFamily:'Poppins-Medium',color: state.index == index ? Colors.primaryTheme : Colors.black }}>{label}</Text>
                                    </View>
                           

                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const BottomTabNavigation = () => {
  
    return (
        <View style={{ flex: 1 }}>
          <MyStatusBar backgroundColor={Colors.primaryTheme} barStyle='light-content' />
            <Tab.Navigator
                tabBar={props => <MyBottonTab {...props} />}
                screenOptions={{ headerShown: false, }}
                backBehavior='history'
            >
                <Tab.Screen name='homeTab' component={Home} options={{ tabBarLabel: 'Home' }} />
                <Tab.Screen name='jornalsTab' component={Journals} options={{ tabBarLabel: 'Journals' }} />
                <Tab.Screen name='testTab' component={Tests} options={{ tabBarLabel: 'Tests' }}/>
                <Tab.Screen name='groupTab' component={Groups} options={{ tabBarLabel: 'Group' }} />
                <Tab.Screen name='profileTab' component={Profile} options={{ tabBarLabel: 'Profile' }} />
            </Tab.Navigator>
        </View>

    )
}

const mapStateToProps = state => ({
    isLoading: state.common.isLoading,
})

export default connect(mapStateToProps, null)(BottomTabNavigation)

const styles = StyleSheet.create({
    itemContainer: {
        width: SCREEN_WIDTH * 0.15,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
   
    },
    icon: {
        width: '45%',
        height: '45%',
        resizeMode: 'contain'
    }
})