import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Notifications from '../screens/Notifications';
import CheckOut from '../screens/CheckOut';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';


const Stack = createStackNavigator();

export function MainStackNavigator () {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name= "Home" component={Home} />
            <Stack.Screen name= "Details" component={ProductDetails} />
            <Stack.Screen name= "Notifications" component={Notifications} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    );
};

export function CheckoutNavigator () {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='cart' component={CheckOut} />
        </Stack.Navigator>
    );
}
export function ProfileNavigator () {
    return (
        <Stack.Navigator 
            screenOptions={{
               headerShown: false,
            }}
        >
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    );
}
export function OrderStackNavigator () {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Orders' component={Orders} />
        </Stack.Navigator>
    );
}

