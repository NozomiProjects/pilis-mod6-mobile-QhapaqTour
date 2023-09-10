import {Calendar,LocaleConfig} from 'react-native-calendars';
import React, {useState} from 'react';
import { View,SafeAreaView,Text } from 'react-native';
import { styles } from './ExploreScreen.style';
import {ReservacionBtnCard} from './../../components/ReservacionBtnCard/ReservacionBtnCard';
import {ReservacionCantPersonaCard} from './../../components/ReservacionCantPersonaCard/ReservacionCantPersonaCard';
import { ReservacionFechaHora } from '../../components/ReservacionFechaHora/ReservacionFechaHora';

//lenguaje configurado para español
LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Novi', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mir.', 'Jue.', 'Vie.', 'Sab.'],
  today: "Hoy es"
};

LocaleConfig.defaultLocale = 'es';

export const ReservaScreen = () => {

  return (
    <SafeAreaView styles={styles.container}>
        <Text style={styles.itemTitulo}> San Francisco </Text>
        
        <Text style={styles.itemSubTitulo}>Selecciona la fecha</Text>


      {/**es calendario */}

          <View style={styles.itemCalendario}>
            <Calendar
            //stilo de seleccion en general de calendar
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius:20,
              borderWidth:1,
              marginBottom:20,
              marginTop:20,              
            }}
        
              // Configuración para mostrar solo un mes a la vez y hacer scroll horizontal
              horizontal={true}
              pagingEnabled={true}
              // Establecer un borderRadius de 10 y color naranja para cada mes
              monthFormat={'MMMM yyyy'}
              theme={{
                textMonthFontWeight: 'bold',
                textMonthFontSize: 20,
                'stylesheet.calendar.header': {
                  
                  header: {
                    backgroundColor: 'white',
                    paddingTop: 1,
                    flexDirection:'row',
                    paddingTop:1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 1,
                  },
                  monthText: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                  },
                },
              }}
              // Puedes manejar la selección de fechas utilizando el callback
              onDayPress={(day) => {
                console.log('Fecha seleccionada:', day);
              }}
            />
          </View>
              {/*FECHA Y HORA  */}
        <Text style={styles.itemSubTitulo1}>Selecciona el horario</Text>
                            <ReservacionFechaHora/>

        <Text style={styles.itemSubTitulo}>Inicia la cantidad de pasajeros</Text>
          {/*COdigo de la fila de cantidad de personas  */}
                            <ReservacionCantPersonaCard/>

            {/*COdigo de la fila dodne esta el boton y el precio  */}
                             <ReservacionBtnCard/>
            
        </SafeAreaView>

  );
};

