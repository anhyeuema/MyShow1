import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import signIn from '../../../api/signIn';
import global from '../../../global';
import saveToken from '../../../api/saveToken'; 

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSign: true,
            name: '',
            email: '',
            password: ''
        };
    }

    onSignIn1() {
        const { email, password } = this.state;
        signIn(email, password)
        .then(res => {
            global.onSignIn(res.user);//onSignIn tronh ham Main.js
            this.props.goBackToMain();
            saveToken(res.token);
        });
    }
    render() {
        return (
            <View style={{ flex: 3, backgroundColor: '#5F9738' }}>
                <Text>Component SignIn</Text>
                <View style={{ flex: 3, backgroundColor: '#7C7C7D' }}>
                   
                    <TextInput placeholder=" Enter Email your " />
                    <TextInput placeholder=" Enter password  your " />
                
                    <TouchableOpacity onPress={() => this.onSignIn1()} >
                        <Text>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}