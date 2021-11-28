import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState }from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem, Image } from "react-native-elements";
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
                    titleStyle={{color: "#fff", fontSize: 17, fontWeight: "300"}}
                
                    bottomDivider

                    onPress={()=> { 
                        verClima(city.id, city.lat, city.long, city.name);
                    }}

                    containerStyle={{
                        flex: 1,    
                        backgroundColor: "#4d4d4d",
                        borderStyle: "solid",
                        borderColor:"#4d4d4d",
                        borderWidth: 1.5,
                        borderRadius: 20,
                        padding: 27,
                        marginTop:5,
                        marginBottom: 15,
                        marginLeft: 25,
                        width: "80%",                        
                    }}
                    
                />

                
                
            ))
        }

        
        </View>
        
    )        
}






export default CityList;