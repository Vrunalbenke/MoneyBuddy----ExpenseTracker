import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MainContainer from './src/components/Container/MainContainer';
import GenericsTextInput from './src/components/Inputs/GenericsTextInput';
import RegularButton from './src/components/Button/RegularButton';
import {BLACK, WHITE} from './src/constants/color';
import OnBoarding from './src/Screens/OnBoardingScreen/OnBoarding';
import Login from './src/Screens/LoginScreen/Login';

const App = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <MainContainer
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: WHITE,
      }}>
      {/* <OnBoarding /> */}
      <Login/>
      {/* <GenericsTextInput
        icon="email"
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        placeholder="abc123@gmail.com"
        autoCapitalize="none"
        autoComplete="sms-otp"
        keyboardType="email-address"
        isPassword={false}
        labelStyle={{
          color: BLACK,
          marginBottom: 10,
          fontWeight: '500',
          fontSize: 20,
        }}
      />

      <GenericsTextInput
        icon="account"
        value={name}
        onChangeText={setName}
        placeholder="Vrunal benke"
        autoCapitalize="none"
        autoComplete="additional-name"
        keyboardType="default"
        isPassword={false}
        labelStyle={{
          color: BLACK,
          marginBottom: 10,
          fontWeight: '500',
          fontSize: 20,
        }}
        label="Full Name"
      />

      <GenericsTextInput
        icon="lock"
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="************"
        autoCapitalize="none"
        autoComplete="password"
        keyboardType="default"
        isPassword={true}
        labelStyle={{
          color: BLACK,
          marginBottom: 10,
          fontWeight: '500',
          fontSize: 20,
        }}
      />

      <RegularButton onPress={() => console.log('first')} children={'Save'} textStyle={{color: WHITE,fontSize:24}}/> */}
    </MainContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
