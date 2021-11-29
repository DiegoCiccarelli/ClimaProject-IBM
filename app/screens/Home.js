import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function Home() {
  const navigation = useNavigation();
  const [show] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(show, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <ImageBackground
        source={require("../../../ClimaProject-IBM/assets/img/background-02.png")}
        resizeMode="cover"
        style={styles.imageBack}
      >
        <Animated.Image
          source={require("../../../ClimaProject-IBM/assets/img/logo-01.png")}
          resizeMode="contain"
          style={[styles.logo, { opacity: show }]}
        />
        <Text style={styles.title}>¡El clima a toda hora!</Text>
        <Text style={styles.subtitle}>
          {" "}
          CLIMAYA es la aplicación que te ofrece toda la información climática
          de distintas ciudades del mundo.
        </Text>
        <View style={styles.viewBtn}>
          <Button
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainter}
            title="LISTADO DE CIUDADES"
            onPress={() => navigation.navigate("cities")}
          />
        </View>
        <Text style={styles.description}>
          {" "}
          En el panel Ciudades, agregá la ciudad que quieras conocer el clima.
          Una vez agregada, el clima se actualizará constantemente.
        </Text>
        <Text style={styles.subDescription}>
          ¡Agregá las ciudades que necesites!
        </Text>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },

  imageBack: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 750,
  },

  logo: {
    height: 170,
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
  },

  title: {
    color: "#f2f2f2",
    fontWeight: "700",
    fontSize: 26,
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    color: "#f2f2f2",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 19,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  viewBtn: {
    flex: 1,
    alignItems: "center",
  },

  btnStyle: {
    backgroundColor: "#999999",
    marginBottom: 0,
    marginTop: 10,
  },

  btnContainter: {
    width: "60%",
  },

  description: {
    color: "#f2f2f2",
    fontWeight: "400",
    textAlign: "center",
    fontSize: 17,
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  subDescription: {
    color: "#f2f2f2",
    marginTop: 0,
    marginBottom: 100,
    fontWeight: "700",
    textAlign: "center",
    fontSize: 17,
  },
});
