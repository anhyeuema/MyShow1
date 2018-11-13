import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import global from '../../../../global';
import saveToken from '../../../../api/saveToken';
import profileIcon from '../../../images/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // isLogin: true,
            user: null,
        };
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({ user: user });
    }

    onSignOut() {
        this.setState({ user: null });
        saveToken('')
            .then(a => console.log('AAA', a));
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'OrderHistory' });
    }
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGEINFO' });
    }
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        const { btnStyle, signStyle, imageStyle, nameStyle } = styles;
        const logInJSX = (
            <View style={{ flex: 1, padding: 20, marginTop: 10, }} >
                <View style={btnStyle}>
                    <TouchableOpacity style={signStyle} onPress={() => this.gotoAuthentication()}>
                        <Text>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const logInedJSX = (
            <View style={{ flex: 1, justifyContent: 'space-between', padding: 20, paddingHorizontal: 5, }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={nameStyle}>{this.state.user ? this.state.user.name : ''}</Text>
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 2, marginBottom: 20 }} >
                    <TouchableOpacity style={signStyle} onPress={() => this.gotoChangeInfo()}>
                        <Text>GO TO ChangeInfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signStyle} onPress={() => this.gotoOrderHistory()}>
                        <Text>GO TO OrderHistory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signStyle} onPress={() => this.onSignOut()}>
                        <Text>SIGN OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const { user } = this.state;
        const mainJSX = user ? logInedJSX : logInJSX;
        //{mainJSX}
        return (
            <View style={{ flex: 1, backgroundColor: '#00FFFF', borderRightWidth: 3 }} >
                <Text>Component Menu</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={profileIcon} style={imageStyle} />
                </View>

                {mainJSX}

            </View>

        );
    }
}


const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    signStyle: {
        borderRadius: 8,
        height: 30,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
        borderWidth: 1,

    },
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameStyle: {
        color: '#E61A5F',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
    }
});