import React, { createContext, useState } from "react";
import { PermissionStatus } from "react-native-permissions";

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermision: () => void;
}

export const permissionsContext = createContext({} as PermissionsContextProps); //TODO: qué exporta

export const PermissionsProvider = ({ children }: any) => {


    const askLocationPermission = () => {

    }

    const checkLocationPermision = () => {

    }

    const [permissions, setPermissions] = useState(permissionInitState);

    return (
        <permissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermision
        }}>
            {children}
        </permissionsContext.Provider>
    )
}