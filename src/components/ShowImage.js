import React, { Component } from 'react';
import { Image, View, StyleSheet, Animated, Button } from 'react-native';

import ImageToolBar from './ImageToolBar';
import ImagePath from '../../assets/victory.jpg';
import { rotateImage, scaleImage, flipImage } from './AnimationHelpers/Animations';

class ShowImage extends Component {
  constructor() {
    super();
    this.rotationValue = new Animated.Value(0);
    this.flipValue = new Animated.Value(0);
    this.scaleValue = new Animated.Value(1);
  }

  render() {
    const rotate = this.rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const rotateY = this.flipValue.interpolate({
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
            transform: [{ rotate }, { rotateY }, { scale }]
          }}
          source={ ImagePath }
        />
        <Button title='Rotate' onPress={() => rotateImage(this.rotationValue)} />
        <Button title='Flip' onPress={() => flipImage(this.flipValue)} />
        <Button title='Resize' onPress={() => scaleImage(this.scaleValue)} />
      </View>
    );
  }
}

export default ShowImage;