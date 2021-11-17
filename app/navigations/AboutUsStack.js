import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AboutUs from "../screens/AboutUs";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={AboutUs}
        options={{ title: "Información sobre nosotros" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
