import { Animated } from 'react-native';

export function rotateImage(rotationValue) {
  const newValue = rotationValue._value + 0.25
  Animated.timing(
    rotationValue, {
      toValue: newValue,
      duration: 1000
    }
  ).start();
}

export function scaleImage(scaleValue) {
  let newValue = 0;
  scaleValue._value === 1 ? newValue = 0.4 : newValue = 1;
  Animated.timing(
    scaleValue, {
      toValue: newValue,
      duration: 1000
    }
  ).start();
}

export function flipImage(flipValue) {
  const newValue = flipValue._value + 1
  Animated.timing(
    flipValue, {
      toValue: newValue,
      duration: 1000
    }
  ).start();
}