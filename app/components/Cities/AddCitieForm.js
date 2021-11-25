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
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import Modal from "../Modal";

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
      <Map isVisibleMap={isVisibleMap} setIsVisibleMap={setIsVisibleMap} />
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
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const resultPermissions = await Permissions.askAsync(
        Permissions.LOCATION
      );
      console.log(resultPermissions);
      const statusPermissions = resultPermissions.status;
      if (statusPermissions === "granted") {
        const loc = await Location.getCurrentPositionAsync({});
        console.log(loc);
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      } else {
        toastRef.current.show(
          "Tienes que aceptar los permisos de localizacion",
          3000
        );
      }
    })();
  }, []);

  return (
    <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>
      <View>
        {location && (
          <MapView
            style={styles.mapStyle}
            initialRegion={location}
            showsUserLocation={true}
            onRegionChange={(region) => setLocation(region)}
          >
            <MapView.Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              draggable
            ></MapView.Marker>
          </MapView>
        )}
      </View>
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
  mapStyle: {
    width: "100%",
    height: 550,
  },
});
