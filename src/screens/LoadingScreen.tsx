import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator
        color="black"
        size={50}
      />
      <Text>
        Loading...
      </Text>
    </View>
  )
}
