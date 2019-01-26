import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class IconComponent1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Icon Component!</Text>
            </View>
        );
    }
}