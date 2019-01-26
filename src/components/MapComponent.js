import React, { Component } from 'react';
import { MapView } from 'expo';

export default class MapComponent extends React.Component {
    render() {
        return (
            <MapView
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}