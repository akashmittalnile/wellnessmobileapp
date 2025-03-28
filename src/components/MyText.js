import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../assests/style';

const MyText = ({ title, viewStyle, textStyle }) => {
  return (
    <View style={[styles.container, viewStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  },
  text: {
    fontSize: 18,
    color: Colors.black,
    fontFamily:'Poppins-Medium',
    
  },
});

export default MyText;
