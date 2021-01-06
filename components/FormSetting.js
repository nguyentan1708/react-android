import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import {
    color_faceBook,
} from '../src/style';
import Ionicons from 'react-native-vector-icons/Ionicons';

function FormSetting({title, ...rest}) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>{buttonTitle}</Text>
            <Ionicons name="arrow-forward-outline" style={styles.icon} />
        </TouchableOpacity>
    )
}
export default FormSetting;
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        width:"100%",
        height:windowHeight/20,
        padding:10,
        borderWidth:2,
        borderColor: "gainsboro",
        backgroundColor:"ivory",
    },
    text:{
        flex:9,
        alignContent:"center",
        color:"black",
        display:'flex',
    },
    icon:{
        flex:1,
        color:"hotpink",
        fontSize:20,
    },
})