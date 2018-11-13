import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Category from './Category';
import Collection from './Collection';
import TopProduct from './TopProduct';


export default class Home extends Component {


    /*
    componentWillReceiveProps(nextProps) {
        console.log('HOME_VIEW-------');
    
        console.log(nextProps.types);
    }
    */

    /*
    componentDidMount() {
        
        console.log('HOME_VIEW-------');
        const { types } = this.props;
        console.log(types);
    }
    */


    render() {
        return (
            <ScrollView>
                <View>
                    <Text>Component Home</Text>
                </View>
           
                <TopProduct navigator={this.props.navigator} topProducts={this.props.topProducts} />
                <Category navigator={this.props.navigator} types={this.props.types} />
                
                <Collection />
        
            </ScrollView>
        );
    }
}