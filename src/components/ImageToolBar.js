import React,  { Component } from 'react';
import { Button, View } from 'react-native';

class ImageToolBar extends Component {
  
  render() {
    return (
      <View>
        <Button title={'Rotate'} onPress={ this.rotateImage }  />
        <Button title={'Resize'}/>
        <Button title={'Flip'}/>
      </View> 
    );
  }
}

export default ImageToolBar;