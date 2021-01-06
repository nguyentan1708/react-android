import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginScreen from '../screens/LoginScreen';

export default function ListenAuthState() {
    const [initializing,setInitializing]=useState(true);
    const [user,setUser]=useState();
    
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    
      if (initializing) return null;

      if (!user) {
        return (
          <View>
              <LoginScreen/>
          </View>
        );
      }
    
      return (
        <View>
          <Text>Home</Text>
        </View>
      );
}