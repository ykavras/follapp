import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header, Account } from "../../../components/";

class AccountsListing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header backOnPress={() => navigate('Accounts')} title="Hesaplar"/>
                <Account/>
            </View>
        );
    }
}


export default AccountsListing;

