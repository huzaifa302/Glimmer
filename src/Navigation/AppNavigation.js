import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../Screens/AuthStack/GetStarted';
import WelcomeBack from '../Screens/AuthStack/SignIn';
import OTP from '../Screens/AuthStack/OTP';
import SignIn from '../Screens/AuthStack/SignIn';
import SignUp from '../Screens/AuthStack/SignUp';
import OtpSignUp from '../Screens/AuthStack/OtpSignUp';
import SignUpEmail from '../Screens/AuthStack/SignUpEmail';
import PersonalDetail from '../Screens/AuthStack/PersonalDetail';
import DistancePref from '../Screens/AuthStack/DistancePref';
import Interest from '../Screens/AuthStack/Interest';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OtpSignUp" component={OtpSignUp} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
      <Stack.Screen name="DistancePref" component={DistancePref} />
      <Stack.Screen name="PersonalDetail" component={PersonalDetail} />
      <Stack.Screen name="Interest" component={Interest} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
