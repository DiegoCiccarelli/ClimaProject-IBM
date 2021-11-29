import React, {useState, useEffect} from "react";
import { Text, View, Image, StyleSheet, ImageBackground} from "react-native";



const ApiClima = (props)=>{

    const apiKey = "21b02c683d4913950448a67fc7ff5f79";
    const url = "api.openweathermap.org/data/2.5/weather";
    const lat = props.lat;
    const long = props.long;

    const [clima, setClima] = useState({});
    const [descripcion, setDescripcion] = useState("");
    const [urlImage, setUrlImage] = useState("http://openweathermap.org/img/w/10d.png")

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => response.json())
        .then(json => {
            setClima(json.main);
            setDescripcion(json.weather[0].description);
            setUrlImage("http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");

        })
        .catch(error => alert(error));

        


        
        

    }, [])

    
    return(
        <View>
           
            
            
            <Text style={styles.description} >Temperatura Actual: {clima.temp}°</Text>
            <Text style={styles.description}>Sensación Térmica: {clima.feels_like}°</Text>
            <Text style={styles.description}>Humedad: {clima.humidity}%</Text>
            <Text style={styles.subDescription}>{descripcion}</Text>
            <Image
                source={{ uri: urlImage }}
                style={{ width: 150, height: 100, alignSelf:"center", marginTop:15}}/>
        
        </View>
       
    );
}

const styles = StyleSheet.create({
    
    subDescription: {
        color: "#f2f2f2",
        textTransform:"uppercase",
        fontSize: 19,
        fontWeight: "700",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        textAlign: "center"
    
    },

    description: {
        color: "#f2f2f2",
        fontSize: 19,
        fontWeight: "500",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        textAlign: "center"
    }
});

export default ApiClima;
