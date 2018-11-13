import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import Swiper from 'react-native-swiper';

import littleIcon from '../../../../images/temp/little.jpg';

const { width, height } = Dimensions.get('window');



const url = 'http://192.168.0.100:81/api/images/type/';

export default class Category extends Component {


    /*
    componentWillReceiveProps(nextProps) {
        console.log('Category-------');
        console.log(nextProps.types);
    }
    */
   
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }


    render() {
        const { imageStyle, cateTitle, wrapper, imageView } = styles;
        //const { id, name, image } = this.props.types;//bien types duoc lay tu Shop.js => Home.js => HomeView.js => Category.js 
        const { types } = this.props;

        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight}>
                {types.map(etypes => (
                    <View style={imageView} key={etypes.id} >
                        <TouchableOpacity onPress={() => this.gotoListProduct()} style={imageStyle} >
                            <ImageBackground source={{ uri: '${url}${etypes.image}' }} style={{ height: imageHeight, width: imageWidth, justifyContent: 'center', alignItems: 'center', }} >
                                <Text style={cateTitle}>{etypes.name}</Text>
                                <Text style={cateTitle}>{etypes.price}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                ))}
            </Swiper>
        );

        return (
            <View style={wrapper} >
                <Text>Component Category</Text>
                <View style={{ flex: 1, backgroundColor: '#C1BCB7' }}>
                    <Text>LIST OF CATEGORY</Text>
                </View>

                <View style={{ flex: 5, backgroundColor: '#5A5A5B' }}>

                    {types.length ? swiper : null}

                   {/*  <TouchableOpacity onPress={console.log(this.props.types)}>
                            <Text>LOG</Text>
                        </TouchableOpacity>
                    */}

                    {/* {types.length ? swiper : null}  */}

                </View>

            </View>
        );
    }
}


//800x400
const imageWidth = width - 40;//Chieu dai thuc te la width=800 ; height=400;
const imageHeight = imageWidth / 2; //(imageWidth * 800) / 400;

const styles = StyleSheet.create({

    wrapper: {
        height: height * 0.32,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    cateTitle: {
        fontSize: 15,
        color: '#9a9a9a',
    }

});


{/* {types.map(etypes => (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flex: 5, backgroundColor: '#C1BCB7' }}>
            <Text>{etypes.name}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '' }}>
        
            <ImageBackground source={{ uri: '${url}${etypes.image}' }} style={{ height: imageHeight, width: imageWidth, justifyContent: 'center', alignItems: 'center', }} >
                <Text style={cateTitle}>{etypes.name}</Text>
            </ImageBackground>
        
        </View>
    </View>





    <View style={wrapper} >
                <Text>Component Category</Text>

                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <View style={{ flex: 1, backgroundColor: '#C1BCB7' }}>
                            <Text>LIST OF CATEGORY</Text>
                        </View>
                        <View style={{ flex: 3, backgroundColor: '' }}>

                            <Swiper showsPagination width={imageWidth} height={imageHeight}>
                                <TouchableOpacity key={types.id}>
                                    <ImageBackground source={{ uri: '${url}${types.image[0]}' }} style={{ height: imageHeight, width: imageWidth, justifyContent: 'center', alignItems: 'center', }} >
                                        <Text style={cateTitle}>{types.name}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </Swiper>

                            <TouchableOpacity onPress={console.log(this.props.types)}>
                                <Text>LOG</Text>
                            </TouchableOpacity>

                            {/* {types.length ? swiper : null}  */}

{/*
                            </View>
                            </View>
                        </View>
        
                    </View>
))} */}