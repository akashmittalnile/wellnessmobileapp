import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Sizes } from '../assests/style';

const MyTextinput = ({ value, placeholder, secureTextEntry: initialSecureTextEntry, SvgIcon, inputStyle, maininputStyle, keyboardType, onChangeText, SvgIcon2, SvgIcon3,editable }) => {
  const [secureText, setSecureText] = useState(initialSecureTextEntry);
  return (
    <View style={[styles.inputContainer, maininputStyle]}>
      {SvgIcon && <SvgIcon width={20} height={20} style={styles.iconStyle} />}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#8F93A0'}
        secureTextEntry={secureText}
        style={[styles.textInput, inputStyle]}
        keyboardType={keyboardType}
        editable={editable}
      />
      
      {SvgIcon2 && SvgIcon3 && (
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          {secureText ? (
            <SvgIcon2 width={20} height={20} style={styles.iconStyle} />
          ) : (
            <SvgIcon3 width={20} height={20} style={styles.iconStyle} />
          )}
        </TouchableOpacity>
      )}

    </View>
  );
};

export default MyTextinput

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCCCFF",
    borderRadius: 5,
    padding: Sizes.fixPadding * 0.9,
    marginVertical: Sizes.fixHorizontalPadding * 0.9,
    backgroundColor: Colors.white
  },
  iconStyle: { marginRight: 10 },
  textInput: { flex: 1,
    fontSize: 13,
    fontFamily:'Poppins-Regular'
   },
})