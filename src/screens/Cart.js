import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux'


const Cart = () => {
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
                <Text style={{
                     color: 'white', 
                     margin: 30, fontSize: 27, 
                     fontWeight: 'bold',
                      letterSpacing: 1}}
                >Cart
                </Text>  
            
       </ScrollView>
    );
}

export default Cart;