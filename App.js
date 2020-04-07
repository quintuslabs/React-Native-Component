import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Screen1 from './src/screen/drawer/screen1';
import Screen2 from './src/screen/drawer/screen2';
import Screen3 from './src/screen/drawer/screen3';

import HomeScreen from './src/screen/tabs/Home';
import Tab2 from './src/screen/tabs/Tab2';
import Tab3 from './src/screen/tabs/Tab3';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        children={this.createDrawer}
        options={{
          title: 'Home',
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: 'black',
        }}
      />
      <Stack.Screen name="Details" children={this.createTab} />
    </Stack.Navigator>
  );
  MenuButton(props) {
    return <View />;
  }

  createDrawer = () => (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="Home" children={this.createTab} />
      <Drawer.Screen name="Contacts" component={Screen1} />
      <Drawer.Screen name="Favorites" component={Screen2} />
      <Drawer.Screen name="Settings" component={Screen3} />
    </Drawer.Navigator>
  );
  createTab = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Tab3') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
    </Tab.Navigator>
  );

  render() {
    return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
  }
}
