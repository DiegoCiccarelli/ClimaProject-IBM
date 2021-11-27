import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import AddCitie from "../screens/Cities/AddCitie";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator style={styles.stacks}>

      <Stack.Screen 
        name="restaurants"
        component={Home}
        options={{ title: "Home" }}
      />

      <Stack.Screen
      name="AboutUs"
      component={AboutUs}
      options={{ title: "Sobre nosotros"}}
      />

      <Stack.Screen
      name="Cities"
      component={AddCitie}
      options={{ title: "Buscar ciudades"}}
      />
      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  stacks: {
    backgroundColor: "#4d4d4d",
  },
})

