import React, {useState} from "react";
import { View, Text } from "react-native";
import ApiClima from "../../components/Apis/ApiClima";



const Clima = (props) => {
    
    // const [id, setid] = useState(props.route.params.id);
    // const [lat, setlat] = useState(props.route.params.lat);
    // const [long, setlong] = useState(props.route.params.lat);
    // const [name, setname] = useState(props.route.params.name);

    
return(
   <View>
       <Text> Clima Actual para la ciudad de {props.route.params.name}</Text>
       <ApiClima
            lat={props.route.params.lat}
            long={props.route.params.long}
       />
     
   </View>
    
)
}

export default Clima;