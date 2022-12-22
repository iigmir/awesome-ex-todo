import React from "react";
import { View } from "react-native";
import { styles } from "./style.js";
import { TheList } from "./list.js";
import { TheForm } from "./form.js";

export class MainApp extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }
    submitted(title = "") {
        const list = this.state.list;
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
        this.setState({ list: [...list, new_item] });
    }
    remove_by_id(id = 0) {
        const list = this.state.list;
        this.setState({
            list: list.filter( (item) => item.id !== id )
        });
    }
    render() {
        return (<View style={ styles.container }>
            <TheForm submit={ (title) => this.submitted(title) } />
            <TheList list={ this.state.list } remove={ (id) => this.remove_by_id(id) } />
        </View>);
    }
}
