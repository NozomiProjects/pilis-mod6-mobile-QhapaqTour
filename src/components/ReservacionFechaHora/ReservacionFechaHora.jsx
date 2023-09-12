import React, { useState } from 'react';
import { View,TouchableOpacity,SafeAreaView, Text} from 'react-native';
import { styles } from './ReservacionFechaHora.styles';

export const ReservacionFechaHora = () => {
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
       
  return (
    <SafeAreaView style={styles.container}> 
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
    </SafeAreaView>  
  );
};