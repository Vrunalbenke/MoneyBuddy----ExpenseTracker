import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Image,
  ScrollView,
} from 'react-native';
import MainContainer from '../../components/Container/MainContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SignupnNavigationProps} from '../../Navigation/type';
import {width, height} from '../../assets/dimensions';
import {PURPLE_A, SLATE_GRAY, BLACK, RED, WHITE} from '../../constants/color';
import GenericsTextInput from '../../components/Inputs/GenericsTextInput';
import RegularButton from '../../components/Button/RegularButton';
import {
  isValidEmail,
  isValidName,
  isValidPassword,
} from '../../utils/Regex/RegexUtil';

let isValid = true;

const Signup = ({navigation}: SignupnNavigationProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckbox] = useState(false);
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    checkbox: true,
  });

  const googleLogoImage = <Image source={require('../../assets/googleLogo.png')} style={{height:45,width:45}}/> ; 


  function handleError(input: string, errorMessage: string | Boolean | null) {
    setError(prevState => ({...prevState, [input]: errorMessage}));
  }

  function EmptyString(input: string, errorMessage: string | null): void {
    setError(prevState => ({...prevState, [input]: errorMessage}));
  }

  function Validate(event: GestureResponderEvent): void {
    const emailRes = isValidEmail(email);
    const nameRes = isValidName(name);
    const passRes = isValidPassword(password);

    if (emailRes.isValid === false) {
      isValid = false;
      handleError('email', emailRes.errorMessage);
    }

    if (nameRes.isValid === false) {
      isValid = false;
      handleError('name', nameRes.errorMessage);
    }
    if (passRes.isValid === false) {
      isValid = false;
      handleError('password', passRes.errorMessage);
    }


    if (!checkBox) {
      isValid = false;
      handleError('checkbox',false);
      console.log(error.checkbox)
    }
    if (isValid) {
      Signup();
    }
  }

  const Signup = () => {
    navigation.navigate('Login');
  };

  return (
    <MainContainer>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text></Text>
      </View>

      <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.Scroll}>
        <View style={styles.mainContainer}>
            <GenericsTextInput
            icon="account"
            label="Full Name"
            value={name}
            onChangeText={setName}
            placeholder="Vrunal Benke"
            autoCapitalize="none"
            autoComplete="sms-otp"
            keyboardType="default"
            isPassword={false}
            labelStyle={{
                color: BLACK,
                marginBottom: 10,
                fontWeight: '500',
                fontSize: 20,
            }}
            errorMessage={error.name}
            removeErrorOnFocus={EmptyString}
            input={'name'}
            />

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
                color: BLACK,
                marginBottom: 10,
                fontWeight: '500',
                fontSize: 20,
            }}
            errorMessage={error.email}
            removeErrorOnFocus={EmptyString}
            input={'email'}
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
            errorMessage={error.password}
            removeErrorOnFocus={EmptyString}
            input={'password'}
            />

            <View style={styles.TermContainer}>
            <TouchableOpacity
                onPress={() => {
                setCheckbox(!checkBox);
                handleError('checkbox', true);
                }}>
                <Ionicons
                name={checkBox ? 'checkbox' : 'square-outline'}
                size={30}
                color={checkBox ? PURPLE_A : BLACK}
                />
            </TouchableOpacity>
            <Text
                style={[
                styles.TermText,
                {color: error.checkbox ? SLATE_GRAY : RED},
                ]}>
                By signing up, you agree to the Terms of Service and Privacy Policy
            </Text>
            </View>

            <View style={styles.ButtonContainer}>
                <RegularButton
                onPress={Validate}
                children={'Sign up'}
                style={{alignSelf: 'center'}}
                textStyle={{color: WHITE, fontSize: 24,fontWeight:'600'}}
                />
                
                <Text style={styles.AltText}>Or with</Text>

                <RegularButton
                onPress={() => console.log('first')}
                children={`Sign up With Google`}
                image = {googleLogoImage}
                style={{
                    alignSelf: 'center',
                    backgroundColor:WHITE,
                    flexDirection:'row',
                    borderWidth:0.2,
                    borderColor:SLATE_GRAY,
                    shadowColor:BLACK,
                    shadowOffset:{
                        height:1,
                        width:1,
                    },
                    shadowOpacity:0.2,
                    elevation:4,
                    shadowRadius:2,
                    padding:5
                }}
                textStyle={{color: BLACK, fontSize: 24,fontWeight:'600'}}
                />

            </View>
        </View>

        <View style={styles.BottomContainer}>
            <Text style={styles.AccountText}>
            Already have an account?
            <TouchableOpacity 
            style={styles.TOPSignup}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.SignupText}>Login</Text>
            </TouchableOpacity>
            </Text>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default Signup;

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
  Scroll:{
    
  },
  mainContainer: {
    // marginTop: width * 0.1,
  },
  TermContainer: {
    width: width * 0.9,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignSelf: 'center',
    gap: 9,
    marginBottom: 20,
  },
  TermText: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 16,
    color: SLATE_GRAY,
  },
  ButtonContainer:{
    justifyContent:'center',
    alignItems:'center',
    gap:12
  },
  AltText:{
    color:SLATE_GRAY,
    fontSize:17,
    fontWeight:'700'
  },
  BottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 20,
    paddingBottom:20
  },
  TOPContainer: {},
  ForgotText: {
    fontSize: 20,
    color: PURPLE_A,
    fontWeight: '500',
  },
  AccountText: {
    fontSize: 17,
    color:SLATE_GRAY
  },
  SignupText: {
    color: PURPLE_A,
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  TOPSignup: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 6,
    // paddingTop: 6,
    
  },
});
