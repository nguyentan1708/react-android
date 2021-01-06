import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

export default function FormSwitch({title, ...rest}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Switch
        style={styles.switch}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
  if (isEnabled===true)
  {
      ()=>console.log("hello");
  };
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: windowHeight / 20,
    padding: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'gainsboro',
    backgroundColor: 'ivory',
  },
  text: {
    flex: 9,
    alignItems: 'center',
    color: 'black',
    display: 'flex',
  },
  switch: {
    flex: 1,
    fontSize: 20,
  },
});
