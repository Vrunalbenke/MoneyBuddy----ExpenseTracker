import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  GestureResponderEvent,
  SafeAreaView,
} from 'react-native';
import MainContainer from '../../components/Container/MainContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {width} from '../../assets/dimensions';
import GenericsTextInput from '../../components/Inputs/GenericsTextInput';
import {BLACK, PURPLE_A, RED, SLATE_GRAY, WHITE} from '../../constants/color';
import RegularButton from '../../components/Button/RegularButton';
import {isValidEmail, isValidPassword} from '../../utils/Regex/RegexUtil';
import Toast from 'react-native-simple-toast';
import {LoginNavigationProps} from '../../Navigation/type';

const Login = ({navigation}: LoginNavigationProps) => {
  let isValid = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  function handleError(input: string, errorMessage: string | null) {
    setError(prevState => ({...prevState, [input]: errorMessage}));
  }

  function EmptyString(input: string, errorMessage: string | null): void {
    setError(prevState => ({...prevState, [input]: errorMessage}));
  }


  function Validate(event: GestureResponderEvent): void {
    const resEmail = isValidEmail(email);
    const resPass = isValidPassword(password);

    if (resEmail.isValid !== true) {
      isValid = false;
      console.log(resEmail?.errorMessage);
      handleError("email", resEmail?.errorMessage);
    }

    if (resPass.isValid === false) {
      isValid = false;
      handleError("password", resPass.errorMessage);
    }
    
    if(isValid){
        LoginUser();
    }
  }

  function LoginUser() {
    
  }

  return (
    <MainContainer>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Login</Text>
        <Text></Text>
      </View>

      <View style={styles.mainContainer}>
        <GenericsTextInput
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
            color: isValid ? BLACK : RED,
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 20,
          }}
          errorMessage={error.email}
          removeErrorOnFocus={EmptyString}
          input = {'email'}
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
            color: isValid ? BLACK : RED,
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 20,
          }}
          errorMessage={error.password}
            removeErrorOnFocus={EmptyString}
          input = {'password'}
        />

        <RegularButton
          onPress={Validate}
          children={'Login'}
          style={{alignSelf: 'center'}}
          textStyle={{color: WHITE, fontSize: 24,fontWeight:'600'}}
        />
      </View>

      <View style={styles.BottomContainer}>
        <TouchableOpacity style={styles.TOPContainer}>
          <Text style={styles.ForgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.AccountText}>
          Don't have an account yet?
          <TouchableOpacity 
          style={styles.TOPSignup}
          onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.SignupText}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </MainContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap:width * 0.28
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: width * 0.1,
  },
  BottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap: 20,
  },
  TOPContainer: {},
  ForgotText: {
    fontSize: 20,
    color: PURPLE_A,
    fontWeight: '500',
  },
  AccountText: {
    color: SLATE_GRAY,
    fontSize: 17,
  },
  SignupText: {
    color: PURPLE_A,
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  TOPSignup: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingTop: 6,
  },
});
