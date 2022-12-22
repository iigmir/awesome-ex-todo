import React from "react";
import { Text, View, SafeAreaView, TextInput, Button, FlatList } from "react-native";
import { styles } from "./style.js";

const TheForm = (props = { submit: () => {} }) => {
    const [text, onChangeText] = React.useState("Add todo...");
    const submit = () => props.submit(text);
    return (<SafeAreaView>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <Button title="Press me" color="#f194ff" onPress={ submit } />
    </SafeAreaView>);
};

const Item = ({ title }) => (<View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
</View>);

const TheList = (props = { list: [] }) => {
    const renderItem = ({ item }) => (<Item title={item.title} />);
    const keyExtractor = item => item.id;
    return (<SafeAreaView>
        <FlatList data={props.list} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>);
};

export const MainApp = () => {
    const [list, set_list] = React.useState([]);
    const submitted = (title) => {
        const new_item = {
            title: title,
            id: list.length
        };
        const push_list = old_array => [...old_array, new_item];
        set_list(push_list);
    };
    return (<View style={ styles.container } className="the-container">
        <Text>Open up App.js to start working on your app!</Text>
        <TheForm submit={ submitted } />
        <TheList list={ list } />
    </View>);
};
