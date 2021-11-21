import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";

export default function AddCitieForm(props) {
  const { toastRef, setIsLoading, navigation } = props;

  const [cityName, setCityName] = useState("");
  const [cityAddress, setCityAddress] = useState("");

  const addCity = () => {
    console.log("ok");
    console.log("cityName: " + cityName);
    console.log("cityAddress: " + cityAddress);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <FormAdd setCityName={setCityName} setCityAddress={setCityAddress} />
      <Button
        title="Agregar Ciudad"
        onPress={addCity}
        buttonStyle={styles.btnAddCity}
      />
    </ScrollView>
  );
}

function FormAdd(props) {
  const { setCityName, setCityAddress } = props;

  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Nombre de la Ciudad"
        containerStyle={styles.input}
        onChange={(e) => setCityName(e.nativeEvent.text)}
      />
      <Input
        placeholder="Dirección"
        containerStyle={styles.input}
        onChange={(e) => setCityAddress(e.nativeEvent.text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnAddCity: {
    backgroundColor: "#00a680",
    margin: 20,
  },
});
