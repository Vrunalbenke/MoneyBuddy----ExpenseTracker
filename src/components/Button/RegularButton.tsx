import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ButtonProps } from './type'

const RegularButton : FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity 
    onPress={props.onPress}
    >
        <RegularButton>{props.children}</RegularButton>
    </TouchableOpacity>
  )
}

export default RegularButton

const styles = StyleSheet.create({})