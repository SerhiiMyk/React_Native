import React from "react";
import {StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users";
import UserDetails from "./UserDetails";

const UsersPageNavigator = (props) => {

    const StackNavigator = createStackNavigator();
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name={'users'}
                component={Users}
                options={{title:'user page',
                    headerStyle: {
                    backgroundColor: 'powderblue'}}}/>
            <StackNavigator.Screen
                name={'uDetails'}
                component={UserDetails}
                options={{title:'user details page',
                    headerStyle: {
                    backgroundColor: 'powderblue'}}}/>
        </StackNavigator.Navigator>
    )
};
export default UsersPageNavigator;
let styles = StyleSheet.create({});