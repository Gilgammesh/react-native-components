import React from 'react';
import {View, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const AlertScreen = () => {
  const createAlert = () =>
    Alert.alert(
      'Alert Title',
      'Alert Message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Canceled'),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => console.log('Confirmed'),
        },
      ],
      {cancelable: true, onDismiss: () => () => console.log('Dismissed')},
    );

  const showPrompt = () =>
    Alert.prompt(
      'Prompt Confirmation?',
      '(No se puede revertir)',
      (value: string) => console.log('value =>', value),
      'plain-text',
      '',
      'numeric',
    );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Alertas" />
      <View style={styles.containerBtn}>
        <Button title="Mostrar Alerta" onPress={createAlert} />
      </View>
      <View style={styles.containerBtn}>
        <Button title="Mostrar Prompt" onPress={showPrompt} />
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default AlertScreen;
