import {StyleSheet, Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TextProps} from './type';

const RegularText: FunctionComponent<TextProps> = props => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

export default RegularText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
