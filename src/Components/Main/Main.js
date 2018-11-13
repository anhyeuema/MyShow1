import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Drawer from 'react-native-drawer';

import Shop from './Shop/Shop';
import Menu from './Menu/Menu';
import checkToken from '../../../api/checkToken';
import getToken from '../../../api/getToken';

export default class Main extends Component {

    /*
    componentDidMount() {
        getToken()
        .then(token => checkToken(token))
        .then(res => global.onSignIn(res.user))
        .catch(err => console.log(err));
    }
    */
      /*
   componentDidMount() {
    this.drawer.open();
   }
   */

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    /*
   componentDidMount() {
    this.drawer.open();
   }
   */

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>Component Main1</Text>
                <View style={{ flex: 1 }} >
                    <Drawer
                        tapToClose={true}
                        openDrawerOffset={0.4} // 20% gap on the right side of drawer              
                        ref={(ref) => this.drawer = ref}
                        content={<Menu navigator={this.props.navigator} />}
                    >
                        <Shop open={() => this.openControlPanel()} />
                    </Drawer>
                </View>
            </View>
        );
    }
}