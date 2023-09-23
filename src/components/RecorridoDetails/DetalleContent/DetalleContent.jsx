import { Text, View } from "react-native";
import { styles } from "./DetalleContent.styles";
import { MapComponent } from "./Map";

export const DetalleContent = ({ item }) => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.padding}>
        <View style={styles.itemRowContainer}>
          <Text style={styles.itemTitle}>Localidad</Text>
          <Text style={styles.itemText}>{item.lugar.localidad}</Text>
        </View>
        <View style={styles.itemRowContainer}>
          <Text style={styles.itemTitle}>Region</Text>
          <Text style={styles.itemText}>{item.lugar.region}</Text>
        </View>
      </View>

      <MapComponent
        name={item.lugar.nombre}
        latitude={item.lugar.latitud}
        longitude={item.lugar.longitud}
      />
    </View>
  );
};
