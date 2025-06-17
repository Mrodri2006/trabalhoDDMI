import { StyleSheet, Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme === 'dark' ? '#121212' : '#f9f9f9',
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: colorScheme === 'dark' ? '#000' : '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: colorScheme === 'dark' ? 0.3 : 0.1,
    shadowRadius: 10,
    elevation: 6,
    width: '100%',
    maxWidth: 400,
  },

  imagemLogo: {
    width: 180,
    height: 180,
    marginBottom: 24,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: colorScheme === 'dark' ? '#3ddc84' : '#1a5c47',
  },

  title: {
    fontSize: 26,
    fontWeight: '900',
    color: colorScheme === 'dark' ? '#3ddc84' : '#1a5c47',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: colorScheme === 'dark' ? 'rgba(61,220,132,0.5)' : 'transparent',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  paragraph: {
    fontSize: 17,
    color: colorScheme === 'dark' ? '#ddd' : '#444',
    marginBottom: 16,
    lineHeight: 26,
    textAlign: 'justify',
  },

  date: {
    fontSize: 14,
    color: colorScheme === 'dark' ? '#999' : '#888',
    marginTop: 24,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  // Estilo para botão/ícone interativo
  buttonIcon: {
    alignSelf: 'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 50,
    backgroundColor: colorScheme === 'dark' ? '#3ddc84' : '#1a5c47',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
  fontSize: 26,
  fontWeight: 'bold',
  color: '#1a5c47',
  marginBottom: 12,
  textAlign: 'center',
},
subheader: {
  fontSize: 16,
  color: '#3a3a3a',
  marginBottom: 24,
  paddingHorizontal: 20,
  textAlign: 'center',
  lineHeight: 22,
},
imagemLogo: {
  width: 150,
  height: 150,
  resizeMode: 'contain',
  marginBottom: 24,
  alignSelf: 'center',
},
footerText: {
  fontSize: 14,
  color: '#555',
  textAlign: 'center',
  paddingHorizontal: 20,
},

});

