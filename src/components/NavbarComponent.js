import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default class HomeComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Link to="/">
                    <View style={styles.iconStyle}>
                        <Icon name="ios-home" size={24}/>
                        <Text>Home</Text>
                    </View>
                </Link>
                <Link to="/icon1">
                    <View style={styles.iconStyle}>
                        <Icon name="ios-home" size={24}/>
                        <Text>Icon1</Text>
                    </View>
                </Link>
                <Link to="/icon2">
                    <View style={styles.iconStyle}>
                        <Icon name="ios-home" size={24}/>
                        <Text>Icon2</Text>
                    </View>
                </Link>
                <Link to="/map">
                    <View style={styles.iconStyle}>
                        <Icon name="ios-home" size={24}/>
                        <Text>Map</Text>
                    </View>
                </Link>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    iconStyle: {
        flex: 0.25,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 25,
        color: '#9BA6A0'
    }
});