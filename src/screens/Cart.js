import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux'


const Cart = ({ navigation }) => {
    const cartProduct = useSelector(state => state.cart.product)
    return (
       <ScrollView style={{
           backgroundColor: '#191414'
       }}>
            <View style={{
               flexDirection: 'row',
               marginTop: 25
           }}>
                <TouchableOpacity onPress={() => navigation.push("Profile")}>
                    <Image source={require('../assets/images/avatar6.png')} style={{
                        width: 80,
                        height: 70,
                        borderRadius: 50,
                        marginLeft: 10
                    }} />
                </TouchableOpacity>
                <View style={{ marginTop: 3}} >
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        letterSpacing: 1,
                    }}>Good evening,</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 25,
                        letterSpacing: 1,
                        fontWeight: 'bold',
                    }}>Harri Nicks</Text>
                </View>
           </View>
           <View style={{
               marginTop: 20,
               marginLeft: 30
           }}>
                <Text style={{
                     color: 'white', 
                    fontSize: 27, 
                     fontWeight: 'bold',
                      letterSpacing: 1
                    }}
                >Cart
                </Text>  
           </View>
            <View style={{
                width: 550,
                height: 400,
                paddingRight: 170,
                paddingLeft: 20,
            }}>
                <Image source={require('../assets/images/empty_cart_ccexpress.png')} style={{
                    width: "90%",
                    height: "80%",
                }} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: "center",
                }}>Empty Cart</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}
                    style={{
                        flexDirection: 'row',
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 20,
                        height: 40,
                        width: 140,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor: '#383d39',
                }}>
                    <Text style={{color: 'white', fontSize: 18}}>
                            Add to Cart
                        </Text>
                        <Image source={require('../assets/icons/cart.png')} style={{
                            tintColor: "#dbe892",
                            width: 29
                        }} />
                </TouchableOpacity>
            </View>
       </ScrollView>
    );
}

export default Cart;