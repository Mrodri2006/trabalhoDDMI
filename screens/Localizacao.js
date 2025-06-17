import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useState } from 'react';

export default function App() {
  const [local, setLocal] = useState({
    latitude: -31.3291509,
    longitude: -54.10779,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nossa Sede</Text>

      <MapView 
        style={styles.mapa}
        initialRegion={{
          latitude: -31.3291509,
          longitude: -54.10779,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType='satellite'
        onPress={ponto => {
          setLocal({
            ...local,
            latitude: ponto.nativeEvent.coordinate.latitude,
            longitude: ponto.nativeEvent.coordinate.longitude
          });
        }}
      >
        <Marker coordinate={local} />
        <Marker
          coordinate={{ latitude: 34.0194, longitude: -118.411 }}
          title='Nossa sede'
          description='Nossa empresa física, tem sede em Los Angeles'
        />
      </MapView>
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
  mapa: {
    width: '90%',
    height: '60%',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
});
