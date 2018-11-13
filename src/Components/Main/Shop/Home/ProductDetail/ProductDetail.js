import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class ProductDetail extends Component {
    render() {
        const { id, name , price, material, color, description, images, idType, nameType } = this.props.product;
        return (
            <View>
                <Text>Component ProductDetail</Text>
                <View>
                    <View>

                    </View>
                    <View>

                    </View>
                    <View>

                    </View>
                    <View>
                        
                    </View>

                </View>
            </View>
        );
    }
}