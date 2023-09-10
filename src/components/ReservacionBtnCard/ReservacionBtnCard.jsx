import React, { useState } from 'react';
import { View,TouchableOpacity, Text} from 'react-native';
import { styles } from './ReservacionBtnCard.styles';

export const ReservacionBtnCard = () => {
//  bOTON RESRVA 
const [reservar,setReservar ] = useState('');
const irReservar = () => {
  // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
  console.log('llendo a Reservar:', reservar);
  // También puedes borrar el texto después de enviarlo si lo deseas.
  setReservar('');
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
                        style={styles.itemBoton}
                        onPress={irReservar}>
                        <Text style={styles.itemTextoBoton}>Reservar</Text>
                    </TouchableOpacity>
     </View> 

     </View> 

       );
     };