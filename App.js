import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal, Alert } from 'react-native';
import Navbar from './src/components/NavbarComponent'
import routes from './src/routers/index'
import { NativeRouter, Route, Link } from "react-router-native";
import Sidebar from './src/components/SidebarComponent'
import Drawer from 'react-native-drawer'
import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {modalVisible: false};
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.setState({modalVisible: false});
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
  render() {
    return (
      <NativeRouter>
          <View style={styles.container}>
              <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={this.closeModal}>
                  <Sidebar onClose={this.closeModal}></Sidebar>
              </Modal>
              <View style={{flex: 0.1, marginLeft: 40, marginTop: 10}}><Navbar></Navbar></View>
              <View style={{flex: 0.8, }}>
                  {routes.map((route, index) => (
                      <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.component}
                      ></Route>
                  ))}
              </View>
              <View style={{flex: 0.1, flexDirection: 'row'}}>
                  <View style={{flex: 0.2,}}>
                      <TouchableHighlight style={styles.menuDesign}>
                          <Icon onPress={() => {
                              this.setModalVisible(!this.state.modalVisible);
                          }} name="ios-menu" size={24}/>
                      </TouchableHighlight>
                  </View>
                  <View style={{flex: 0.8, marginTop: 10}}>
                      <Navbar></Navbar>
                  </View>
              </View>
          </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      marginTop: 20
  },
    menuDesign: {
      marginLeft: 25,
        marginTop: 20
    }
});
