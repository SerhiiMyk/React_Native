import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {Text, View, Button, TouchableOpacity} from "react-native";

const User = ({item}) => {
    return <View style={[styles.UserBox,styles.margins,styles.sizes]}>
        <Text style={styles.UserBox}>{item.name}</Text>
    </View>
};
export default User;
let styles = StyleSheet.create({
    UserBox: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent:'center',
        textAlign: 'center',
    },
    margins: {
        marginBottom: 3
    },
    sizes:{
        width: '70%',
        height: 100
    }
});