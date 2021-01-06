import React from 'react';
import {View} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';

export default function Schedule() {
    return(
        <View>
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                onDayPress={(day)=>{console.log('selected day',day)}}
                monthFormat={'dd/MM/yyyy'}
            />
        </View>
    )
}

