import {NativeStackScreenProps} from '@react-navigation/native-stack';


export type RootStackParamList = {
    OnBoarding : undefined;
    Login : undefined;
    Signup : undefined;
}

export type OnBoardingNavigationProps = NativeStackScreenProps<RootStackParamList,"OnBoarding">

export type LoginNavigationProps = NativeStackScreenProps<RootStackParamList,"Login">

export type SignupnNavigationProps = NativeStackScreenProps<RootStackParamList,"Signup">

