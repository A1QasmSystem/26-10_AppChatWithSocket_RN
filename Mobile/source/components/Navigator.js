import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Intro from './Intro';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Home from './Home';
import DrawerContent from './Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={RootDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
