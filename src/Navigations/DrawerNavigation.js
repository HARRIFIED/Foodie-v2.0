import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { OrderStackNavigator } from "./stackNavigator";
import { TabNavigator } from "./TabNavigation";

const Drawer = createDrawerNavigator();

export function DrawerNavigator () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Orders" component={OrderStackNavigator} />
        </Drawer.Navigator>
    );
}