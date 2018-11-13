import React, { Component } from 'react';

import NavigationExperimental from 'react-native-deprecated-custom-component';

import Authentication from './Authentication/Authentication';
import OrderHistory from './OrderHistory/OrderHistory';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';

import refreshToken from '../../api/refreshToken';

export default class App extends Component {
    componentDidMount() {
        setInterval(refreshToken, 5000);
    }
    render() {
        return (
           <NavigationExperimental.Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        case 'CHANGEINFO': return <ChangeInfo navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}            
           />
        );
    }
}