import React, {useContext, useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';

type StateProps = {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
};

const SwitchScreen = () => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const [state, setState] = useState<StateProps>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const {isActive, isHungry, isHappy} = state;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={[styles.switchText, {color: colors.text}]}>isActive</Text>
        <CustomSwitch enabled={isActive} onChange={() => setState({...state, isActive: !isActive})} />
      </View>
      <View style={styles.switchRow}>
        <Text style={[styles.switchText, {color: colors.text}]}>isHungry</Text>
        <CustomSwitch enabled={isHungry} onChange={() => setState({...state, isHungry: !isHungry})} />
      </View>
      <View style={styles.switchRow}>
        <Text style={[styles.switchText, {color: colors.text}]}>isHappy</Text>
        <CustomSwitch enabled={isHappy} onChange={() => setState({...state, isHappy: !isHappy})} />
      </View>
      <Text style={{color: colors.text}}>{JSON.stringify(state, null, 2)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 20,
  },
});

export default SwitchScreen;
