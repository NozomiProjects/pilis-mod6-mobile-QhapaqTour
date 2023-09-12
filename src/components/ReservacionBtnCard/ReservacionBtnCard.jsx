import React, {  useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,TouchableOpacity, Text} from 'react-native';
import { styles } from './ReservacionBtnCard.styles';

export const ReservacionBtnCard = () => {
  
  const navigation = useNavigation();
//  bOTON RESRVA 
const [ReservaScreen,setReserva ] = useState([]);

const irReserva = () => {
  console.log('llendo a Reservar:', ReservaScreen);
 // navigation.navigate('Reserva');
  setReserva('');
};

return (
  <View style={styles.container}> 

   
    {/*COdigo de la fila dodne esta el boton y el precio  */}
    <View style={styles.itemRowContainerBtn}>
                <View style={styles.itemColumn}>
                    <Text style={styles.itemPrecioPalabra}>Costo Total</Text>
                    <Text style={styles.itemPrecio}>$8000</Text>
                </View>            
                    <TouchableOpacity
                        style={styles.itemBoton} onPress={irReserva}>
                        <Text style={styles.itemTextoBoton}>Reservar</Text>
                    </TouchableOpacity>
     </View> 

     </View> 

       );
     };