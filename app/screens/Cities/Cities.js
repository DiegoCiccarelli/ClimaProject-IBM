import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import CityList from "../../components/Cities/CityList";

export default function Cities(props) {
  const { navigation } = props;
  return (
    <View style={styles.viewBody}>
      <CityList></CityList>
      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#016278"
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("add-citie")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
