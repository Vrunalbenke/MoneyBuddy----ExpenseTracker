import { ReactNode, ComponentProps } from "react";
import { StyleProp, TextInputProps, TextStyle } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

interface ExtraInputProps {
    label: ReactNode;
    icon : ComponentProps<typeof MaterialCommunityIcon>['name'];
    labelStyle : StyleProp<TextStyle>
    isPassword? : Boolean
    errorMessage? : string
    removeErrorOnFocus ? : (input : string, errorMessage: string | null) => void
    input: string
}


export type InputProps = TextInputProps & ExtraInputProps;