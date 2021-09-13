import React from "react";
import {StyleSheet} from "react-native";
import {Text, View,Button,TouchableOpacity} from "react-native";

const UserDetails= (props) => {
    let {route:{params:{data}}} = props
    return <View>
        <Text>{data.name} - {data.email}</Text>
    </View>
};
export default UserDetails;
let styles = StyleSheet.create({});