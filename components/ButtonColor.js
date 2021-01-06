// import React from 'react';
// import { StyleSheet,View, Text, SafeAreaView, ScrollView } from 'react-native';
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// const COLOR=[
//     {
//         id:'#f0f8ff',
//         name:'alicebue',
//     },
//     {
//         id:'#faebd7',
//         name:'antiquewhite',
//     },
//     {
//         id:'#f0ffff',
//         name:'azure',
//     },
//     {
//         id:'#00bfff',
//         name:'deepskyblue',
//     },
//     {
//         id:'#fffaf0',
//         name:'floralwhite',
//     },
//     {
//         id:'#008000',
//         name:'green',
//     },
//     {
//         id:'#f0fff0',
//         name:'honeydew',
//     },
//     {
//         id:'#f0f8ff',
//         name:'alicebue',
//     },
//     {
//         id:'#f0f8ff',
//         name:'alicebue',
//     },
//     {
//         id:'#f0f8ff',
//         name:'alicebue',
//     },
// ]
// const name = ({ name }) => (
//     <View style={styles.item}>
//       <Text style={styles.name}>{name}</Text>
//     </View>
//   );
  
//   const input = () => {
//     const renderItem = ({ name }) => (
//       <Item title={item.title} />
//     );
  
//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </SafeAreaView>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//       backgroundColor: '#f9c2ff',
//       padding: 20,
//       marginVertical: 8,
//       marginHorizontal: 16,
//     },
//     name: {
//       fontSize: 32,
//     },
//   });
  
//   export default input;
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;