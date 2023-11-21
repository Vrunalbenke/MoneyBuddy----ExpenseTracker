import { SafeAreaView, StyleSheet } from 'react-native'
import React, {FunctionComponent} from 'react'
import { ContainerProps } from './type'
import { WHITE } from '../../constants/color'

const MainContainer:FunctionComponent<ContainerProps> = (props) => {
  return (
    <SafeAreaView style={[styles.root,props.style]}>
      {props.children}
    </SafeAreaView>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    root:{
        flex:1,
        // padding:10,
        backgroundColor:WHITE,
    }
})