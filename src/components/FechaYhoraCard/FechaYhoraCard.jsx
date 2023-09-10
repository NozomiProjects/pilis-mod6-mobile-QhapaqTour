import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {styles} from './FechaYhoraCard'
import { Modal, View, TouchableOpacity, Text} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import {getToday, getFormateDate} from 'react-native-modern-datepicker';

export const FechaYhoraCard = () => {
  const today= new Date();
  const startDate=getFormateDate(today.setDate(today.getDate()+ 1), 'YYYY/MM/DD')
  const [open, setOpen]= useState(false)
  const [date, setDate]= useState('12/12/2023')

      function handleOnPress(){
        setOpen(!open);
      }

      function handleChange(){
        setDate(propDate)
      }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleOnPress}>
          <Text> Open </Text>
        </TouchableOpacity>

        <Modal
        animationType='slide'
        transparent={true}
        visible={open}
        >

          <View style={styles.centeredView}>
            <View style={styles.modalView}>

                <DatePicker
                mode='calendar'
                minimunDate={startDate}
                selected={date}
                onDateChanged={handleChange}
                />

                <TouchableOpacity onPress={handleOnPress}>
                 <Text> Close </Text>
                 </TouchableOpacity>
            </View>
          </View>

        </Modal>

        <StatusBar style="auto"/>
    </View>
  );
}
