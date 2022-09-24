import {useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimation = () => {
  const opacityInit = 0.3;
  const opacityEnd = 1;
  const opacityDuration = 3000;
  const opacity = useRef(new Animated.Value(opacityInit)).current;

  const positionInit = 0;
  const positionEnd = 0;
  const positionDuration = 1000;
  const position = useRef(new Animated.Value(positionInit)).current;

  const [fadestate, setFadestate] = useState<string>('fadeIn');

  const fadeIn = (duration: number = opacityDuration) => {
    Animated.timing(opacity, {
      toValue: opacityEnd,
      duration,
      useNativeDriver: true,
    }).start(() => {
      setFadestate('fadeOut');
    });
  };

  const fadeOut = (duration: number = opacityDuration) => {
    Animated.timing(opacity, {
      toValue: opacityInit,
      duration,
      useNativeDriver: true,
    }).start(() => {
      setFadestate('fadeIn');
    });
  };

  const movePosition = (
    posInit: number = positionInit,
    posDuration: number = positionDuration,
  ) => {
    position.setValue(posInit);

    Animated.timing(position, {
      toValue: positionEnd,
      duration: posDuration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => {
      setFadestate('fadeOut');
    });
  };

  return {opacity, fadeIn, fadeOut, fadestate, position, movePosition};
};

export default useAnimation;
