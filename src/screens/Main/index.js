import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        );
    }
}


export default Main;

