import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class Header extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#7592C4' }}>
                <View style={{ flex: 2, backgroundColor: '#7592C4' }}>
                    <TouchableOpacity onPress={this.props.onOpenMenu} >
                        <Text>go to Menu</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, backgroundColor: '#fff' }} >
                    <TextInput placeholder=" what do you want to buy" />
                </View>
            </View>
        );
    }
}