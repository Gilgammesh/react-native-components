import React, {useRef} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
        listener: evt => console.log('=>', evt.nativeEvent),
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <HeaderTitle title="Animation 02" />
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#75cedb',
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  btn: {
    padding: 10,
  },
});

export default Animation102Screen;
