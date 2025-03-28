import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import CountryPicker, { Country } from "rn-country-picker";
import { Colors, Sizes } from "../../../assests/style";
import { useDispatch } from "react-redux";
import * as AuthActions from "../../../redux/actions/AuthActions"



const PhoneInput = ({ value, onChangeText }) => {
   const dispatch = useDispatch();

    const [state, setState] = useState({
        callingCode: '91',
        cca2: 'IN',
        errorMessage: '',
    });


    const updateState = data => {
        setState(prevState => {
            const newData = { ...prevState, ...data };
            return newData;
        });
    };

    const { callingCode, cca2, errorMessage } = state;


    return (
        <View style={styles.container}>

            <CountryPicker
                countryCode={callingCode}
                dropDownImageStyle={{ height: 0, width: 0 }}
                selectedCountryTextStyle={{ fontSize: 14, fontFamily: 'Poppins-Medium' }}
                countryFlagStyle={{
                    borderRadius: 2,
                    width: 30,
                    height: 20,
                    marginRight: 10,
                    resizeMode: 'contain',
                    borderWidth: 0,
                    borderRadius: 5
                }}
                withCallingCode={true}
                withFilter={true}
                withEmoji={true}
                containerButtonStyle={{ borderWidth: 0 }}
                onSelect={text => {
                  console.log(text,'countrycode');
                  updateState({ callingCode: text.callingCode, cca2: text.cca2 });
                  dispatch(AuthActions.countryCodeNew(callingCode));
                  
                }}
                selectedValue={text => {
                    
                    updateState({ callingCode: text.callingCode, cca2: text.cca2 })
                    

                }}
                pickerContainerStyle={{ borderWidth: 1, borderColor: '#CCCCFF', marginLeft: -1 }}
            />


            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                maxLength={14}

                placeholderTextColor="#8F93A0"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#E0E0E0",
        borderRadius: 8,
    
        backgroundColor: "#FFF",
        justifyContent: 'space-between'
    },


    input: {
        flex: 1,
        fontSize: 12.5,
        color: Colors.black,
        borderWidth: 1,
        padding: Sizes.fixPadding,
        borderRadius: 5,
        borderColor: '#CCCCFF',
        fontFamily: 'Poppins-Regular'
    },
});

export default PhoneInput;