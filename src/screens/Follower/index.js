import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Follower extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Follower</Text>
            </View>
        );
    }
}


export default Follower;

