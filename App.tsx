import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/home/Home';
import Sales from './src/screens/sales/Sales/Sales';

export type RootDrawerParamList = {
  Home: undefined;
  Sales: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sales" component={Sales} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
