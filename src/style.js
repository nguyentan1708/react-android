import {StyleSheet} from 'react-native';
import {windowWidth,windowHeight} from '../utils/Dimentions';

export const color_faceBook="#2E9AFE";
export const backgroundFacebook="#e6eaf4";
export const backgroundGoogle="#f5e7ea";
export const White="#FFFFFF";
export const backgroundText="#EFF8FB";
export const placeholderColor="#6E6E6E";
export const color_google="#de4d41";

export const styles=StyleSheet.create({
    link:{

    },
    inputContainer:{
        marginTop:5,
        marginBottom:10,
        width:'100%',
        
    },
    iconStyle:{
        padding:10,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRightColor:'#ccc',
        width:50,
    },
    inputField:{
        padding:10,
        marginTop:5,
        marginBottom:10,
        width:windowHeight/1.5,
        height:windowHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidth:1,
    },
    input:{
        padding:10,
        flex:1,
        fontSize:16,
        fontFamily:'Lato-Regular',
        color:White,
        justifyContent:'center',
        alignItems:'center',
    },
})