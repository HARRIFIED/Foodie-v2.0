import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'


const Cart = ({ route,navigation }) => {
    const [_prod, setProd] = useState({});
    const totalCartProduct = useSelector(state => state.cart.products)

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
            <FlatList  
                data={totalCartProduct}
                keyExtractor={( item, index) => item._id}
                renderItem={({ item }) => (
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 2
                }}
                activeOpacity={0.9}
           >
         
                <View
                style={{
                    width: 140,
                    height: 140,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#211f1f',
                    borderRadius: 70,
                    margin: 10,
                    elevation: 5,
                    zIndex: 3,
                    elevation: 10,
                }}>
                <Image source={{uri: item.img}} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                }}/>
                </View>
                <View style={{
                backgroundColor: '#383d39',
                elevation: 5,
                height: 100,
                width: 280,
                opacity: 0.8,
                marginLeft: -105,
                zIndex: 1,
                borderTopLeftRadius: 40,
                borderBottomLeftRadius: 40,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20
                }}>
                <View style={{
                    marginTop: 3,
                    marginLeft: 100,
                    marginBottom: 2
                }}>
                    <Text style={{
                    fontSize: 18,
                    fontWeight: '700',
                    fontStyle: 'italic',
                    color: 'white',
                    marginBottom: 2
                    
                    }}>{item.title}</Text>
                    
                </View>
                <View style={{
                    marginLeft: 100,
                    borderBottomEndRadius: 20,
                }}>
                    <Text style={{
                    color: 'white', 
                    fontSize: 20, 
                    fontWeight: 'bold',
                    marginBottom: 2,
                    marginLeft: 30
                    }}
                    >${item.price}</Text>
                    <View style={{
                    
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            marginRight: 10,
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity >
                                <Image source={require('../assets/icons/remove.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={{
                                color: 'white', 
                                fontWeight: '800',
                                fontSize: 18, 
                                textAlign: 'center',
                                marginLeft: 5,
                                marginRight: 5,
                                }}>
                                3
                            </Text>
                            <TouchableOpacity >
                                <Image source={require('../assets/icons/add.png')} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                </View>
                <View style={{
                    marginLeft: -60,
                    zIndex: 3,
                }}>
                <Image source={require('../assets/icons/delete.png')} style={{
                        tintColor: "#dbe892",
                        width: 45,
                        height: 30,
                        resizeMode: "contain",
                        
                }}/>
                </View>
            </TouchableOpacity>          )}
                />
                    
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    icon: {
        tintColor: "#dbe892",
        width: 45,
        height: 30,
        resizeMode: "contain",
    }
})


export default Cart;