import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

class ShowImage extends Component {  
  render() {
    const { image } = styles;
    const imagePath = '../../assets/victory.jpg';
    return (
      <View>
        <Image style={ image } source={ require(imagePath) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250
  }
})

export default ShowImage;