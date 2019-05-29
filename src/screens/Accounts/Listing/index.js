import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text, StatusBar } from 'react-native';
import styles from './styles';
import { Header, Account } from "../../../components/";
import { connect } from 'react-redux';
import { accountListing } from "../../../store/actions/account";
import PropTypes from 'prop-types';


class AccountsListing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.accountListing();
    }

    renderItem = (isAccountListing, accountListingErrorMessage, accountListing) => {
        if (isAccountListing) return (
            <View style={ styles.loadingWrapper }>
                <ActivityIndicator color="black" size="large"/>
            </View>
        );
        if (accountListingErrorMessage) {
            for (let [key, value] of Object.entries(accountListingErrorMessage.data)) {
                return (
                    <View style={ styles.loadingWrapper }>
                        <Text style={ styles.errorMessage }>{ key } : { value }</Text>
                    </View>
                )
            }
        }
        if (accountListing) {
            return (
                <FlatList contentContainerStyle={ styles.accountList } data={ accountListing }
                          renderItem={ ({ item }) =>
                              <Account title={ item.username } check={ item.check }/> }/>
            )
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { isAccountListing, accountListingErrorMessage, accountListing } = this.props.accountListingToProps;
        return (
            <View style={ styles.container }>
                <StatusBar hidden/>
                <Header backOnPress={ () => navigate('Accounts') } title="Hesaplar"/>
                { this.renderItem(isAccountListing, accountListingErrorMessage, accountListing) }
            </View>
        );
    }
}

AccountsListing.propTypes = {
    accountListing: PropTypes.func.isRequired,
    accountListingToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        accountListingToProps: state.accountReducer,
    }
};

export default connect(mapStateToProps, { accountListing })(AccountsListing)


