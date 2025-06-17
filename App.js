import { Text, View } from 'react-native';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Config from './screens/Config';
import Sobre from './screens/Sobre';
import Vagas from './screens/Vagas';
import Localizacao from './screens/Localizacao';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#1a5c47",
          tabBarActiveBackgroundColor: "#a5d1c3",
          tabBarLabelStyle: { fontSize: 12, fontWeight: '900' }
        }}
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{ tabBarIcon: () => <Icon name="home" size={20} /> }}
        />

        <Tab.Screen
          name="Configurações"
          component={Config}
          options={{ tabBarIcon: () => <Icon name="settings" size={20} /> }}
        />

        <Tab.Screen
          name="Vagas"
          component={Vagas}
          options={{ tabBarIcon: () => <Icon name="briefcase" size={20} /> }}
        />

        <Tab.Screen
          name="Localizacao"
          component={Localizacao}
          options={{ tabBarIcon: () => <Icon name="location" size={20} /> }}
        />

        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: () => <Icon name="information-circle" size={20} />,
            tabBarBadge: 2,
            tabBarBadgeStyle: { backgroundColor: "green", color: "white" }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
