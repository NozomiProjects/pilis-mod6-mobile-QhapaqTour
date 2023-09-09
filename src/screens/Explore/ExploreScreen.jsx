import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { RecorridoCard, SearchBar } from '../../components/index';
import { styles } from './ExploreScreen.style';
import { getRecorridos } from '../../api/recorridos.js';
import { RegionContext } from "../../contexts/RegionContext";

export const ExploreScreen = ({ navigation }) => {
  const { region, setRegion } = useContext(RegionContext)
  const [data, setData] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      setRegion('');
    });

    return unsubscribe;
  }, [navigation])

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
<<<<<<< HEAD
  
  const filteredByRegion = data.filter(({ lugar }) => lugar.region.includes(region));
  
=======

  const filteredByRegion = data.filter(({ lugar }) => lugar.regiones.includes(region));

>>>>>>> 7a5d43ee5a1486b87d9cfbf67534f09e5cd955e6
  //2- a medida que vaya escribiendo el usuario se va a filtrar la ubicación por título
  const filteredLocations = filteredByRegion.filter((location) =>
    location.lugar.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemRowContainer}>
        <Image source={require('./../../../assets/images/love.png')} style={styles.itemImgTitulo} />
        <Text style={styles.itemTitulo}>{region ? region[0] + region.slice(1).toLowerCase() : 'Jujuy'}</Text>
      </View>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={({ item }) => <RecorridoCard item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
}

