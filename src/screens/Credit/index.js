import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Credit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Credit</Text>
            </View>
        );
    }
}


export default Credit;

