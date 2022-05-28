import React from 'react'
import MapView from 'react-native-maps'
import { LoadingScreen } from '../screens/LoadingScreen';
import { useLocation } from './../hooks/useLocation';
import { Fab } from './Fab';

export const Map = () => {

    const { hasLocation, initialPosition } = useLocation();

    if (!hasLocation) {
        return <LoadingScreen />
    }
    
    return (
        <>
            <MapView
                style={{
                    flex: 1
                }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitud,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {
                    /*
                    <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Marker Title"
                    description="Description"
                />
                    */
                }
            </MapView>
            <Fab 
                iconName='star-outline'
                onPress={ () => {}}
                style ={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16
                }}
            />
        </>
    )
}
