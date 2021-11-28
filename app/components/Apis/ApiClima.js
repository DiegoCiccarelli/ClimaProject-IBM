import React, {useState, useEffect} from "react";
import { Text, View, Image} from "react-native";



const ApiClima = (props)=>{

    const apiKey = "21b02c683d4913950448a67fc7ff5f79";
    const url = "api.openweathermap.org/data/2.5/weather";
    const lat = props.lat;
    const long = props.long;

    const [clima, setClima] = useState({});
    const [descripcion, setDescripcion] = useState("");
    const [urlImage, setUrlImage] = useState("http://openweathermap.org/img/w/10d.png")

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=-31.366009433307944&lon=-64.2157113365829&appid=21b02c683d4913950448a67fc7ff5f79&units=metric&lang=es")
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
            <Text>{descripcion}</Text>
            <Text>Temperatura Actual: {clima.temp}</Text>
            <Text>Sensación Térmica: {clima.feels_like}</Text>
            <Text>Humedad: {clima.humidity}%</Text>
            <Image
                source={{ uri: urlImage }}
                style={{ width: 100, height: 100 }}/>
        </View>
       
    );
}

export default ApiClima;
