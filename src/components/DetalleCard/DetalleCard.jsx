import { Text, View } from 'react-native';
import { styles } from './DetalleCard.styles';
export const DetalleCard = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.itemTiDes}> Descripción</Text>
      <Text styles={styles.itemTexto}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        A officia tenetur sed corporis velit aliquam molestias ipsam         
        accusamus nam, temporibus in perspiciatis illum aliquid provident 
        aperiam iusto praesentium omnis aut.</Text>
        <View style={styles.itemRowContainer}>
            <Text style={styles.itemTitulo}> Localidad</Text>
            <Text styles={styles.itemTexto}>Libertador gral san martin</Text>        
        </View>
        <View style={styles.itemRowContainer}>
            <Text style={styles.itemTitulo}> Region</Text>
            <Text styles={styles.itemTexto}>Yungas</Text>
        </View>
    </View>
  );
}