import React,{useState} from 'react';
import { Text, SafeAreaView, FlatList, Pressable, View, Image } from 'react-native';
import { styles } from './ExploreScreen.styles.js';
import { data } from './../../api/data.js';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utils/theme';
import { SearchBar } from './../../components/search-bar/SearchBar.jsx';//busca
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

export const ExploreScreen = ({navigation}) => {
  //--Inicio codigo de busqueda
  //1 -aqui busca el usuario principalmente ada
  const [searchQuery, setSearchQuery] = useState('')
  //4-aqui se setea lo del archivo SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query)
  }  
  //2- a medida que valla escribiendo el usuario se va a filtrar la ubicacion por titulo
  const filteredLocations = data.filter(location => (
    location.Lugar.toLowerCase().includes(searchQuery.toLowerCase())
  ))
  //--fin codigo de busqueda

const Location = ({ item }) => (
  <Pressable>
    <View style={styles.itemContainer} >
      <Image source={item.Images} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemLugar}>{item.Lugar}</Text>
        <Text style={styles.itemLocalidad}><Ionicons name="md-location-sharp" size={24} color={COLORS.primary} />{item.Localidad}</Text>
        <View style={styles.itemRowContainer}>
          <Text style={ styles.itemTiempo}>{item.Tiempo}hs.</Text>
          <Text style={styles.itemPrecio }>{item.Precio} ARS</Text>
        </View>
        <View style={styles.itemRowContain}>
          <Image source={item.ImgGuia} style={styles.itemImgGuia} />
          <Text style={styles.itemGuia}>{item.Guia}</Text>         
        </View>        
        <Text style={styles.itemCalificacion}>{item.Calificacion}<Entypo name="star" size={14} color="black" /></Text>
      </View>
    </View>
  </Pressable>
);


  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={Location}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};

