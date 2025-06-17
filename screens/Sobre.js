import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';


export default function Sobre() {
const [inputValue, setInputValue] = useState('');

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

      <TextInput
        style={styles.input}
        placeholder="Digite o que esta achando do nosso app "
        value={inputValue}
        onChangeText={setInputValue}
      />

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
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
});

