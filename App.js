import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/page/Home';
import About from './src/page/About';
import Message from './src/page/Message';

const Stack = createNativeStackNavigator();

function App() {
return(
  <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Message"
    screenOptions={{headrerShown: false}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Message' component={Message}/>
      <Stack.Screen name='About' component={About}/>
    </Stack.Navigator>
  </NavigationContainer>);
}

export default App;