import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';

const { width, height } = Dimensions.get('window');

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSign: false,
        };
    }

    gotoOnSignIn() {
        this.setState({ isSign: true });
    }
    gotoSignIn() {
        this.setState({ isSign: true });
    }
    gotoSignUp() {
        this.setState({ isSign: false });
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { btSignIn, btnSignIn, btnSignUp, btnTextActi, btnTextActied } = styles;
        const { isSign } = this.state;
        const MainJSX = isSign ? <SignIn goBackToMain={() => this.goBackToMain()} /> : < SignUp onPress={() => this.gotoOnSignIn()} />;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text>Component Authentication</Text>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, backgroundColor: '#203F66' }}>
                        <TouchableOpacity>
                            <Text>back</Text>
                        </TouchableOpacity>

                    </View>

                    {MainJSX}

                    <View style={btSignIn}>
                        <TouchableOpacity onPress={() => this.gotoSignIn()} style={btnSignIn}> 
                            <Text style={isSign ? btnTextActi : btnTextActied}>SIGN IN</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.gotoSignUp()} style={btnSignUp}>
                            <Text style={isSign ? btnTextActied : btnTextActi}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    btSignIn: {
        flex: 1, backgroundColor: '#FB7318', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    },
    btnSignIn: {
        backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',
        width: width - 200,
        height: 40,
        paddingLeft: 10,
        borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
        marginRight: 3,
    },
    btnSignUp: {
        backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',
        width: width - 200,
        height: 40,
        paddingRight: 10,
        borderTopRightRadius: 10, borderBottomRightRadius: 10,
        marginLeft: 3,
    },
    btnTextActi: {
        color: '#E61A5F',
        justifyContent: 'center', alignItems: 'center',
    },
    btnTextActied:{
        color: '#E2CF87',
        justifyContent: 'center', alignItems: 'center',
    }
});

/*
const signIn = (
    <View style={{ flex: 3, backgroundColor: '#7C7C7D' }}>
        <TextInput placeholder=" Enter Email your " />

        <TextInput placeholder=" Enter password your " />

        <TouchableOpacity onPress={() => this.goBackToMain()}>
            <Text>SIGN IN NOW</Text>
        </TouchableOpacity>

    </View>
);
const signUp = (
    <View style={{ flex: 3, backgroundColor: '#7C7C7D' }}>
        <TextInput placeholder=" Enter your name " />
        <TextInput placeholder=" Enter Email your " />
        <TextInput placeholder=" Enter password  your " />
        <TextInput placeholder=" Re-Enter passeord your " />
        <TouchableOpacity onPress={() => this.gotoOnSignIn()} >
            <Text>SIGN UP NOW</Text>
        </TouchableOpacity>
    </View>
);
*/