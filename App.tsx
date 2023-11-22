import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MainContainer from './src/components/Container/MainContainer';
import GenericsTextInput from './src/components/Inputs/GenericsTextInput';
import RegularButton from './src/components/Button/RegularButton';
import {BLACK, WHITE} from './src/constants/color';
import OnBoarding from './src/Screens/OnBoardingScreen/OnBoarding';
import Login from './src/Screens/LoginScreen/Login';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    // <MainContainer
    //   style={{
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     backgroundColor: WHITE,
    //   }}>
    <>
      <Navigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
