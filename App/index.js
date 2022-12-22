import React, { Component } from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { styles } from "./style.js";

const TheForm = () => {
    const [text, onChangeText] = React.useState("Add todo...");
    return (<SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
    </SafeAreaView>);
};

export class MainApp extends Component {
    render() {
        return (<View style={ styles.container } className="the-container">
            <Text>Open up App.js to start working on your app!</Text>
            <TheForm />
        </View>);
    }
};
