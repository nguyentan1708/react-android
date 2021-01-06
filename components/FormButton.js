import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import {
    color_faceBook,
} from '../src/style'

function FormButton({buttonTitle, ...rest}) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
export default FormButton;
const styles=StyleSheet.create({
    container:{
        margin:20,
        height:windowHeight/15,
        backgroundColor:color_faceBook,
        padding:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        flexDirection:"row",
    },
    text:{
        color:"#ffffff",
        alignItems:'center',
    }
})
