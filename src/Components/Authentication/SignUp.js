import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import register from '../../../api/register';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSign: true,
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign Up Successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() }//gotoSignIn duoc truyen tu ham Authentication truyen sang
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.setState({ email: '' }) },
            ],
            { cancelable: false }
        );
    }
 
    registerUser() {
        const { name, email, password } = this.state;
        register(name, email, password)
        .then(res => {
            if (res === 'THANH_CONG') return this.onSuccess();
            return this.onFail();
        });
        
    }

    render() {

        return (
            <View style={{ flex: 3, backgroundColor: '#5F9738' }}>
                <Text>Component SignUp</Text>
                <View style={{ flex: 3, backgroundColor: '#7C7C7D' }}>
                    <TextInput 
                        placeholder=" Enter your name " 
                        value={this.state.name}
                        onChangeText={text => this.setState({ name: text })}
                    />
                    <TextInput 
                        placeholder=" Enter Email your "
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                    <TextInput 
                        placeholder=" Enter password  your " 
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        secureTextEntry
                    />
                    <TextInput 
                        placeholder=" Re-Enter passeord your " 
                        value={this.state.rePassword}
                        onChangeText={text => this.setState({ rePassword: text })}
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={() => this.registerUser()} >
                        <Text>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
