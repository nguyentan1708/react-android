import * as React from 'react';
import {Button, Text, View,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FormButton from '../components/FormButton';

function Chi({navigator}) {
    return(
        <View>
            <FormButton
                buttonTitle="Nhập vào"
            />
        </View>
    )
}

const styles=StyleSheet.create({

})