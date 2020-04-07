import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {styles} from '../styles/styles.js';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../theme/Color';
import Dimensions from '../../theme/Dimension';
import ToolBar from '../../components/ToolBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <AppStatusBar
          backgroundColor={Colors.statusBar}
          barStyle="light-content"
        />
        <ToolBar toggle={() => this.props.navigation.toggleDrawer()} />
        <Text>Tab 1</Text>
      </View>
    );
  }
}

export default Home;
