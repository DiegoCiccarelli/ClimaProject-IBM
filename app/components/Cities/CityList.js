import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState }from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { NativeViewGestureHandler, ScrollView } from "react-native-gesture-handler";
import firebase from "../../utils/firebase";



const CityList = (props) => {
   
    const [cities, setCity] = useState([])
    

    useEffect(() => {
       firebase.db.collection("cities").onSnapshot(querySnapshot => {

        const cities = [];

            querySnapshot.docs.forEach(doc => {
               const {name, location} = doc.data()
                cities.push({
                   
                    id : doc.id,
                    name: name,
                    lat: location.latitude,
                    long: location.longitude
                    
                })

            })

            setCity(cities);
        

       })
    }, [])

   const verClima = (id, lat, long, name) => {
   
    props.navigation.navigate("clima", {id, lat, long, name});
 
   }
    
    return (
      
        <View>
        {   
            cities.map((city) => (

                <ListItem
                    key={city.id}
                
                    title={city.name} 
                
                    bottomDivider

                    onPress={()=> { 
                        verClima(city.id, city.lat, city.long, city.name);
                    }}
                
                />
                
            ))
        }

        
        </View>
        
    )        
}




export default CityList;