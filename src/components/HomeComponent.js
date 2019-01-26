import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from '../stores/index';
import RepoList from './FetchedDataList';

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class HomeComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Provider store={store}>
                    <View>
                        <RepoList />
                    </View>
                </Provider>
            </View>
        );
    }
}