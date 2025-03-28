import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style';

const GoogleAppleButton = ({ text, onPress, SvgIcon, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      {SvgIcon && <SvgIcon width={20} height={20} />}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: Colors.white,
    paddingVertical: Sizes.fixPadding * 0.9,
    paddingHorizontal: Sizes.fixPadding,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width:SCREEN_WIDTH * 0.89
  },
  text: {
    marginLeft: Sizes.fixHorizontalPadding,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.black,
  },
});

export default GoogleAppleButton;