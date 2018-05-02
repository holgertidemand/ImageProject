import React, { Component } from 'react';
import { Image, View, StyleSheet, Animated, Button } from 'react-native';

import ImageToolBar from './ImageToolBar';

class ShowImage extends Component {
  constructor() {
    super();
    this.rotationValue = new Animated.Value(0);
  }

  rotate() {
    const newValue = this.rotationValue._value + 0.25
    Animated.timing(
      this.rotationValue, {
        toValue: newValue,
        duration: 1000
      }
    ).start();
  }

  render() {
    const imagePath = '../../assets/victory.jpg';
    const spin = this.rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View>
        <Animated.Image
          style={{
            width: 250,
            height: 250,
            transform: [{ rotate: spin }]
          }}
          source={require(imagePath)}
        />
        <Button title='Rotate' onPress={() => this.rotate()}></Button>
      </View>
    );
  }
}

export default ShowImage;