import React, { Component } from 'react';
import { Image, View, StyleSheet, Animated, Button } from 'react-native';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';

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
            transform: [{ rotate }, { rotateY }, { scale }],
            borderRadius: 5
          }}
          source={ImagePath}
        />
        <View style={styles.toolBar}>
          <FontAwesome
            style={styles.icons}
            name="rotate-right"
            size={32}
            onPress={() => rotateImage(this.rotationValue)}
          />
          <MaterialIcons
            style={styles.icons}
            name='flip'
            size={32}
            onPress={() => flipImage(this.flipValue)}
          />
          <Feather
            style={styles.icons}
            name='minimize-2'
            size={32}
            onPress={() => scaleImage(this.scaleValue)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolBar: {
    backgroundColor: '#F1F3F4',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  icons: {
    marginLeft: 15,
    marginRight: 15
  }
})

export default ShowImage;