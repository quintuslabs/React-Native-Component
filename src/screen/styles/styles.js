import {StyleSheet} from 'react-native';
import Colors from '../../theme/Color';
import Dimensions from '../../theme/Dimension';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
  androidButtonText: {
    color: 'blue',
    fontSize: Dimensions.headerText,
  },

  toolBar: {
    backgroundColor: Colors.statusBar,
    color: Colors.white,
    fontSize: Dimensions.headerText,
    height: Dimensions.headerheight,
    flexDirection: 'row',
    color: Colors.white,
    alignItems: 'center',
  },
});
