import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { styles } from "./style.js";

export const Item = ({ title }) => (<View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
</View>);

export const TheList = (props = { list: [] }) => {
    const renderItem = ({ item }) => (<Item title={item.title} />);
    const keyExtractor = item => item.id;
    return (<SafeAreaView>
        <FlatList data={props.list} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>);
};
