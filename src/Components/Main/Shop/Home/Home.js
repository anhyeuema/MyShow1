import React, { Component } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-component';

import HomeView from './HomeView';
import ProductDetail from './ProductDetail/ProductDetail';
import ListProduct from './ListProduct/ListProduct';

export default class Home extends Component {

    /*
    componentWillReceiveProps(nextProps) {
        console.log('HOME_-------');
    
        console.log(nextProps.types);
    }
    */
    /*
    componentDidMount() {
        console.log('HOME_-------');
        const { types } = this.props;
        console.log(types.id);
    }
    */
    


    render() {
        return (
            <NavigationExperimental.Navigator  
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} types={this.props.types} topProducts={this.props.topProducts} />;
                        case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} product={route.product} />;
                        default: return <ListProduct navigator={navigator} />;
                    }
                }}
            />
        );
    }
}