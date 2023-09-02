import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RecorridoCard } from '../../components/RecorridoCard/RecorridoCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { styles } from './ExploreScreen.style';
import { getRecorridos } from '../../api/recorridos.js';

export const ExploreScreen = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getRecorridos()
    .then(res => setData(res))
    .catch(error => console.warn(error))
  }, [])

  //--Inicio codigo de busqueda
  //1 -aqui busca el usuario principalmente ada
  const [searchQuery, setSearchQuery] = useState('');
  //4-aqui se setea lo del archivo SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  //2- a medida que vaya escribiendo el usuario se va a filtrar la ubicación por título
  const filteredLocations = data.filter((location) =>
    location.lugar.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemRowContainer}>
        <Image source={require('./../../../assets/images/love.png')} style={styles.itemImgTitulo} />
        <Text style={styles.itemTitulo}>Jujuy</Text>
      </View>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={RecorridoCard}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
}
