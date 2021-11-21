import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cities from "../screens/Cities/Cities";

const Stack = createStackNavigator();

export default function CitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cities"
        component={Cities}
        options={{ title: "Lista de ciudades" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
