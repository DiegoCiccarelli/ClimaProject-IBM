import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";
import Modal from "../Modal";
import * as Location from "expo-location";

export default function AddCitieForm(props) {
  const { toastRef, setIsLoading, navigation } = props;

  const [cityName, setCityName] = useState("");
  const [cityAddress, setCityAddress] = useState("");
  const [isVisibleMap, setIsVisibleMap] = useState(false);

  const addCity = () => {
    console.log("ok");
    console.log("cityName: " + cityName);
    console.log("cityAddress: " + cityAddress);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <FormAdd
        setCityName={setCityName}
        setCityAddress={setCityAddress}
        setIsVisibleMap={setIsVisibleMap}
      />
      <Button
        title="Agregar Ciudad"
        onPress={addCity}
        buttonStyle={styles.btnAddCity}
      />
      <Map isVisibleMap={isVisibleMap} setIsVisibleMap={setIsVisibleMap}></Map>
    </ScrollView>
  );
}

function FormAdd(props) {
  const { setCityName, setCityAddress, setIsVisibleMap } = props;

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
        rightIcon={{
          type: "material-community",
          name: "google-maps",
          color: "#c2c2c2",
          onPress: () => setIsVisibleMap(true),
        }}
      />
    </View>
  );
}

function Map(props) {
  const { isVisibleMap, setIsVisibleMap } = props;

  useEffect(() => {
    (async () => {
      const resultPermissions = await Permissions.askAsync(
        Permissions.LOCATION
      );
      console.log(resultPermissions);
    })();
  }, []);

  return (
    <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>
      <Text>Mapa</Text>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    backgroundColor: "#fff",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },
  btnAddCity: {
    backgroundColor: "#016278",
    margin: 20,
  },
});
