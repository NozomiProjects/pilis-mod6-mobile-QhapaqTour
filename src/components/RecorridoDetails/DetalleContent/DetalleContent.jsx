import { Text, View } from "react-native";
import { styles } from "./DetalleContent.styles";

export const DetalleContent = ({ item }) => {

  return (
    <View style={styles.mainContent}>
      <Text style={styles.itemTitle}>Descripción</Text>
      <Text style={styles.itemText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A officia
        tenetur sed corporis velit aliquam molestias ipsam accusamus nam,
        temporibus in perspiciatis illum aliquid provident aperiam iusto
        praesentium omnis aut.
      </Text>
      <View style={styles.itemRowContainer}>
        <Text style={styles.itemTitle}>Localidad</Text>
        <Text style={styles.itemText}>{item.lugar.localidad}</Text>
      </View>
      <View style={styles.itemRowContainer}>
        <Text style={styles.itemTitle}>Region</Text>
        <Text style={styles.itemText}>{item.lugar.region}</Text>
      </View>
    </View>
  );
};
