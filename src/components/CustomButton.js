import React from 'react';
import {Text, TextInput, View, Animated, StyleSheet,TouchableOpacity} from 'react-native';
import { Colors, SCREEN_WIDTH } from '../assests/style';

const CustomButton = props => {
  return (
    <TouchableOpacity style={[styles.button,props.style]} onPress={props.onpress}
    activeOpacity={props.activeOpacity}>
      <Text style={[styles.text,props.textStyle]}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  button: {
    width: SCREEN_WIDTH * 0.88,
    borderRadius: 5,
    backgroundColor: Colors.primaryTheme,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily:'Poppins-Medium'
  },
});
