import React from "react";
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground, Linking} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


export default function AboutUs() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <ImageBackground 
      source={require("../../../ClimaProject-IBM/assets/img/background-02.png")}
      resizeMode="cover"
      style={styles.imageBack}
      > 
      
      <Text style={styles.title}>Sobre nosotros</Text>
      <Text style={styles.subtitle}> CLIMAYA nace de la idea de crear una app amigable que sea útil para la vida diaria, brindando la información del clima necesaria para el día a día de cualquier persona. </Text>
      <View style={styles.weareContainer}>
        <Text style={styles.weare}>Somos Diego, Fernando, María e Irina, programadores y creadores de la app.</Text>
        </View>
      <Text style={styles.title}>Herramientas UX</Text>
      <Text style={styles.description}> Listado de herramientas UX utilizadas:</Text>
      <View style={styles.viewBtn}>
        <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainter}
        title="Maquetación app"
        onPress={() => Linking.openURL("https://excalidraw.com/#room=6e9d8ccec87db801408d,-2oTEMy8ALAZhIw51Y9SOw")}
        />
      
        <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainter}
        title="Prototipado diseño"
        onPress={() => Linking.openURL("https://app.moqups.com/05yL8fRWiEKHUHwqtFazFlmzoAZ2IVST/view/page/ae8fe8eb0")}
        />
      
        <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainter}
        title="GitHub"
        onPress={() => Linking.openURL("https://github.com/DiegoCiccarelli/ClimaProject-IBM")}
        />
      </View>
      

     
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

  
  title: {
    color: "#f2f2f2",
    fontWeight:"700",
    fontSize: 26,
    marginTop: 30,
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

  weareContainer: {
    
    borderStyle: "solid",
    borderColor:"#f2f2f2",
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 20,
  },

  weare: {
    color: "#f2f2f2",
    fontWeight: "300",
    textAlign: "center",
    opacity: 10,
    fontSize: 17,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },


  viewBtn: {
    flex: 3,
    alignItems:"center",

    },

  btnStyle: {
    
    backgroundColor: "#999999",
    marginBottom: 10,
    marginTop: 10,
  },

  btnContainter: {
    width: "50%",
  },




});