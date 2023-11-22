import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './type';
import OnBoarding from '../Screens/OnBoardingScreen/OnBoarding';
import Login from '../Screens/LoginScreen/Login';
import {Text} from 'react-native';
import Signup from '../Screens/SignupScreen/Signup';

const RootStack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen name="OnBoarding" component={OnBoarding} options={{
          headerShown: false,
        }} />
        <RootStack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <RootStack.Screen name="Signup" component={Signup} options={{
            headerShown: false,
          }} />
    </RootStack.Navigator>
  );
};

export default AuthStack;
