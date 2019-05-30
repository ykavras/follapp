import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Credit } from "../../../components";

const background = require('../../../assets/img/background-profile.jpg');
import BackIcon from '../../../icons/Back'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAccount } from "../../../store/actions/account";

const mockData = [
    {
        id: 1,
        follower: 100,
        credit: 1000,
    },
    {
        id: 2,
        follower: 500,
        credit: 5000,
    },
    {
        id: 3,
        follower: 1000,
        credit: 10000,
    },
    {
        id: 4,
        follower: 5000,
        credit: 50000,
    },
];

class AccountProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { detailID } = this.props.navigation.state.params;
        this.props.getAccount(detailID);
    }


    renderHeader = (isGetAccount, getAccountErrorMessage, getAccount) => {
        if (isGetAccount) return (
            <View style={ styles.loadingWrapper }>
                <ActivityIndicator color="black" size="large"/>
            </View>
        );
        if (getAccountErrorMessage) {
            for (let [key, value] of Object.entries(getAccountErrorMessage.data)) {
                return (
                    <View style={ styles.loadingWrapper }>
                        <Text style={ styles.errorMessage }>{ key } : { value }</Text>
                    </View>
                )
            }
        }
        if (getAccount) {
            const { navigate } = this.props.navigation;
            return (
                <View style={ styles.header }>
                    <TouchableOpacity style={ styles.backButton } onPress={ () => navigate('AccountListing') }>
                        <BackIcon fill="white" style={ styles.backButtonIcon }/>
                    </TouchableOpacity>
                    <View style={ styles.headerContent }>
                        <Image source={ background } style={ styles.profileImage }/>
                        <View style={ styles.headerInfo }>
                            <Text style={ styles.username }>{ getAccount.username }</Text>
                            <Text style={ styles.bio }>{ getAccount.bio }</Text>
                        </View>
                    </View>
                </View>
            )
        }
    };

    render() {
        const { isGetAccount, getAccountErrorMessage, getAccount } = this.props.getAccountToProps;
        return (
            <View style={ styles.container }>
                { this.renderHeader(isGetAccount, getAccountErrorMessage, getAccount) }
                <FlatList contentContainerStyle={ styles.flatList }
                          data={ mockData }
                          keyExtractor={ (item) => 'credit_' + item.id }
                          renderItem={ ({ item }) => (
                              <Credit follower={ item.follower } credit={ item.credit }/>
                          ) }/>
            </View>
        );
    }
}


AccountProfile.propTypes = {
    getAccount: PropTypes.func.isRequired,
    getAccountToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        getAccountToProps: state.accountReducer,
    }
};

export default connect(mapStateToProps, { getAccount })(AccountProfile)


