import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AboutUs() {
  const navigation = useNavigation();
  
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      
      <Text style={styles.title}>Sobre nosotros...</Text>
      <Text style={styles.description}> Somos Diego, Fernando, María e Irina, estudiantes de Programación y creadores de CLIMAYA</Text>

      
      <Image
          source={require("../../../ClimaProject-IBM/assets/img/linea-02.png")}
          resizeMode="contain"
          style={styles.line}
      />
      <Text style={styles.subTitle}>Herramientas UX</Text>
      <Text style={styles.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <View style={styles.viewBtn}>
        <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainter}
        title="HOME"
        onPress={() => navigation.navigate("Home")}
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

  title: {
    fontWeight:"700",
    fontSize: 24,
    marginBottom: 10,
    marginTop: 40,
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
    fontSize: 19,
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
