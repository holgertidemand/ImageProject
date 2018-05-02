import React, { Component } from 'react';
import { Image, View } from 'react-native';

class ShowImage extends Component {
  

  render() {
    const imagePath = '../../assets/victory.jpg';
    return (
      <View>
        <Image source={ require(imagePath) } />
      </View>
    );
  }
}



export default ShowImage;