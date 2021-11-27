import React, {useEffect, useState }from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../../utils/firebase";
import ApiClima from "../Apis/ApiClima";


const CityList = () => {

    const [cities, setCity] = useState([])

    useEffect(() => {
       firebase.db.collection("cities").onSnapshot(querySnapshot => {

        const cities = [];

            querySnapshot.docs.forEach(doc => {
               const {name} = doc.data()
                cities.push({
                   
                    id : doc.id,
                    city: name
                    
                })

            })

            setCity(cities);
        

       })
    }, [])

    
    return (
      
        <View>
        {
            cities.map((city) => (
                
                <ListItem
                    key={city.id}
                
                    title={city.city} 
                
                    bottomDivider

                    // onPress={OpenClima((city.id, city.city, )=>)}
                />
                
            ))
        }

        
        </View>
        
    )        
}

export default CityList;