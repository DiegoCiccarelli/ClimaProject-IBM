import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();


  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
          source={require("../../../ClimaProject-IBM/assets/img/logo-01.jpg")}
          resizeMode="contain"
          style={styles.logo}
      />
      <Text style={styles.title}>¡El clima a toda hora!</Text>
      <Text style={styles.description}> CLIMAYA es la aplicación que te ofrece toda la información climática de distintas ciudades del mundo.</Text>

      <View style={styles.viewBtn}>
        <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainter}
        title="BUSCAR CIUDAD"
        onPress={() => navigation.navigate("Cities")}
        />
      </View>
      <Image
          source={require("../../../ClimaProject-IBM/assets/img/linea-02.png")}
          resizeMode="contain"
          style={styles.line}
      />
      <Text style={styles.subTitle}>¿Cómo utilizarla?</Text>
      <Text style={styles.description}> En el panel Ciudades, agregá la ciudad que quieras conocer el clima. Una vez agregada, el clima se actualizará constantemente.</Text>
      <Text style={styles.subDescription}>¡Agregá las ciudades que necesites!</Text>
      <View style={styles.viewBtn}>
        <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainter}
        title="NUESTRA HISTORIA"
        onPress={() => navigation.navigate("AboutUs")}
        />
      </View>
      <Image
          source={require("../../../ClimaProject-IBM/assets/img/logo-01.jpg")}
          resizeMode="contain"
          style={styles.footerImg}
      />
      <Text style={styles.footerText}> ClimaYA © Todos los derechos reservados </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: "#ffffff",
  },

  logo: {
    height: 200,
    width: "100%",
  },

  title: {
    fontWeight:"700",
    fontSize: 26,
    marginBottom: 10,
    textAlign: "center",
  },

  description: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 17,
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
    backgroundColor: "#016278",
    margin: 20,
  },

  btnContainter: {
    width: "70%",
  },

  subTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },

  subDescription: {
    marginTop: 0,
    marginBottom: 30,
    fontWeight: "700",
    textAlign: "center",
    fontSize: 17,
  },

  line: {
    height: 60,
    width: "80%",
    alignSelf:"center"
  },

  footerImg: {
    height: 60,
    width:"100%",
    alignSelf: "center",
    marginTop: 20,
  },

  footerText: {
    fontSize:10,
    textAlign:"center",
    marginBottom: 10,

  },

});
