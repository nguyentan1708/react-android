import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputScreen from './screens/InputScreen';
import ChartScreen from './screens/ChartScreen';
import CalendarScreen from './screens/CalendarScreen';
import SignUpScreen from './screens/SignUpScreen'
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';
import { useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if(user!=null)
      {
        setIsLogin(true)
      }
      else{
        setIsLogin(false)
      }
    })
  }, [isLogin]);



  const AuthNavigation = ()=>(
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='SignUp' component={SignUpScreen}/>
    </Stack.Navigator>
  )
  const MainNavigation = ()=>(
    <Tab.Navigator>
      <Tab.Screen
        name="Chart"
        component={ChartScreen}
        options={{
          tabBarLabel: 'Thống kê',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="bar-chart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Input"
        component={InputScreen}
        options={{
          tabBarLabel: "Chi tiêu",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Nhà',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: "Lịch",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="construct-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>

  )
  
  return (
    <NavigationContainer>
        {isLogin ? <MainNavigation/> : <AuthNavigation/>}
    </NavigationContainer>
  
  );
}
