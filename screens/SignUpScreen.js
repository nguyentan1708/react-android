import React, { useState } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    color_facebook,
    color_google,
    backgroundFacebook,
    backgroundGoogle,
} from '../src/style';
import auth from '@react-native-firebase/auth';

export default function SignUpScreen({navigation}) {
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [confirmPassword,setConfirmPassword]=useState(null);
    function Login(){
        auth().signInWithEmailAndPassword(email,password)
        .then(() => {console.log=('ser')})
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
      };
    return (
        <View style={styles.container}>
            <Image
                source={require('../img/piggy-bank.png')}
                style={styles.logo}
            />
           <FormInput
                labelValue={email}
                onChangeText={(userEmail)=>setEmail(userEmail)}
                placeholderText="Nhập email của bạn"
                iconType='user'
                keyboardTupe="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword)=>setPassword(userPassword)}
                placeholderText="Nhập mật khẩu của bạn"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword)=>setConfirmPassword(userPassword)}
                placeholderText="Nhập lại mật khẩu của bạn"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Đăng ký"
                onPress={()=>Login()}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate('ForgotPass')}>
                <Text style={styles.buttonText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            
            <SocialButton               
                buttonTitle='Đăng ký với Facebook'
                btnType="facebook"
                color={color_facebook}
                bgColor={backgroundFacebook}
            />
            <SocialButton
                buttonTitle='Đăng ký với Google'
                btnType="google"
                color={color_google}
                bgColor={backgroundGoogle}
            />

            <TouchableOpacity
            style={styles.forgotButton}
            onPress={()=>navigation.goBack()}>
                <Text style={styles.buttonText}>Đã có tài khoản?Đăng nhập ngay</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    logo:{
        height:200,
        width:200,

    },
    text:{

    },
    buttonText:{
        fontSize:18,
        fontWeight:'500',
        color:'#2e64e5',
        fontFamily:'Lato-Regular',
    },
    forgotButton:{
        justifyContent:'center',
    },
})