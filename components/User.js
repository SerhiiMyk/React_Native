import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {Text, View, Button, TouchableOpacity} from "react-native";

const User = (props) => {
    let {item, nav: {navigate}} = props
    let onPress = () => {
        navigate('uDetails',{data:item});

    };
    return <View style={[styles.UserBox, styles.margins, styles.sizes]}>
        <Text style={styles.UserBox}>{item.name}</Text>
        <Button title={'user details'} onPress={onPress}/>
    </View>
};
export default User;
let styles = StyleSheet.create({
    UserBox: {
        flex: 1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        textAlign: 'center',
    },
    margins: {
        marginBottom: 3
    },
    sizes: {
        width: '70%',
        height: 100
    }
});