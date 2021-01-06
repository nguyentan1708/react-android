import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { 
    backgroundText,
    placeholderColor,
    XanhDuong,
    White} from '../src/style';
import { windowHeight, windowWidth } from '../utils/Dimentions';

function FormInput({labelValue,placeholderText,iconType,...rest}){
    return(
        <View style={styles.container}>
            <AntDesign name={iconType} style={styles.icon}/>
            <TextInput
                value={labelValue}
                numberOfLines={1}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor={placeholderColor}
                {...rest}
            />
        </View>
    )
}

export default FormInput;

const styles=StyleSheet.create({
    container:{
        margin:10,
        height:windowHeight/15,
        backgroundColor:backgroundText,
        padding:10,
        borderRadius:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:18,
        color:'#6E6E6E',
        padding:5,
        paddingLeft:10,
        borderRadius:10,
    },
    input:{
        borderColor:XanhDuong,
        fontFamily:'Lato-Regular',
    },
})