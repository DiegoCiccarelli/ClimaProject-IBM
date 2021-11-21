import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cities from "../screens/Cities/Cities";
import AddCitie from "../screens/Cities/AddCitie";

const Stack = createStackNavigator();

export default function CitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cities"
        component={Cities}
        options={{ title: "Lista de ciudades" }}
      />
      <Stack.Screen
        name="add-citie"
        component={AddCitie}
        options={{ title: "Añadir nueva ciudad" }}
      />
    </Stack.Navigator>
  );
}
