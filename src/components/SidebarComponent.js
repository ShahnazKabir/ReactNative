import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default class SidebarComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
               <View style={{flex: 0.2}}>
                   <View style={styles.headerDesign}>
                       <Icon name="ios-home" style={styles.headIcon}/>
                       <Text size={24}>Headline</Text>
                   </View>
               </View>
                <View style={{flex: 0.8}}>
                    <Link onPress={this.props.onClose} to="/">
                        <View style={styles.menuItem}>
                            <Text><Icon name="ios-home" size={24}/>Home</Text>
                        </View>
                    </Link>
                    <Link onPress={this.props.onClose} to="/icon1">
                        <View style={styles.menuItem}>
                            <Text><Icon name="ios-home" size={24}/>Icon1</Text>
                        </View>
                    </Link>
                    <Link onPress={this.props.onClose} to="/icon2" >
                        <View style={styles.menuItem}>
                            <Text><Icon name="ios-home" size={24}/>Icon2</Text>
                        </View>
                    </Link>
                    <Link onPress={this.props.onClose} to="/map">
                        <View style={styles.menuItem}>
                            <Text><Icon name="ios-home" size={24}/>Map</Text>
                        </View>
                    </Link>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuItem:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    menuIcon: {
        marginLeft: 10,
        marginRight: 10
    },
    headIcon: {
        marginBottom: 5,
        fontSize: 30
    },
    headerDesign: {
        alignItems: 'center',
        marginTop: 40
    }
});