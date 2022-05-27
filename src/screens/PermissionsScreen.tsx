import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext );

    return (
        <View style={styles.container}>
            <Text style={styles.descriptionText}>I'ts neccesary to allow the access to the location to use this application</Text>
            <BlackButton
                title="Permission"
                onPress={ askLocationPermission }
            />
            <Text style={{ marginTop: 20 }}>
                {JSON.stringify(permissions, null, 5)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionText: {
        justifyContent: 'center',
        marginHorizontal: 16,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    }
});
