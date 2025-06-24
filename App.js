import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditTaskScreen from './screens/EditTaskScreen';


import LoginScreen from './screens/LoginScreen';
import ToDoScreen from './screens/ToDoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ToDo" component={ToDoScreen} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
