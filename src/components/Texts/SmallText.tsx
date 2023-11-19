import { StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import { TextProps } from './type'

const SmallText:FunctionComponent<TextProps> = (props) => {
  return (
    <Text style={[styles.text,props.style]}>{props.children}</Text>
  )
}

export default SmallText

const styles = StyleSheet.create({
    text:{
        fontSize:13,
    }
})