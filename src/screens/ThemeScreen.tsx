import React, {useContext} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';

const ThemeScreen = () => {
  const {theme, setDarkTheme, setLightTheme} = useContext(ThemeContext);
  const {current, colors} = theme;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Tema de la App" />
      <View style={styles.containerBtn}>
        <Text style={[styles.text, {color: colors.text}]}>Cambiar tema</Text>
        <Pressable
          style={[styles.btn, {backgroundColor: colors.switch}]}
          onPress={current === 'dark' ? setLightTheme : setDarkTheme}>
          <Icon
            name={current === 'dark' ? 'sunny-outline' : 'moon-outline'}
            size={20}
            color="#fff"
          />
          <Text style={styles.btnText}>
            {current === 'dark' ? 'Light' : 'Dark'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    width: 80,
  },
  btnText: {
    color: '#fff',
  },
});

export default ThemeScreen;
