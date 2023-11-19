import { StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import { TextProps } from './type'

const BigText:FunctionComponent<TextProps> = (props) => {
  return (
    <Text style={[styles.text,props.style]}>{props.children}</Text>
  )
}

export default BigText

const styles = StyleSheet.create({
    text:{
        fontSize:30,
    }
})