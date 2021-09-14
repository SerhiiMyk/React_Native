import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UserPageNavigator";
import Home from "./components/Home";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen
                    name={'home'}
                    component={Home}
                    options={{
                        title: 'home page',
                        headerShown: false
                    }}/>
                <BottomTabNavigator.Screen
                    name={'users'}
                    component={UsersPageNavigator}
                    options={{title: 'user page', headerShown: false}}
                />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}


