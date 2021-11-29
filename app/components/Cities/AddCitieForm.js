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

import firebase from "../../utils/firebase";
import { color } from "react-native-reanimated";

export default function AddCitieForm(props) {
  const { toastRef, setIsLoading, navigation } = props;

  const [cityName, setCityName] = useState("");
  const [cityAddress, setCityAddress] = useState("");
  const [isVisibleMap, setIsVisibleMap] = useState(false);
  const [locationCity, setLocationCity] = useState(null);

  const addCity = async () => {
    if (!cityName || !cityAddress) {
      toastRef.current.show("Todos los campos del formulario son obligatorios");
    } else if (!locationCity) {
      toastRef.current.show("Su ubicacion en el mapa fue guardada");
    } else {
      await firebase.db.collection("cities").add({
        name: cityName,
        adress: cityAddress,
        location: locationCity,
      });

      await toastRef.current.show("Ciudad AGREGADA correctamente");

      props.navigation.navigate("cities");
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <FormAdd
        setCityName={setCityName}
        setCityAddress={setCityAddress}
        setIsVisibleMap={setIsVisibleMap}
        locationCity={locationCity}
      />
      <Button
        title="Agregar Ciudad"
        onPress={addCity}
        buttonStyle={styles.btnAddCity}
      />
      <Map
        isVisibleMap={isVisibleMap}
        setIsVisibleMap={setIsVisibleMap}
        setLocationCity={setLocationCity}
        toastRef={toastRef}
      />
    </ScrollView>
  );
}

function FormAdd(props) {
  const { setCityName, setCityAddress, setIsVisibleMap, locationCity } = props;

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
          color: locationCity ? "#016278" : "#c2c2c2",
          onPress: () => setIsVisibleMap(true),
        }}
      />
    </View>
  );
}

function Map(props) {
  const { isVisibleMap, setIsVisibleMap, setLocationCity, toastRef } = props;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const resultPermissions = await Permissions.askAsync(
        Permissions.LOCATION
      );
      const statusPermissions = resultPermissions.status;
      if (statusPermissions === "granted") {
        const loc = await Location.getCurrentPositionAsync({});
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

  const confirmLocation = () => {
    setLocationCity(location);
    toastRef.current.show("Localizacion guardada correctamente");
    setIsVisibleMap(false);
  };

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
        <View style={styles.viewMapBtn}>
          <Button
            title="Guardar Ubicacion"
            containerStyle={styles.viewMapBtnContainerSave}
            buttonStyle={styles.viewMapBtnSave}
            onPress={confirmLocation}
          />
          <Button
            title="Cancelar Ubicacion"
            containerStyle={styles.viewMapBtnContainerCancel}
            buttonStyle={styles.viewMapBtnCancel}
            onPress={() => setIsVisibleMap(false)}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    backgroundColor: "#f2f2f2",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  input: {
    color: "#f2f2f2",
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
  viewMapBtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  viewMapBtnContainerCancel: {
    paddingLeft: 5,
  },
  viewMapBtnCancel: {
    backgroundColor: "#a60d0d",
  },
  viewMapBtnContainerSave: {
    paddingRight: 5,
  },
  viewMapBtnSave: {
    backgroundColor: "#016278",
  },
});
