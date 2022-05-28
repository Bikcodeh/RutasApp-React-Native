import React, { useEffect, useRef, useState } from 'react'
import MapView, { Polyline } from 'react-native-maps'
import { LoadingScreen } from '../screens/LoadingScreen';
import { useLocation } from './../hooks/useLocation';
import { Fab } from './Fab';

export const Map = () => {

    const {
        hasLocation,
        initialPosition,
        userLocation,
        routeLines,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation
    } = useLocation();
    
    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    const [showPolyline, setShowPolyline] = useState<boolean>(false);

    const centerPosition = async () => {

        const { latitude, longitude } = await getCurrentLocation()
        following.current = true;
        mapViewRef.current?.animateCamera({
            center: {
                latitude,
                longitude
            }
        })
    }

    useEffect(() => {

        followUserLocation();
        return () => {
            stopFollowUserLocation();
        }
    }, [])

    useEffect(() => {

        if (!following.current) return;
        const { latitude, longitude } = userLocation;

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }, [userLocation])



    if (!hasLocation) {
        return <LoadingScreen />
    }

    return (
        <>
            <MapView
                ref={(element) => mapViewRef.current = element!}
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
                onTouchStart={() => {
                    following.current = false;
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
                {
                    showPolyline && (
                        <Polyline
                            coordinates={routeLines}
                            strokeColor="black"
                            strokeWidth={3}
                        />
                    )
                }
            </MapView>
            <Fab
                iconName='compass-outline'
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16
                }}
            />
             <Fab
                iconName='brush-outline'
                onPress={ () => setShowPolyline( value => !value)}
                style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 16
                }}
            />
        </>
    )
}
