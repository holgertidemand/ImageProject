import React, { Component } from 'react';
import { Image, View, StyleSheet, Animated, Button } from 'react-native';

import ImageToolBar from './ImageToolBar';

class ShowImage extends Component {
  constructor() {
    super();
    this.rotationValue = new Animated.Value(0);
    this.flipValue = new Animated.Value(0);
    this.scaleValue = new Animated.Value(1);
  }

  scaleImage() {
    let newValue = 0;
    this.scaleValue._value === 1 ? newValue = 0.4 : newValue = 1;
    Animated.timing(
      this.scaleValue, {
        toValue: newValue,
        duration: 1000
      }
    ).start();
  }

  flipImage() {
    const newValue = this.flipValue._value + 1
    Animated.timing(
      this.flipValue, {
        toValue: newValue,
        duration: 1000
      }
    ).start();
  }

  rotateImage() {
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
    const flip = this.flipValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });

    const scale = this.scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <View>
        <Animated.Image
          style={{
            width: 250,
            height: 250,
            transform: [{ rotate: spin }, { rotateY: flip }, { scale }]
          }}
          source={require(imagePath)}
        />
        <Button title='Rotate' onPress={() => this.rotateImage()} />
        <Button title='Flip' onPress={() => this.flipImage()} />
        <Button title='Resize' onPress={() => this.scaleImage()} />
      </View>
    );
  }
}

export default ShowImage;