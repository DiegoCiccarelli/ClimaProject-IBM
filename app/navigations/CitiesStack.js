import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cities from "../screens/Cities/Cities";
import AddCitie from "../screens/Cities/AddCitie";
import Clima from "../screens/Cities/Clima";


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
      <Stack.Screen
      name="ciudades"
      component={Cities}
      options={{ title: "Buscar ciudades"}}
      />
      <Stack.Screen
      name="clima"
      component={Clima}
      options={{title: "Clima"}}
      />
    </Stack.Navigator>


  );
}
