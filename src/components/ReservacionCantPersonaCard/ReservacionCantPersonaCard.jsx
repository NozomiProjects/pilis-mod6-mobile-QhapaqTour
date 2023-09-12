import React, { useState } from 'react';
import { View,TouchableOpacity, Text} from 'react-native';
import { styles } from './ReservacionCantPersonaCard.styles';

export const ReservacionCantPersonaCard = () => {
    const [count, setCount] = useState(1);

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

        {/*COdigo de la fila de cantidad de personas  */}
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
    </View>
      );
    };
    