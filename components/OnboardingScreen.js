import React from 'react';
import {
    View,Text,StyleSheet,Image, Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({navigation}) {
    // function Dots({selected}) {
    //     let backgroundColor;
    //     backgroundColor='rbga(0,0,0,0.8';
    //     backgroundColor=selected? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3';
    // }
    // function Skip({...props}) {
    //     <Button
    //         title="Skip"
    //         color="#000000"
    //         {...props}
    //     />
    // }
    // function Next({...props}) {
    //     <Button
    //         title="Next"
    //         color="#000000"
    //         {...props}
    //     />
    // }
    // function Done({...props}) {
    //     <TouchableOpacity
    //         style={{marginHorizontal:10}}
    //         {...props}
    //     >
    //         <Text style={{fontSize:16}}>Done</Text>
    //     </TouchableOpacity>
    // }
    return(
        <Onboarding
        // SkipButtonComponent={Skip}
        // NextButtonComponent={Next}
        // DoneButtonComponent={Done}
        // onSkip={()=>{console.log('skip')}}
        // onDone={()=>{console.log('skip')}}

        pages={[
            {
                backgroundColor:'#a6e4d0',
                image:<Image source={require('../img/1-Onboarding-1.png')} style={styles.image}/>,
                title:'connect to the world',
                subtitle:'A new way to connect',
            },
            {
                backgroundColor:'#a6e4d0',
                image:<Image source={require('../img/1-Onboarding-1.png')}/>,
                title:'connecte to the world',
                subtitle:'A new way to connect',
            }
        ]}
        />
    );
}

const styles=StyleSheet.create({
    image:{
        height:200,
        width:300,
    },
})