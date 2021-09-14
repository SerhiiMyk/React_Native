import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {Text, View, Button, TouchableOpacity} from "react-native";

const User = (props) => {
    let {item, nav: {navigate}} = props
    let onPress = () => {
        navigate('uDetails',{data:item});
    };
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:10 }}>
        <Text >{item.name}</Text>
        <br/>
        <Button title={'user details'} onPress={onPress}/>
    </View>
};
export default User;
