import React from "react";
import {StyleSheet} from "react-native";
import {Text, View,Button,TouchableOpacity} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import About from "../screens/About";
import Company from "../screens/Company";

const Home= () => {

    let Drawer = createDrawerNavigator;
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Company" component={Company} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};
export default Home;
let styles = StyleSheet.create({});