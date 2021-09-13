import React from "react";
import {StyleSheet} from "react-native";
import {Text, View,Button,TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users";
import UserDetails from "./UserDetails";

const UsersPageNavigator= (props) => {

    let StackNavigator = createStackNavigator;
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name = {'users'} component={Users}/>
            <StackNavigator.Screen name = {'uDetails'} component={UserDetails}/>
        </StackNavigator.Navigator>

    )
};
export default UsersPageNavigator;
let styles = StyleSheet.create({});