import AsyncStorage from "@react-native-async-storage/async-storage";
import { PermissionsAndroid, Platform, ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";
import * as ImagePicker from 'react-native-image-picker';

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
// export const imagePicker = async ({ type }) => {
//   try {
//     const options = {
//       mediaType: 'photo',
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 0.5,
//       base64: false,
//     };

//     const cameraData = async () => {
//       try {
//         const response = await ImagePicker.launchCamera(options);
//         if (response.didCancel) {
//           console.log('user cancel');
//           return null;
//         } else if (response.errorCode) {
//           console.log(response.errorCode);
//           return null;
//         } else if (response.errorMessage) {
//           console.log(response.errorMessage);
//           return null;
//         } else {
//           return response.assets;
//         }
//       } catch (e) {
//         console.log(e)
//         return null
//       }

//     }

//     if (type == 'capture') {
//       const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
//       if (result) {
//         return cameraData()
//       } else {
//         const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
//         if (result === PermissionsAndroid.RESULTS.GRANTED) {
//           return cameraData()
//         }
//       }

//     } else {
//       const response = await ImagePicker.launchImageLibrary(options);
//       if (response.didCancel) {
//         console.log('user cancel');
//         return null;
//       } else if (response.errorCode) {
//         console.log(response.errorCode);
//         return null;
//       } else if (response.errorMessage) {
//         console.log(response.errorMessage);
//         return null;
//       } else {
//         return response.assets;
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };
export const imagePicker = async ({ type, multiple = false }) => {
  try {
    const options = {
      mediaType: 'photo',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: false,
      selectionLimit: multiple ? 0 : 1,
    };

    // Function to launch the camera
    const cameraData = async () => {
      try {
        const response = await ImagePicker.launchCamera(options);
        if (response.didCancel) {
          console.log('User cancelled image selection.');
          return null;
        } else if (response.errorCode || response.errorMessage) {
          console.log(response.errorCode || response.errorMessage);
          return null;
        } else {
          return response.assets;
        }
      } catch (error) {
        console.log('Camera error:', error);
        return null;
      }
    };

    // Handle capture case (camera)
    if (type === 'capture') {
      if (Platform.OS === 'android') {
        // Android: Request camera permission
        const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (result === PermissionsAndroid.RESULTS.GRANTED) {
          return cameraData();
        } else {
          console.log('Camera permission denied.');
          return null;
        }
      } else if (Platform.OS === 'ios') {
        try {
          // iOS: Check if permissions are granted before launching camera
          const permission = await navigator.mediaDevices.getUserMedia({ video: true });
          if (permission) {
            return cameraData();
          }
        } catch (error) {
          console.log('iOS Camera permission denied:', error);
          return null;
        }
      }
    } else {
      // Handle gallery selection
      const response = await ImagePicker.launchImageLibrary(options);
      if (response.didCancel) {
        console.log('User cancelled image selection.');
        return null;
      } else if (response.errorCode || response.errorMessage) {
        console.log(response.errorCode || response.errorMessage);
        return null;
      } else {
        return response.assets;
      }
    }
  } catch (error) {
    console.log('Image Picker error:', error);
    return null;
  }
};