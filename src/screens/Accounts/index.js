import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, StatusBar} from 'react-native';
import styles from './styles';

const userProfile = require('../../assets/img/user.png');

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        //this.props.navigation.navigate('AccountProfile')
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View
                style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.profile}>
                    <Image source={userProfile} style={styles.img}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigate('AccountListing')}>
                    <Text style={styles.buttonTitle}>Hesap Ekle</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Accounts;

