import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity  onPress={() => navigate('Follower')}>
                    <Text>Follower</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Main;

