import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ButtonProps } from './type'
import RegularText from '../Texts/RegularText';
import {width} from '../../assets/dimensions'
import { PURPLE_A } from '../../constants/color';



const RegularButton : FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity 
    onPress={props.onPress}
    style={[styles.TOPContainer,props?.style]}
    >
        <RegularText style={props.textStyle}>{props.children}</RegularText>
    </TouchableOpacity>
  )
}

export default RegularButton

const styles = StyleSheet.create({
  TOPContainer:{
    width:width*0.90,
    // marginLeft:20,
    backgroundColor:PURPLE_A,
    borderRadius:10,
    padding:13,
    justifyContent:'center',
    alignItems:'center'

  },

})