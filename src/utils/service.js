import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform, ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";

export const showToastMessage = ({ message = '' }) => {
    console.log('taost check ',message)
    Toast.show({
        type: 'success',
        text1: message,
        position: 'top',
        visibilityTime:2000,
        autoHide: true,
    });

};
export const formatPhoneNumber = (text) => {
    const cleaned = text.replace(/\D+/g, "");
    let formatted = "";
  
    if (cleaned.length > 0) {
      formatted = `(${cleaned.slice(0, 3)}`;
    }
    if (cleaned.length > 3) {
      formatted += `) ${cleaned.slice(3, 6)}`;
    }
    if (cleaned.length > 6) {
      formatted += `-${cleaned.slice(6, 10)}`;
    }
  
    return formatted;
  };


export const getToken = async() => {
    const authToken1 = await AsyncStorage.getItem('token');
    const authToken = JSON.parse(authToken1)
    console.log('token',authToken);
    return authToken;
};