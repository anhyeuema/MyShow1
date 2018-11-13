import React, { Component } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-component';

import CartView from './CartView';
import ProductDetail from '../Home/ProductDetail/ProductDetail';
import ListProduct from '../Home/ListProduct/ListProduct';

export default class Cart extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator  
                initialRoute={{ name: 'CART_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW': return <CartView navigator={navigator} types={this.props.types} topProducts={this.props.topProducts}/>;
                        case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} />;
                        default: return <ListProduct navigator={navigator} />;
                    }
                }}
            />
        );
    }
}
