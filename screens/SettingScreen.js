import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import FormButton from '../components/FormButton';

export default function SettingScreen({navigation}) {
  const handleLogOut = (e) => {
    e.preventDefault();
    auth()
      .signOut()
      .then((e) => {
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <FormButton buttonTitle="Đăng xuất" onPress={handleLogOut} />
    </View>
  );
}
