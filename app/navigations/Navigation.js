import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

import HomeStack from "./HomeStack";
import CitiesStack from "./CitiesStack";
import AboutUsStack from "./AboutUsStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          activeBackgroundColor: "#4d4d4d",
          inactiveBackgroundColor: "#333333",
          inactiveTintColor: "#cccccc",
          activeTintColor: "#f2f2f2",
          style: {
            backgroundColor: "#f2f2f2",
          },
        }}
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen 
          name="home"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="cities"
          component={CitiesStack}
          options={{ title: "Ciudades" }}
        />
        <Tab.Screen
          name="about-us"
          component={AboutUsStack}
          options={{ title: "Nosotros" }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
  
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "home":
      iconName = "home-outline";
      break;
    case "cities":
      iconName = "city";
      break;
    case "about-us":
      iconName = "account-multiple-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={30} color={"#fff"} />
  );

  
}
const styles = StyleSheet.create({
  stacks: {
    backgroundColor: "#4d4d4d",
  },
})

