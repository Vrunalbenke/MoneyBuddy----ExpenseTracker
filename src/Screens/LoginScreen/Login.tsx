import React, { useState } from "react";
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import MainContainer from "../../components/Container/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { width } from "../../assets/dimensions";
import GenericsTextInput from "../../components/Inputs/GenericsTextInput";
import { BLACK, PURPLE_A, SLATE_GRAY, WHITE } from "../../constants/color";
import RegularButton from "../../components/Button/RegularButton";

const Login = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <MainContainer>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
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
                color: BLACK,
                marginBottom: 10,
                fontWeight: '500',
                fontSize: 20,
                }}
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

            <RegularButton onPress={() => console.log('first')} children={'Login'} style={{alignSelf:'center'}} textStyle={{color: WHITE,fontSize:24}}/>
            </View>

            <View style={styles.BottomContainer}>
                <TouchableOpacity style={styles.TOPContainer}>
                    <Text style={styles.ForgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            <Text style={styles.AccountText}>Don't have an account yet? 
                <TouchableOpacity style={styles.TOPSignup}>
                    <Text style={styles.SignupText}>Sign Up</Text>
                </TouchableOpacity>
            </Text>
            </View>
        </MainContainer>
    )
};

export default Login;

const styles  = StyleSheet.create({
    headerContainer:{
        width:width,
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerText:{
        fontSize:22,
        fontWeight:'600'
    },
    mainContainer:{
        marginTop:width * 0.1
    },
    BottomContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        gap:20
    },
    TOPContainer:{

    },
    ForgotText:{
        fontSize:20,
        color:PURPLE_A,
        fontWeight:'500'
    },
    AccountText:{
        color:SLATE_GRAY,
        fontSize:17
    },
    SignupText:{
        color:PURPLE_A,
        fontSize:17,
        textDecorationLine:"underline"
    },
    TOPSignup:{
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:5,
        paddingTop: 6
    }
})