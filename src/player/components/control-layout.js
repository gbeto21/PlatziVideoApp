import React from 'react';
import {StyleSheet, View} from 'react-native';

function ControlLayut(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default ControlLayut;
