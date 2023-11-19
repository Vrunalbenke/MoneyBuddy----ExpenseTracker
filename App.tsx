import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MainContainer from './src/components/Container/MainContainer';
import SmallText from './src/components/Texts/SmallText';
import RegularText from './src/components/Texts/RegularText';
import BigText from './src/components/Texts/BigText';
import GenericsTextInput from './src/components/Inputs/GenericsTextInput';

const App = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <MainContainer
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

      }}>
      <SmallText style={{color: '#000'}}>MoneyBuddy</SmallText>
      <RegularText style={{color: '#000'}}>manage your money</RegularText>
      <BigText style={{color: '#000', marginBottom: 20}}>
        at your fingertips
      </BigText>
      <GenericsTextInput
        icon="email"
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        placeholder="abc123@gmail.com"
        autoCapitalize='none'
        autoComplete='sms-otp'
        keyboardType='email-address'
        labelStyle={{color: '#000', marginBottom: 10,fontWeight:'500',fontSize:20}}
      />

      <GenericsTextInput
        icon="account"
        value={name}
        onChangeText={setName}
        placeholder="Vrunal benke"
        autoCapitalize='none'
        autoComplete='additional-name'
        keyboardType='default'
        isPassword={false}
        labelStyle={{color: '#000', marginBottom: 10,fontWeight:'500',fontSize:20}}
        label="Full Name"
        />

      <GenericsTextInput
        icon="lock"
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="************"
        autoCapitalize='none'
        autoComplete='password'
        keyboardType='visible-password'
        isPassword={true}
        labelStyle={{color: '#000', marginBottom: 10,fontWeight:'500',fontSize:20}}
      />
    </MainContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
