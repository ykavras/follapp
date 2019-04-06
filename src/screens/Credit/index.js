import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Credit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('Accounts')}>
                    <Text>Go Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Credit;

