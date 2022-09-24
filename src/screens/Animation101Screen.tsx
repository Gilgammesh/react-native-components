import React, {useContext} from 'react';
import {View, StyleSheet, Animated, Button, SafeAreaView} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {opacity, fadeIn, fadeOut, fadestate, position, movePosition} = useAnimation();

  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Animation 01" />
      <View style={styles.containerAnimated}>
        <Animated.View
          style={{
            ...styles.box,
            opacity,
            transform: [
              {
                translateY: position,
              },
            ],
            backgroundColor: colors.primary,
          }}
        />
        <View style={styles.btn}>
          <Button title="FadeIn" onPress={() => fadeIn()} disabled={fadestate === 'fadeIn' ? false : true} />
        </View>
        <View style={styles.btn}>
          <Button title="FadeOut" onPress={() => fadeOut()} disabled={fadestate === 'fadeOut' ? false : true} />
        </View>
        <View style={styles.btn}>
          <Button title="MovePosition" onPress={() => movePosition(-100, 1000)} />
        </View>
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
    marginBottom: 10,
  },
  btn: {
    padding: 10,
  },
});

export default Animation101Screen;
