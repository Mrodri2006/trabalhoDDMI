import { View, Text } from 'react-native';
import styles from '../styles';

export default function Sobre() {
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
    </View>
  );
}

