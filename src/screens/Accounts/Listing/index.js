import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text, StatusBar } from 'react-native';
import styles from './styles';
import { Header, Account } from "../../../components/";
import { connect } from 'react-redux';
import { accountListingFunc } from "../../../store/actions/account";
import { defaultAccountAdded } from "../../../store/actions/account";
import PropTypes from 'prop-types';

class AccountsListing extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.accountListingFunc();
        this.props.defaultAccountAdded();
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
            const { navigate } = this.props.navigation;
            return (
                <FlatList contentContainerStyle={ styles.accountList }
                          data={ accountListing }
                          keyExtractor={ (item) => 'profile_' + item.id }
                          renderItem={ ({ item }) => (
                              <Account title={ item.username } check={ item.check }
                                       onPress={ () =>
                                           navigate('AccountProfile', { detailID: item.id }) }
                              />) }/>
            )
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { isAccountListing, accountListingErrorMessage, accountListing } = this.props.accountListingFuncToProps;
        return (
            <View style={ styles.container }>
                <StatusBar hidden/>
                <Header backOnPress={ () => navigate('Accounts') } title="Hesaplar"
                        accountOnPress={ () => navigate('Accounts') }
                />
                { this.renderItem(isAccountListing, accountListingErrorMessage, accountListing) }
            </View>
        );
    }
}

AccountsListing.propTypes = {
    accountListingFunc: PropTypes.func.isRequired,
    accountListingFuncToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        accountListingFuncToProps: state.accountReducer,
    }
};

export default connect(mapStateToProps, { accountListingFunc, defaultAccountAdded })(AccountsListing)


