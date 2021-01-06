import React from 'react';
import {
    View,Text
} from 'react-native';
import database from '@react-native-firebase/database';
import FormInput from './FormInput';
function RealTime() {
    const [email,setEmail]=useState(null);
    return(
        <View>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail)=>setEmail(userEmail)}
                placeholderText="Nhập email của bạn"
                iconType='user'
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )
}