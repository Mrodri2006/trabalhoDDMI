import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';


export default function Sobre() {
const [inputValue, setInputValue] = useState('');
const setZero = () => setInputValue('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Sobre o Aplicativo
      </Text>

      <Text style={styles.paragraph}>
        Este aplicativo foi desenvolvido com o objetivo de facilitar a busca por oportunidades de emprego, conectando candidatos a vagas disponíveis em diversas áreas.
      </Text>

      <Text style={styles.paragraph}>
        Através de uma interface simples e intuitiva, os usuários podem visualizar vagas, localizar empresas próximas e se manter informados sobre o mercado de trabalho.
      </Text>
      
      <Text style={styles.date}>
        Data: 20/05/2025
      </Text>
          <View style={styles.container}>
            <Text style={styles.header}>Avaliação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o que esta achando do nosso app "
        value={inputValue}
        onChangeText={setInputValue}
      />    
      <TouchableOpacity  
      style={styles.button}
      onPress={()=> { Alert.alert('Enviado');
      setZero();
       }
      }
      >
      <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
    container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',    
    padding: 20,
    backgroundColor: '#f0f0f0', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', 
    color: '#333',
  },
  input: {
    width: '100%',
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
    button: {
    backgroundColor: 'green',     
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    elevation: 3,                  
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

