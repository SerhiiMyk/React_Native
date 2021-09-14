import React from "react";
import {StyleSheet, Text, View} from "react-native";

const User = ({item}) => {
    return <View style={[styles.UserBox,styles.margins,styles.sizes]}>
        <Text style={styles.UserBox}>{item.name}</Text>
    </View>
};
export default User;
let styles = StyleSheet.create({
    UserBox: {
        backgroundColor: 'tomato',
        textAlign: 'center',
    },
    margins: {
        marginBottom: 3
    },
    sizes:{
        width: 200,
    }
});