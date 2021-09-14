import React from "react";
import {Button, Text, View} from "react-native";

const User = (props) => {
    let {item, nav: {navigate}} = props
    let onPress = () => {
        navigate('uDetails', {data: item});
    };
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <Text>{item.name}</Text>
        <br/>
        <Button title={'user details'} onPress={onPress}/>
    </View>
};
export default User;
