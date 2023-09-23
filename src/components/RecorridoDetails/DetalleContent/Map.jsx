import MapView, { Marker } from 'react-native-maps'

export const MapComponent = ({ name, latitude, longitude }) => {
  return (
    <MapView
      style={{ height: 400 }}
      initialRegion={{
        latitude: Number(latitude),
        longitude: Number(longitude),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      <Marker
        coordinate={{
          latitude: Number(latitude),
          longitude: Number(longitude)
        }}
        title={name}
      />
    </MapView>
  )
}