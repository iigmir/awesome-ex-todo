import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { styles } from "./style.js";

export class MainApp extends Component {
    render() {
        return (<View style={styles.container} className="the-container">
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>);
    }
};

export const Cat = () => {
    return <Text>Hello, I am your cat!</Text>;
};

