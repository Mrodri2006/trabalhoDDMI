import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Linking, Modal, Button } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [descricao, setDescricao] = useState('');

  const Vagas = [
  {
    id: '1',
    cargo: 'Desenvolvedor Front-end',
    horario: '09:00 às 18:00',
    imagem: require('../assets/download8.png'),
    descricao: 'Desenvolva interfaces modernas e responsivas utilizando HTML, CSS, JavaScript e frameworks.',
    link: 'https://www.youtube.com/watch?v=f02mOEt11OQ',
  },
  {
    id: '2',
    cargo: 'Designer Gráfico',
    horario: '10:00 às 16:00',
    imagem: require('../assets/download.png'),
    descricao: 'Crie identidades visuais, layouts e materiais gráficos para diversos meios digitais e impressos.',
    link: 'https://www.youtube.com/watch?v=QW2-Fxk6c84',
  },
    {
      id: '3',
      cargo: 'Médico',
      horario: '06:00 às 16:00',
      imagem: require('../assets/medico.png'),
      descricao: 'Busca de medico neurocirurgião',
      link: 'https://www.youtube.com/watch?v=jKC8VSFkJGE',
    },
        {
      id: '4',
      cargo: 'Veterinário',
      horario: '10:00 às 20:00',
      imagem: require('../assets/veterinario.png'),
      descricao: 'Queremos veterinários comprometidos e empenhados na saúde de nossos animais.',
      link: 'https://m.youtube.com/watch?v=dgwItp0cq2E&t=5s',
    },
  ];

  const abrirDescricao = (item) => {
    setDescricao(item.descricao);
    setModalVisible(true);
  };

  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listaItem}
      onPress={() => abrirDescricao(item)}
      onLongPress={() => abrirLink(item.link)}
    >
      <Image source={item.imagem} style={styles.listaImagem} />
      <View>
        <Text style={styles.titulo}>Cargo: {item.cargo}</Text>
        <Text style={styles.texto}>Horário: {item.horario}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vagas Disponíveis</Text>
      <FlatList
        data={Vagas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>Descrição da Vaga</Text>
            <Text style={styles.modalText}>{descricao}</Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
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
  listaImagem: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
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
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    width: '85%',
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
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    textAlign: 'justify',
  },
});
