import React from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {opacity, fadeIn, fadeOut, fadestate, position, movePosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          opacity,
          transform: [
            {
              translateX: position,
              translateY: position,
            },
          ],
        }}
      />
      <View style={styles.btn}>
        <Button
          title="FadeIn"
          onPress={() => fadeIn()}
          disabled={fadestate === 'fadeIn' ? false : true}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="FadeOut"
          onPress={() => fadeOut()}
          disabled={fadestate === 'fadeOut' ? false : true}
        />
      </View>
      <View style={styles.btn}>
        <Button title="MovePosition" onPress={() => movePosition(-100, 1000)} />
      </View>
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
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  btn: {
    padding: 10,
  },
});

export default Animation101Screen;
