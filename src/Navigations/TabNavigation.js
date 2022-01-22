import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, CartNavigator, ProfileNavigator} from "./stackNavigator";
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export function TabNavigator () {
     const quantity = useSelector(state => state.cart.quantity)

    return (
        <Tab.Navigator 
        tabBarOptions = {{
            showLabel: false,
            style: {
                backgroundColor: "#191414",
                height: 65,
            }
        }}
        screenOptions ={({ route }) => ({
            tabBarIcon: ({focused}) => {

                if (route.name === "Home") {
                    return (
                        <View style={{
                            alignItems: 'center', 
                            justifyContent: 'center',
                             
                        }}>
                            <View style={{
                                backgroundColor: focused ? "#dbe892" : "#191414",
                                borderRadius:50,
                                height: 40,
                                marginTop: 5
                            }}>
                                <Image source={require('../assets/icons/home.png')} style={{
                                    width: 35,
                                    height: 35,
                                    resizeMode: "contain",
                                    tintColor: focused ? "black" : "#dbe892",
                                }} />
                            </View>
                            <Text style={{color: "#dbe892"}}>Home</Text>
                        </View>
                    );
                } else if (route.name === "Cart"){
                    return (
                        <View style={{
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            
                        }}>
                            <View style={{
                                backgroundColor: focused ? "#dbe892" : "#191414",
                                borderRadius:50,
                                height: 40,
                                marginTop: 5
                            }}>
                                <Image source={require('../assets/icons/cart.png')} style={{
                                    width: 35,
                                    height: 35,
                                    resizeMode: "contain",
                                    tintColor: focused ? "black" : "#dbe892",
                                }} />
                            </View>
                            <Text style={{color: "#dbe892",}}>Cart</Text>
                        </View>
                    );
                } else {
                    return (
                        <View style={{
                            alignItems: 'center', 
                            justifyContent: 'center', 
                        }}>
                            <View style={{
                                backgroundColor: focused ? "#dbe892" : "#191414",
                                borderRadius:50,
                                height: 40,
                                marginTop: 5
                            }}>
                                <Image source={require('../assets/icons/profile.png')} style={{
                                    width: 35,
                                    height: 35,
                                    resizeMode: "contain",
                                    tintColor: focused ? "black" : "#dbe892",
                                }} />
                            </View>
                            <Text style={{color: "#dbe892",}}>Me</Text>
                        </View>
                    );
                }
            }
        })}
        >
            <Tab.Screen name="Home" component={MainStackNavigator}  />
            <Tab.Screen name="Cart" component={CartNavigator} options={{ tabBarBadge: quantity }}/>
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F75DF0',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.25,
    elevation: 5
  }
})