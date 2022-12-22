import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { styles } from "./style.js";

export const Item = ({ title, id, remove }) => (<View style={styles.item}>
    <Text style={styles.title}>
        <Text style={styles.remove} onPress={ () => remove(id) }>(X)</Text>
        {title}
    </Text>
</View>);

export const TheList = (props = { list: [], remove: () => {} }) => {
    const remove = (id) => { props.remove(id); };
    const renderItem = ({ item }) => (<Item title={item.title} id={item.id} remove={remove} />);
    const keyExtractor = item => item.id;
    return (<SafeAreaView>
        <FlatList data={props.list} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>);
};
