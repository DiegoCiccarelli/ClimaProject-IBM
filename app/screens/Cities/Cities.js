import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import CityList from "../../components/Cities/CityList";

export default function Cities(props) {
  const { navigation } = props;
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <ImageBackground 
      source={require("../../../assets/img/background-02.png")}
      resizeMode="contain"
      style={styles.imageBack}
      > 
     

      <CityList navigation={navigation}></CityList>

     
      
      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#4d4d4d"
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("add-citie")}
      />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignContent:"center",
  },
  imageBack: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 640,
  },

  

  btnContainer: {
    position: "absolute",
    bottom: 20,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
