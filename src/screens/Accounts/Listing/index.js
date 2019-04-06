import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { Header, Account } from "../../../components/";

const mockData = [
    {
        id: 1,
        account: '@Account',
        title: 'Account 1',
        check: true,
    },
    {
        id: 2,
        account: '@Account',
        title: 'Account 2'
    },
    {
        id: 3,
        account: '@Account',
        title: 'Account 3'
    },
    {
        id: 4,
        account: '@Account',
        title: 'Account 4'
    }
];

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
                <FlatList style={styles.accountList} data={mockData}
                          renderItem={({ item }) => <Account onPress={() => navigate('AccountProfile')} account={item.account}
                                                             title={item.title}
                                                             check={item.check}/>}/>
            </View>
        );
    }
}


export default AccountsListing;

