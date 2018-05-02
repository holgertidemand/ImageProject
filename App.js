import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ShowImage from './src/components/ShowImage';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ShowImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
