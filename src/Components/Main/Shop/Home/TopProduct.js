import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ImageBackground, StyleSheet, ListView } from 'react-native';

const { width, height } = Dimensions.get('window');
const url = 'http://192.168.0.100:81/api/images/product/';

export default class TopProduct extends Component {



    componentWillReceiveProps(nextProps) {
        //const { name, price } = ;
        //   console.log(nextProps.topProducts.name);
        console.log('TopProduct-------');
        console.log(nextProps.topProducts);
    }

    /*
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r1 });
        this.state = {
            dataSource: ds.cloneWithRows(),
        };
    }
    */

    /*
    componentWillReceiveProps(nextProps) {
        //const { name, price } = ;
     //   console.log(nextProps.topProducts.name);
        console.log('TopProduct-------');
        console.log(nextProps.topProducts);
    }
    */

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    render() {
        const { imageStyle, cateTitle, wrapper, imageView } = styles;
        const { topProducts } = this.props.topProducts;

        console.log('TopProduct--NAME-----');
        console.log(this.props.topProducts);
        return (
            <View style={wrapper}>
                <Text>Component TopProduct</Text>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    <Text>TOP PRODUCT1</Text>
                </View>

          

            </View >
        );
    }
}

//361x451
const imageWidth = width * 0.45;// (imageHeight * 361) / 451;//Chieu dai thuc te la width=800 ; height=400;
const imageHeight = (imageWidth * 451) / 361;// height - 40; //(imageWidth * 800) / 400;

const styles = StyleSheet.create({

    wrapper: {
        width: width * 0.45,
        height: imageHeight,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2e2728',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,

    },
    textStyle: {
        fontSize: 25,
        color: '#afaeaf'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,

    },
    imageView: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4,
        flexDirection: 'row',
    },
    cateTitle: {
        fontSize: 15,
        color: '#9a9a9a',
    }

});


/**
 <ListView
    enableEmptySections
    dataSource={(new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts))}
    renderRow={(product) => (
        <TouchableOpacity onPress={() => this.gotoDetail(product)} key={product.id} >
            <ImageBackground source={{ uri: '${url}${product.images[0]}' }} style={imageStyle} >
            </ImageBackground>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
        </TouchableOpacity>
    )}
    renderSeparator={(sectionId, rowId) => {
        if (rowId % 2 == 1) return <View style={{ width, height: 10 }} />;
        return null;
    }}
/>



                    <ListView 
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts.product)}
                    renderRow={(product) => (
                        <TouchableOpacity onPress={() => this.gotoDetail(product)} >
                            <ImageBackground source={{ uri: '${url}${product.images[0]}' }} style={{ height: 300, width: 300 }} >
                            </ImageBackground>
                            <Text>{product.name}</Text>
                            <Text>{product.price}</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 == 1) return <View style={{ width, height: 10 }} />;
                        return null;
                    }}
                />

 */