import React, { Component } from "react";
import { Text, View, SafeAreaView, TextInput, Alert, Button } from "react-native";
import { styles } from "./style.js";

const TheForm = () => {
    const [text, onChangeText] = React.useState("Add todo...");
    const submit = () => Alert.alert('Button with adjusted color pressed');
    return (<SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
            title="Press me"
            color="#f194ff"
            onPress={submit}
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
