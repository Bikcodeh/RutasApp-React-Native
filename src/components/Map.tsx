import React, { useRef } from 'react'
import MapView from 'react-native-maps'
import { LoadingScreen } from '../screens/LoadingScreen';
import { useLocation } from './../hooks/useLocation';
import { Fab } from './Fab';

export const Map = () => {

    const { hasLocation, initialPosition, getCurrentLocation } = useLocation();
    const mapViewRef = useRef<MapView>();

    const centerPosition = async () => {

        const {latitude, longitude} = await getCurrentLocation()

        mapViewRef.current?.animateCamera({
            center: {
                latitude,
                longitude
            }
        })
    }

    if (!hasLocation) {
        return <LoadingScreen />
    }
    
    return (
        <>
            <MapView
                ref={ (element) => mapViewRef.current = element! }
                style={{
                    flex: 1
                }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
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
                iconName='compass-outline'
                onPress={ centerPosition }
                style ={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16
                }}
            />
        </>
    )
}
