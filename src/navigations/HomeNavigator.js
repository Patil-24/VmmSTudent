import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';
import {ROUTES} from '../constants';
import About from '../screens/home/About';

const Stack = createStackNavigator();

function HomeNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.ABOUT} component={About} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;