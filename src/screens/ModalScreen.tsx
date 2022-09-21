import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Modals" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(prev => !prev);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Contenido del Modal</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(prev => !prev)}>
              <Text style={styles.textStyle}>Cerrar Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.containerBtn}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Abrir Modal</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'green',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalScreen;
