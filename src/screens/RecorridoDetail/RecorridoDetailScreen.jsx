import React from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import { styles } from './RecorridoDetailScreen.styles'

export const RecorridoDetailScreen = ({ route }) => {
  const { item } = route.params

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>RecorridoDetailScreen</Text>
        <Text>{item.lugar.nombre}</Text>
      </View>
    </ScrollView>
  )
}