import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: '#eef6f9' }]}>
      <Text style={styles.header}>SkillLink</Text>
      
      <Text style={styles.subheader}>
        Seu aplicativo para encontrar as melhores vagas de emprego e crescer na carreira.
      </Text>
      
      <Image source={require('../assets/logo8.png')} style={styles.imagemLogo} />

      <Text style={styles.footerText}>
        Navegue pelas vagas e encontre a oportunidade ideal para você.
      </Text>
    </View>
  );
}
