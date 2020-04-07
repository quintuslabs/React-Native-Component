import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="GO To BottomTab"
          onPress={() => this.props.navigation.push('Bottom Tabs')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go To First screen"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export default DetailsScreen;
