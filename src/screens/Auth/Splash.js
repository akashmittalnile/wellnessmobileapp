import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MyStatusBar from '../../components/StatusBar';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../assests/style';
import { resetToScreen } from '../../navigations/NavigationServices';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/CommonActions'

const Splash = ({dispatch}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
     dispatch(Actions.getSplash())
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <MyStatusBar 
        backgroundColor={Colors.primaryTheme} 
        barStyle='dark-content' 
      />
      <LinearGradient 
        colors={[Colors.primaryTheme, Colors.secondryTheme]} 
        style={styles.gradient}
      >
        {splashLogo()}
      </LinearGradient>
    </View>
  );
  function splashLogo() {
    return(
      <View style={{}}>
      <Image 
          source={require('../../assests/images/splashimage.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
           </View>
    )
  }
};
const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(null, mapDispatchToProps)(Splash)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  logo: {
    width: SCREEN_WIDTH * 0.5, 
    height: SCREEN_WIDTH * 0.3, 
  },
});
