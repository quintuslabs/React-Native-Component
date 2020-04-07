import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {View, Text, Button, SafeAreaView} from 'react-native';
import Colors from '../theme/Color';
import Dimensions from '../theme/Dimension';
import {styles} from './styles/styles.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ToolBar(props) {
  return (
    <View style={styles.toolBar}>
      <TouchableOpacity onPress={props.toggle} style={styles.toggle}>
        <Ionicons name="md-menu" size={30} color={Colors.white} />
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

ToolBar.propTypes = {
  toggle: PropTypes.func,
};

export default ToolBar;
