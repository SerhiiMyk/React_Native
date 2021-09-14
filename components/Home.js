import React from "react";
import {StyleSheet} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import About from "../screens/About";
import Company from "../screens/Company";

const Home = () => {

    let Drawer = createDrawerNavigator();
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="About"
                component={About}
                options={{title:'home page/about',
                    headerStyle: {
                        backgroundColor: 'powderblue'
                    }
                }}/>
            <Drawer.Screen
                name="Company"
                component={Company}
                options={{title:'home page/company',
                    headerStyle: {
                        backgroundColor: 'powderblue'
                    }
                }}/>
        </Drawer.Navigator>

    )
};
export default Home;
let styles = StyleSheet.create({});