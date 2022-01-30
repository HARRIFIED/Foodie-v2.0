import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet,Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProducts } from '../redux/reduxslices/cartSlice';
import Loader5 from '../components/Loader5';



const ProductDetails = ({route, navigation}) => {
    const product = useSelector(state => state.cart.products)
    const quantity  = useSelector(state => state.cart.quantity)
    const [cartQuantity, setcartQuantity] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [_prod, setProd] = useState({});
    const dispatch = useDispatch();

    useEffect(()=> {
        const {item} = route.params;
        setProd(item);
    },[]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      cartQuantity > 1 && setcartQuantity(cartQuantity - 1);
    } else {
      setcartQuantity(cartQuantity + 1);
    }
  };
    
    const {
        title,
        desc,
        categories,
        price,
        img,
        size,
        inStock,
  } = route.params.item;

    const handleAddProducts = async () => {
      try{
        // console.log(product, quantity, cartQuantity, price)
        await dispatch(addProducts({ 
            product: _prod, 
            quantity, 
            cartQuantity, 
            TotalPrice: (price * cartQuantity).toFixed(1)
        }));
        disabled = false
        navigation.push("Cart", {item})
      } catch (err) {
          
      } finally{
          setDisabled(true)
      }
    }
    

    return (
        <Modal>
        {isLoading ? <Loader5/> : 
            <ScrollView
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#191414',
                    position: 'relative',
            }}>
            <StatusBar backgroundColor = "#191414" barStyle = 'light-content'/>
            <View
                style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    source={require('../assets/icons/arrowleft.png')}
                    style={{
                    tintColor: "#dbe892",
                        width: 40,
                        height: 25,
                        resizeMode: "contain",
                        marginLeft: 10,
                        marginTop: 10
                    }}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('cart', {screen: 'cart '})}
                style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                <Image source={require('../assets/icons/cart.png')} style={{
                    tintColor: "#dbe892",
                    width: 50,
                    height: 35,
                    resizeMode: "contain",
                    marginTop: 10
                }} />
                <View style={{
                    marginBottom: 10,
                    backgroundColor: 'red',
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                    marginRight: 10,
                    marginLeft: -20
                }}>
                    <Text style={{
                        color: 'white',

                    }}>{quantity}</Text>
                </View>
                </TouchableOpacity>
            </View>
            
            <View
                style={{
                
                maxHeight: 300,
                width: '100%',
                alignItems: 'center',
                marginRight: 30,
                marginBottom: 20
                
                }}>
                
                <View
                style={{
                    width: 380,
                    height: 350,
                    justifyContent: 'center',
                    
                }}>
                <Image
                    source={{uri: img}}
                    style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                
                    }}
                />
                </View>
            </View>
            <Text
                style={{
                fontSize: 38,
                color: '#989e99',
                fontWeight: '800',
                paddingHorizontal: 10,
                maxWidth: 310,
                }}>
                {title}
            </Text>
            <View style={{paddingHorizontal: 20}}>
                <View style={{paddingVertical: 20}}>
                    <Text
                    style={{
                        fontSize: 12,
                        color: 'white',
                        opacity: 0.5,
                    }}>
                    Desc
                    </Text>
                    <Text
                    style={{
                        fontSize: 18,
                        color: 'white',
                        fontWeight: '600',
                    }}>
                    {desc}
                    </Text>
                </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View
                        style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        }}>
                        <Text
                        style={{
                            fontSize: 20,
                            color: 'green',
                            fontWeight: '900',
                            paddingRight: 5,
                            paddingBottom: 8,
                        }}>
                        $
                        </Text>
                        <Text
                        style={{
                            fontSize: 38,
                            color: '#989e99',
                            fontWeight: '900',
                            alignItems: 'center',
                        }}>
                        {(price * cartQuantity).toFixed(1)}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 10,
                        alignItems: 'center'
                    }}>
                        
                        <TouchableOpacity onPress={() => handleQuantity("dec")}>
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
                            {cartQuantity}
                        </Text>
                        <TouchableOpacity onPress={() => handleQuantity("inc")}>
                            <Image source={require('../assets/icons/add.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#383d39',
                        justifyContent: 'center',
                        marginLeft: 10,
                        marginTop: 25,
                        height: 40,
                        width: 160,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                    }}>
                        <Text style={{
                            color: 'white', fontSize: 18,
                            marginRight: 5,

                        }}>Drop a Comment</Text>
                        <Image source={require('../assets/icons/message.png')} style={{
                            tintColor: "#dbe892",
                            width: 29

                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/love.png')} style={{
                            tintColor: "red",
                            width: 40,
                            marginTop: 25
                        }}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => handleAddProducts()}
                        disabled = {disabled}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#383d39',
                            justifyContent: 'center',
                            marginRight: 10,
                            marginTop: 25,
                            height: 40,
                            width: 140,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
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
        }
    </Modal>
    
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

export default ProductDetails;
