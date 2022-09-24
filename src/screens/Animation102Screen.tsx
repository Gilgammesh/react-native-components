import React, {useContext, useRef} from 'react';
import {View, StyleSheet, Animated, PanResponder, SafeAreaView} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';

const Animation102Screen = () => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

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
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Animation 02" />
      <View style={styles.containerAnimated}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box, {backgroundColor: colors.primary}]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAnimated: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  btn: {
    padding: 10,
  },
});

export default Animation102Screen;
