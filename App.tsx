// import React from 'react'
// import { View, Text,StyleSheet,SafeAreaView } from 'react-native'


// const App = () => {
//   return (
    // <SafeAreaView
    // style={{
    //   flex:1,
    //   justifyContent:'center',
    //   alignItems:'center',
    // }}>
    //   <Text>App</Text>

    // </SafeAreaView>
//   )
// }

// export default App
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text,StyleSheet,SafeAreaView } from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
      
     
     </NavigationContainer>
  );
}