import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';

const TextInputScreen = () => {
  const initForm = {
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    isSubscribed: false,
  };

  const {form, onChange} = useForm(initForm);
  const {nombre, apellido, dni, email, isSubscribed} = form;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView>
          <HeaderTitle title="Text Inputs" />
          <View style={styles.containerInputs}>
            <View style={styles.formcontrol}>
              <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={value => onChange(value, 'nombre')}
                placeholder="Nombre"
                autoCapitalize="words"
                textContentType="name"
              />
            </View>
            <View style={styles.formcontrol}>
              <Text>{JSON.stringify(form, null, 2)}</Text>
            </View>
            <View style={styles.formcontrol}>
              <TextInput
                style={styles.input}
                value={apellido}
                onChangeText={value => onChange(value, 'apellido')}
                placeholder="Apellido"
                autoCapitalize="words"
                textContentType="name"
              />
            </View>
            <View style={styles.formcontrol}>
              <Text>{JSON.stringify(form, null, 2)}</Text>
            </View>
            <View style={styles.formcontrol}>
              <TextInput
                style={styles.input}
                value={dni}
                onChangeText={value => onChange(value, 'dni')}
                placeholder="DNI"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.formcontrol}>
              <Text>{JSON.stringify(form, null, 2)}</Text>
            </View>
            <View style={styles.formcontrol}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={value => onChange(value, 'email')}
                placeholder="Correo"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                textContentType="emailAddress"
              />
            </View>
            <View style={styles.formcontrol}>
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>Suscribirse</Text>
                <CustomSwitch
                  enabled={isSubscribed}
                  onChange={() => onChange(!isSubscribed, 'isSubscribed')}
                />
              </View>
            </View>
            <View style={styles.formcontrol}>
              <Text>{JSON.stringify(form, null, 2)}</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInputs: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
  },
  formcontrol: {
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 4,
    padding: 10,
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

export default TextInputScreen;
