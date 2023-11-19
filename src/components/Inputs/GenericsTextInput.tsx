import {StyleSheet, View, TextInput, Touchable, TouchableOpacity} from 'react-native';
import React, {FunctionComponent, useState} from 'react';
import {InputProps} from './type';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {width} from '../../assets/dimensions';
import RegularText from '../Texts/RegularText';

const GenericsTextInput: FunctionComponent<InputProps> = ({
  icon,
  label,
  isPassword,
  ...props
}) => {

  const [password,setPassword] = useState(true);
  const [backgroundColor,setBackgroundColor] =  useState('');



  const customOnBlur = () => {
    props?.onBlur;
    setBackgroundColor('#fff');

  }

  const customOnFocus = () => {
    props?.onFocus;
    setBackgroundColor('#EEE5FF');
  }

  return (
    <View style={styles.ContainerWrapper}>
      <RegularText style={props.labelStyle}>{label}</RegularText>
      
      <View style={[styles.IconInputContainer,{backgroundColor : backgroundColor}]}>
        <View style={styles.LeftIconContainer}>
          <MaterialCommunityIcon name={icon} size={30}  color={'#7F3DFF'}/>
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
            <MaterialCommunityIcon name={password ? 'eye-off' : 'eye'} size={30} color={'#000'} />
          </TouchableOpacity>)
        }
        
      </View>
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
    marginBottom:20
  },
  IconInputContainer: {
    width: '95%',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor:"#EEE5FF"
  },
  LeftIconContainer: {
    borderColor:"#EEE5FF",
    borderRightWidth: 3,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  InputContainer: {
    width: width * 0.63,
    paddingLeft: 15,
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
    paddingHorizontal: 10,
    justifyContent:'center',
    alignItems:'center'
  }
});
