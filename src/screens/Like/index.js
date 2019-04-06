import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Like</Text>
            </View>
        );
    }
}


export default Like;

