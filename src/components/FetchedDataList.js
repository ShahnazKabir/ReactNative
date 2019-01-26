import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'
import { listRepos } from '../stores/index';
import { Thumbnail } from 'react-native-thumbnail-video';

class FetchedDataList extends Component {
    componentDidMount() {
        this.props.listRepos();
    }
    renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={{flex: 0.2, marginLeft: 20}}>
                <View style={{flexDirection: 'row', flex: 0.9}}>
                    <Icon name="ios-home" style={{marginRight: 10}} size={24}/>
                    <Text>{item.title}</Text>
                </View>
            </View>
            <View style={{flex: 0.8, flexDirection: 'row'}}>
                <View style={{flex: 0.6}}>
                    <Image source={{uri: item.url}} style={{width: 193,margin: 20, height: 200}}/>
                </View>
                <View style={{flex: 0.4}}>
                    <Image source={{uri: item.thumbnailUrl}} style={{width: 100, margin: 20, height: 90}}/>
                    <Image source={{uri: item.thumbnailUrl}} style={{width: 100, marginLeft: 20, height: 90}}/>
                </View>
            </View>
        </View>
    );
    render() {
        const { repos } = this.props;
        return (
            <FlatList
                styles={styles.container}
                data={repos}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: 'column'
    }
});

const mapStateToProps = state => {
    let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
    return {
        repos: storedRepositories
    };
};

const mapDispatchToProps = {
    listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchedDataList);