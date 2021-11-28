import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ApiClima from "../../components/Apis/ApiClima";



const Clima = (props) => {
    
    // const [id, setid] = useState(props.route.params.id);
    // const [lat, setlat] = useState(props.route.params.lat);
    // const [long, setlong] = useState(props.route.params.lat);
    // const [name, setname] = useState(props.route.params.name);

    
return(
   <View style={styles.viewBody}>
       <Text style={styles.title}>Clima Actual en la Ciudad de {props.route.params.name}</Text>
       <ApiClima
            lat={props.route.params.lat}
            long={props.route.params.long}
       />
     
   </View>
    
)
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#4d4d4d"
        
      },
    title: {
        color: "#f2f2f2",
        fontSize: 27,
        fontWeight: "700",
        marginTop: 20,
        marginBottom: 30,
        marginLeft:30,
        marginRight:30,
        textAlign: "center",
    },
});

export default Clima;