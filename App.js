import React from 'react';
import {StyleSheet} from 'react-native';
import Users from "./components/Users";
import Home from "./components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserDetails from "./screens/UserDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";
import UsersPageNavigator from "./screens/UserPageNavigator";

// let StackNavigator = createStackNavigator();
let bottomTabNavigator = createBottomTabNavigator;

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                tabBarOption={{tabBarStyle: {justifyContent: 'center', alignItems: 'center'}}}>
                <StackNavigator.Screen name={'Users'} component={UsersPageNavigator}/>
                <StackNavigator.Screen name={'Home'} component={Home}/>
                <StackNavigator.Screen name={'uDetails'} component={UserDetails}/>
            </BottomTabNavigator.Navigator>


        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {},
});
