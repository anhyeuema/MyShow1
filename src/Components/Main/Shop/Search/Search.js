
import React, { Component } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-component';

import SearchView from './SearchView';
import ProductDetail from '../Home/ProductDetail/ProductDetail';
import ListProduct from '../Home/ListProduct/ListProduct';

export default class Search extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator  
                initialRoute={{ name: 'SEARCH_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'SEARCH_VIEW': return <SearchView navigator={navigator} types={this.props.types} topProducts={this.props.topProducts}/>;
                        case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} />;
                        default: return <ListProduct navigator={navigator} />;
                    }
                }}
            />
        );
    }
}
