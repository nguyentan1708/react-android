import * as React from 'react';
import {Button, FlatList, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Chi from './Chi';
import DatePicker from 'react-native-datepicker';
import {useState} from 'react';
import {set} from 'react-native-reanimated';
import FormButton from '../components/FormButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import  firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import FormInput from '../components/FormInput';
import {useEffect} from 'react';
import '@react-native-firebase/firestore'
const InputStack = createStackNavigator();

function InputStackScreen() {
  return <InputStack.Navigator></InputStack.Navigator>;
}
export default function InputScreen({navigation}) {
  const [date, setDate] = useState('12/12/2020');
  const [category, setCategory] = React.useState([
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
  ]);
  const getData = async(e)=>{
    e.preventDefault()
    await firestore()
    .collection('danhmuc')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.data());
      });
    });
  }
  useEffect(() => {
    // firestore().collection('danhmuc').get().then(querySnapshot=>{
    //   querySnapshot.forEach((doc)=>{
    //     console.log(doc.data())
    //   })
    // }).catch(err=>{
    //   console.log(err)
    // })
    
  }, []);
  return (
    <View>
      <View style={styles.inputGroup}>
        <Text>Ngày</Text>
        <DatePicker
          style={{width: 200}}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2020-05-01"
          maxDate="2020-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Ghi chú</Text>
        <FormInput placeholderText="Chưa nhập vào" />
      </View>
      <View style={styles.inputGroup}>
        <Text>Tiền chi</Text>
        <FormInput labelValue={0} />
        <Text>VNĐ</Text>
      </View>
      <View style={styles.categoryCon}>
        <Text>Danh mục</Text>
        <FlatList
          style={styles.listItem}
          data={category}
          numColumns="3"
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.categoryWrap}>
              <View style={styles.category}>
                <Ionicons name={item.icon} />
                <Text>{item.name}</Text>
              </View>
            </View>
          )}
          style={styles.categoryWrap}
        />
        <FormButton onPress={getData} buttonTitle="Thêm danh mục" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputGroup: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  categoryCon: {
    margin: 20,
  },
  categoryWrap: {
    marginTop: 20,
  },
  category: {
    margin: 10,
    padding: 20,
    width: (windowWidth * 3) / 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  listItem: {
    width: windowWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
