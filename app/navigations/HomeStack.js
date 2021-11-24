import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import AddCitie from "../screens/Cities/AddCitie";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="restaurants"
        component={Home}
        options={{ title: "Home Stack" }}
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
