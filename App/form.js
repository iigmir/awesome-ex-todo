import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./style.js";

export const TheForm = (props = { submit: () => {} }) => {
    const [text, onChangeText] = React.useState("Add todo...");
    const submit = () => props.submit(text);
    return (<View style={styles.form}>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <Button title="Create item" color="#f194ff" onPress={ submit } />
    </View>);
};
