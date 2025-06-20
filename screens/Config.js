import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable, StyleSheet,} from "react-native";

export default function Config() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [infos, setInfos] = useState([
    { id: '1', label: 'Nome', value: 'João da Silva' },
    { id: '2', label: 'Email', value: 'joao@email.com' },
    { id: '3', label: 'Telefone', value: '(11) 91234-5678' },
  ]);
  const [inputValue, setInputValue] = useState(''); 

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listaItem}
      activeOpacity={0.8}
      onPress={() => {
        setSelectedInfo(item);
        setModalVisible(true);
      }}
    >
      <View>
        <Text style={styles.titulo}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informações Pessoais</Text>

      <FlatList
        data={infos}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
      
        <Pressable
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <Pressable style={styles.modal}>
            <Text style={styles.modalTitulo}>{selectedInfo?.label}</Text>
            <Text style={styles.modalText}>{selectedInfo?.value}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[styles.button, { backgroundColor: '#999' }]}
              >
                
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6f9',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a5c47',
    marginBottom: 20,
  },
  listaItem: {
    backgroundColor: '#d4f1f4',
    marginVertical: 10,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a5c47',
  },
  texto: {
    fontSize: 14,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a5c47',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    textAlign: 'justify',
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#1a5c47',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 14,
    color: '#333',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
