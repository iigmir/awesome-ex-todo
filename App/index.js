import React, { Component } from "react";
import { Text, View, SafeAreaView, TextInput, Alert, Button } from "react-native";
import { styles } from "./style.js";

const TheForm = (props = {
    submit: () => {}
}) => {
    const [text, onChangeText] = React.useState("Add todo...");
    const submit = () => props.submit(text);
    // Alert.alert('Button with adjusted color pressed');
    return (<SafeAreaView>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <Button title="Press me" color="#f194ff" onPress={ submit } />
    </SafeAreaView>);
};

export const MainApp = () => {
    const [list] = React.useState([]);
    const submitted = (input) => {
        list.push(input);
        console.log(list);
    };
    return (<View style={ styles.container } className="the-container">
        <Text>Open up App.js to start working on your app!</Text>
        <TheForm submit={ submitted } />
    </View>);
};
