import React, { useState } from 'react';
import { View,TouchableOpacity, Text} from 'react-native';
import { styles } from './ReservaDatos.styles';

export const ReservaDatos = () => {
//  bOTON RESRVA 
const [reservar,setReservar ] = useState('');
const [count, setCount] = useState(1);
const irReservar = () => {
  // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
  console.log('llendo a Reservar:', reservar);
  // También puedes borrar el texto después de enviarlo si lo deseas.
  setReservar('');
};

          {/*FECHA Y HORA  */}
          const [selectedOption, setSelectedOption] = useState('hours');
  const [hours, setHours] = useState(15);
  const [minutes, setMinutes] = useState(1);

  const decreaseValue = () => {
    if (selectedOption === 'hours') {
      if (hours > 0) {
        setHours(hours - 1);
      }
    } else {
      if (minutes > 0) {
        setMinutes(minutes - 1);
      }
    }
  };

  const increaseValue = () => {
    if (selectedOption === 'hours') {
      if (hours < 23) {
        setHours(hours + 1);
      }
    } else {
      if (minutes < 59) {
        setMinutes(minutes + 1);
      }
    }
  };

  const toggleOption = () => {
    setSelectedOption(selectedOption === 'hours' ? 'minutes' : 'hours');
  };


//CODIGO DE CANTIDAD E PERSONAS
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    // Puedes establecer un límite máximo si lo deseas, por ejemplo, 10 personas.
    // if (count < 10) {
    setCount(count + 1);
    }




 
  return (
    <View style={styles.container}> 
        <Text style={styles.itemTitulo}> San Francisco </Text>


        <Text style={styles.itemSubTitulo}>Selecciona la fecha</Text>
        




          {/*FECHA Y HORA  */}
        <Text style={styles.itemSubTitulo}>Selecciona el horario</Text>
                <View style={styles.itemHFContainer}>
                <TouchableOpacity onPress={toggleOption} style={styles.timeContainer}>
                  <View
                    style={[
                      styles.timeBox,
                      selectedOption === 'hours' && styles.selectedOption,
                    ]}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        selectedOption === 'hours' && styles.selectedText,
                      ]}
                    >
                      {hours}
                    </Text>
                  </View>
                  
                </TouchableOpacity>
                  <Text style={styles.colon}>:</Text>
                  <TouchableOpacity onPress={toggleOption} style={styles.timeContainer}>

                  <View
                    style={[
                      styles.timeBox,
                      selectedOption === 'minutes' && styles.selectedOption,
                    ]}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        selectedOption === 'minutes' && styles.selectedText,
                      ]}
                    >
                      {minutes}
                    </Text>
                  </View>
                </TouchableOpacity>


                <View style={styles.controls}>
                <TouchableOpacity onPress={increaseValue} style={styles.controlButton}>
                    <Text style={styles.controlButtonText}>^</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={decreaseValue} style={styles.controlButton}>
                    <Text style={styles.controlButtonTextB}>v</Text>
                  </TouchableOpacity>
                  
                </View>
              </View>





          {/*COdigo de la fila de cantidad de personas  */}
        <Text style={styles.itemSubTitulo}>Inicia la cantidad de pasajeros</Text>
          <View style={styles.itemContainer}>
              <Text style={styles.label}>Personas</Text>
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={decreaseCount} style={styles.button}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity onPress={increaseCount} style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>




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
