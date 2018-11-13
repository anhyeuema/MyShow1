import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Search from './Search/Search';

import Contact from './Contact/Contact';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import initData from '../../../../api/initData';
import Header from './Header';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'hone',
            types: [],
            topProducts: [],
        };
    }

    componentDidMount() {
        this.setState({ selectedTab: 'home' });
        initData()
            .then(resJSON => {
                /*
                console.log('SHOP-----');
                console.log(resJSON.type);
                */

                //const { type, product } = resJSON;
                this.setState({ //thay doi bien this.state.xxx trong do bien xxx l Bien trong ham constructor() {...}
                  //  types: resJSON.type, (1) //khi nay types: [], => types: resJSON.type . khi do mang rong tro thanh mang cua type tu server gui ve. muoin goi bien do thi goi la = this.state.types
                  // tu types = resJSON.type cua (1) thay vao ve phai cau (2)
                  //  types={ this.state.types} (2)
                  // => types={ this.state.types}={this.state.resJSON.type} // type la bien cua sever gui xuong, resJSON mang gom cac bien tu server gui xuong, chua ca bien type va product ma server gui xuong
                  //  types: this.state.resJSON.type,   //truong hop nay bang 
                    types: resJSON.type,
                    topProducts: resJSON.product,
                
                 
                });
            })
            .then(() => {
                /*
                const types = this.state.types;
                console.log('SHOP-----');
                console.log(types); 
                */
            });
    }

    gotoMenu() {
        const open = this.props.open;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <Text>Component Shop</Text>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>

                    <Header onOpenMenu={() => this.gotoMenu()} />

                    <View style={{ flex: 5, backgroundColor: '#707071' }}>
                        <TabNavigator>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'home'}
                                title="Home"
                                //  renderIcon={() => <Image source={...} />}
                                //  renderSelectedIcon={() => <Image source={...} />}
                                // badgeText="1"
                                onPress={() => this.setState({ selectedTab: 'home' })}>
                                <Home types={this.state.types} topProducts={this.state.topProducts} />
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'cart'}
                                title="Cart"
                                //  renderIcon={() => <Image source={...} />}
                                //  renderSelectedIcon={() => <Image source={...} />}
                                //  renderBadge={() => <CustomBadgeView />}
                                badgeText="1"
                                onPress={() => this.setState({ selectedTab: 'cart' })}>
                                <Cart />
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'contact'}
                                title="Contact"
                                //  renderIcon={() => <Image source={...} />}
                                //  renderSelectedIcon={() => <Image source={...} />}
                                //  badgeText="1"
                                onPress={() => this.setState({ selectedTab: 'contact' })}>
                                <Home />
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'search'}
                                title="Search"
                                //  renderIcon={() => <Image source={...} />}
                                //  renderSelectedIcon={() => <Image source={...} />}
                                // badgeText="1"
                                onPress={() => this.setState({ selectedTab: 'search' })}>
                                <Home />
                            </TabNavigator.Item>
                        </TabNavigator>

                    </View>

                </View>
            </View>
        );
    }
}