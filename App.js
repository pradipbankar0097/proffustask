import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './screens/Menu';
import Categories from './screens/Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCnfIXpbx0tioO5X0Q8XyCkQYrCWugSCPs",
    authDomain: "proffustask.firebaseapp.com",
    projectId: "proffustask",
    storageBucket: "proffustask.appspot.com",
    messagingSenderId: "825377877884",
    appId: "1:825377877884:web:da7c21572e41db04047ef9",
    measurementId: "G-NY98VMG81S"
});

export var db = firebase.firestore();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center',  }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions=
      {{
        "tabBarActiveTintColor": "green",
        "tabBarInactiveTintColor": "gray",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen name="Menu" component={Categories} options={{ headerShown:false, title:"Categories", tabBarIcon: ({ color, size }) => (
                      <Icon name={"bars"} size={size} color={color} />
                    ), }}/>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <Icon name={"home"} size={size} color={color} />
        ), }}
      />
      <Tab.Screen name="Account" component={HomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <Icon name={"user"} size={size} color={color} />
        ), }}
      />
      <Tab.Screen name="Settings" component={HomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <Icon name={"cog"} size={size} color={color} />
        ), }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
