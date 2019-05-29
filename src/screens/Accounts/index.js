import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar, TextInput, ActivityIndicator } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { accountAdded } from "../../store/actions/account";
import PropTypes from 'prop-types';

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }


    componentDidMount() {

    }

    accountAdded = async () => {
        try {
            await this.props.accountAdded(this.state.username)
        } catch (e) {
            console.log(error)
        }
    };

    renderItem = (isAccount, accountMessage, account) => {
        if (isAccount) {
            return (<ActivityIndicator style={ styles.loading } color="white"/>)
        }
        if (account) {
            return (<Text style={ styles.successText }>Kullanıcı Başarı ile eklenmiştir.</Text>)
        }
        if (accountMessage) {
            for (let [key, value] of Object.entries(accountMessage.data)) {
                return (<Text style={ [styles.successText, styles.successTextErr] }>{ key } : { value }</Text>)
            }
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { isAccount, accountMessage, account } = this.props.accountAddedToProps;
        return (
            <View style={ styles.container }>
                <StatusBar hidden/>
                <Text style={ styles.pageTitle }>Kullanıcı Ekle</Text>
                <View style={ styles.inputBox }>
                    <TextInput onChangeText={ (text) => this.setState({ username: text }) }
                               style={ styles.input } placeholder="Kullanıcı Adı" placeholderTextColor="black"/>
                </View>
                { this.renderItem(isAccount, accountMessage, account) }
                <TouchableOpacity style={ styles.button } onPress={ this.accountAdded.bind(this) }>
                    <Text style={ styles.buttonTitle }>Hesap Ekle</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Accounts.propTypes = {
    accountAdded: PropTypes.func.isRequired,
    accountAddedToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        accountAddedToProps: state.accountReducer,
    }
};

export default connect(mapStateToProps, { accountAdded })(Accounts)

