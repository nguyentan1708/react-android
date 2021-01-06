import React from 'react';
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import {
    color_faceBook,
} from '../src/style'

function SocialButton({buttonTitle,btnType,color,bgColor, ...rest}){
    return (
        <TouchableOpacity 
        style={[styles.buttonContainer,{backgroundColor:bgColor}]}{...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={22} color={color}/>
            </View>
            <View style={styles.textWrapper}>
                <Text style={[styles.text,{color:color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;

const styles=StyleSheet.create({
    buttonContainer:{
        margin:20,
        height:windowHeight/15,
        padding:10,
        borderRadius:50,
        flexDirection:"row",
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        fontWeight:'bold',
    },
    textWrapper:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Lato-Regular',
    },
})