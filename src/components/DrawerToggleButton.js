import React, {Component} from 'react';
import {Button} from 'react-native';

export default function DrawerToggleButton({navigation}) {
  return (
    <Button title="Open" onPress={() => navigation.toggleDrawer()}></Button>
  );
}
