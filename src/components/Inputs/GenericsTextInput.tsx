import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {FunctionComponent, useState} from 'react';
import {InputProps} from './type';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {width} from '../../assets/dimensions';
import RegularText from '../Texts/RegularText';
import { BLACK, LAVENDER, PURPLE_A, RED, WHITE } from '../../constants/color';

const GenericsTextInput: FunctionComponent<InputProps> = ({
  icon,
  label,
  isPassword,
  errorMessage,
  removeErrorOnFocus,
  input,
  ...props
}) => {

  const [password,setPassword] = useState(true);
  const [backgroundColor,setBackgroundColor] =  useState('');


  const customOnBlur = () => {
    props?.onBlur;
    setBackgroundColor(WHITE);

  }

  const customOnFocus = () => {
    props?.onFocus;
    if(removeErrorOnFocus){
      removeErrorOnFocus(input, '');
    }
    setBackgroundColor(LAVENDER);
  }

  return (
    <View style={styles.ContainerWrapper}>
      <RegularText style={props.labelStyle}>{label}</RegularText>
      
      <View style={[styles.IconInputContainer,{backgroundColor : backgroundColor}]}>
        <View style={styles.LeftIconContainer}>
          <MaterialCommunityIcon name={icon} size={30}  color={PURPLE_A}/>
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={[styles.textInput]}
            placeholderTextColor={'gray'}
            secureTextEntry = {isPassword && password}
            {...props}
            onFocus={customOnFocus}
            onBlur={customOnBlur}
          />
        </View>
        {
          isPassword && 
          (<TouchableOpacity 
          style={styles.RightIconContainer}
          onPress={() => setPassword(!password)}
          >
            <MaterialCommunityIcon name={password ? 'eye-off' : 'eye'} size={30} color={BLACK} />
          </TouchableOpacity>)
        }
        
      </View>
      <Text style={styles.ErrorText}>{errorMessage}</Text>
    </View>
  );
};

export default GenericsTextInput;

const styles = StyleSheet.create({
  ContainerWrapper: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    // marginBottom:5
  },
  IconInputContainer: {
    width: '95%',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor:LAVENDER,
  },
  LeftIconContainer: {
    borderColor:LAVENDER,
    borderRightWidth: 3,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  InputContainer: {
    width: width * 0.63,
    paddingLeft: 10,
    height:"100%",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    fontSize:20,
    flex:1,     
    width:'100%'
  },
  RightIconContainer:{
    paddingHorizontal: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  ErrorText:{
    color:RED,
    alignSelf:'flex-start',
    fontSize:16,
    paddingTop:3
  }
});
