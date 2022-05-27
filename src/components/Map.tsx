import React, { useEffect } from 'react'
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';

export const Map = () => {

    useEffect(() => {
        Geolocation.getCurrentPosition(
            info => console.log("DATA ", info),
            (err) => console.log({ err }),
            {
                enableHighAccuracy: true
            }
        );
    }, [])
    
    return (
        <>
            <MapView
                style={{
                    flex: 1
                }}
                showsUserLocation
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
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
        </>
    )
}
