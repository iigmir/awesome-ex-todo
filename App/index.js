import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style.js";
import { TheList } from "./list.js";
import { TheForm } from "./form.js";

export const MainApp = () => {
    const [list, set_list] = React.useState([]);
    const submitted = (title) => {
        const get_id = (list = []) => {
            if( list.length < 1 ) {
                return 0;
            }
            const index = list.length - 1;
            return list[index].id + 1;
        };
        const new_item = {
            title: title,
            id: get_id(list)
        };
        const push_list = old_array => [...old_array, new_item];
        set_list(push_list);
    };
    return (<View style={ styles.container }>
        <Text>Open up App.js to start working on your app!</Text>
        <TheForm submit={ submitted } />
        <TheList list={ list } />
    </View>);
};
