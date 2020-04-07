import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles.js';

class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Tab 3</Text>
      </View>
    );
  }
}

export default Tab3;
