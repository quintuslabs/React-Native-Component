import React, {Component} from 'react';
import {Button} from 'react-native';
import {withNavigation} from 'react-navigation';

class BackButton extends React.Component {
  render() {
    return <Button title="Back" onPress={() => alert('This is a button!')} />;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(BackButton);
