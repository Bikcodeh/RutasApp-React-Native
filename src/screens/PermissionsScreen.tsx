import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext );

    return (
        <View style={styles.container}>
            <Text>PermissionsScreen</Text>
            <Button
                title='Permission'
                onPress={() => askLocationPermission()}
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
    }
});
