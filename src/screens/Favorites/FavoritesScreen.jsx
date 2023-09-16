import { useContext } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./FavoritesScreen.styles";
import { RecorridoCard } from "../../components/RecorridoCard/RecorridoCard";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { RecorridosContext } from "../../contexts/RecorridosContext";

export const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);
  const { recorridos } = useContext(RecorridosContext);

  const filteredRecorridos = recorridos.filter((recorrido) =>
    favorites.includes(recorrido.id)
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
      </View>
      <View style={styles.listConainer}>
        {filteredRecorridos.length > 0 ? (
          <FlatList
            data={filteredRecorridos}
            renderItem={({ item }) => <RecorridoCard item={item} />}
            keyExtractor={(item) => item.id}
            style={styles.content}
          />
        ) : (
          <Text style={styles.text}>No agregaste recorridos a favoritos.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
