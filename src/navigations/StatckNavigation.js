import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Auth/Splash';
import Welcome from '../screens/Auth/Welcome';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import ForgotEmail from '../screens/Auth/ForgotEmail';
import ForgotOtp from '../screens/Auth/ForgotOtp';
import ResetPassword from '../screens/Auth/ResetPassword';
import SubscriptonPlan from '../screens/Subscription/SubscriptonPlan';
import DrawerNavigation from './DrawerNavigation';
import Home from '../screens/home/Home';
import EditProfiles from '../screens/home/EditProfile/EditProfiles';
import ChangePasswordScreen from '../screens/home/EditProfile/ChangePasswordScreen';
import ContactUs from '../screens/contactUs/ContactUs';
import CreateContactUS from '../screens/contactUs/CreateContactUS';
import Notification from '../screens/notifications/Notification';
import TermsCondition from '../screens/termsandprivacy/TermsCondition';
import CreateGroups from '../screens/Groups/CreateGroups';
import GroupDetails from '../screens/Groups/GroupDetails';
import TestShow from '../screens/Groups/TestShow';
import TestTypes from '../screens/TestFile/TestTypes';
import TestFrequency from '../screens/TestFile/TestFrequency';
import RateUs from '../screens/termsandprivacy/RateUs';
import AddJournal from '../screens/journal/AddJournal';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="home" component={DrawerNavigation} />
      {/* auth */}
      <Stack.Group>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="forgotemail" component={ForgotEmail} />
        <Stack.Screen name="forgototp" component={ForgotOtp} />
        <Stack.Screen name="resetpassword" component={ResetPassword} />
      </Stack.Group>
      {/* Subscription */}
      <Stack.Group>
        <Stack.Screen name="subscriptionplan" component={SubscriptonPlan} />
      </Stack.Group>
      
      {/* Edit profile */}
      <Stack.Group>
        <Stack.Screen name="editProfiles" component={EditProfiles} />
        <Stack.Screen name="changePasswordScreen" component={ChangePasswordScreen} />
      </Stack.Group>
      {/* contactus */}
      <Stack.Group>
        <Stack.Screen name="contactUs" component={ContactUs} />
        <Stack.Screen name="createContactUs" component={CreateContactUS} />
      </Stack.Group>
      {/* notification */}
      <Stack.Group>
        <Stack.Screen name="notification" component={Notification} />
      </Stack.Group>

      {/* terms and condition */}
      <Stack.Group>
        <Stack.Screen name="termscondition" component={TermsCondition} />
        <Stack.Screen name="rateUs" component={RateUs} />
      </Stack.Group>

      {/* groups */}
      <Stack.Group>
        <Stack.Screen name="creategroups" component={CreateGroups} />
        <Stack.Screen name="groupDetails" component={GroupDetails} />
        <Stack.Screen name="testShow" component={TestShow} />
      </Stack.Group>

      {/* Tests */}
      <Stack.Group>
        <Stack.Screen name="testTypes" component={TestTypes} />
        <Stack.Screen name="testFrequency" component={TestFrequency} />
      </Stack.Group>

      {/* Journal */}

      <Stack.Group>
        <Stack.Screen name="addjournal" component={AddJournal} />
        
      </Stack.Group>



    </Stack.Navigator>
  );
};

export default StackNavigation;