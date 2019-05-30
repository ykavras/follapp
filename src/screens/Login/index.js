import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './styles.js';
import RightArrowIcon from '../../assets/icons/RightArrow';
import UserIcon from '../../assets/icons/User';
import PasswordIcon from '../../assets/icons/Password';
import { connect } from 'react-redux';
import { login, emailChanged, passwordChanged } from "../../store/actions/login";
import { registerDefault } from "../../store/actions/register";
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            right: new Animated.Value(30),
        };
    }

    componentDidMount() {
        //AsyncStorage.clear()
        AsyncStorage.getItem('token').then((value) => {
            if (value !== null) {
                this.props.loginToProps.token = value;
                const { navigate } = this.props.navigation;
                return (navigate('Accounts'))
            }
        });
    }

    onEmailChanged = (text) => {
        this.props.emailChanged(text);
    };

    onPasswordChanged = (text) => {
        this.props.passwordChanged(text);
    };

    animated = (state, value) => {
        Animated.timing(state, { toValue: value, duration: 1000, easing: Easing.elastic() }).start()
    };

    componentWillMount() {
        this.animated(this.state.right, -30);
        this.props.registerDefault()
    }

    goLogin = async () => {
        try {
            const { username, password } = await this.props.loginToProps;
            await this.props.login(username, password)
        } catch (e) {
            console.log(error)
        }
    };

    renderItem = (isLogin, loginErrorMessage, login, token) => {
        if (isLogin) {
            return (<ActivityIndicator style={ styles.loading } color="white"/>)
        }
        if (login && token) {
            AsyncStorage.setItem('token', login.token);
            const { navigate } = this.props.navigation;
            return (navigate('Accounts'))
        }
        if (loginErrorMessage) {
            for (let [key, value] of Object.entries(loginErrorMessage.data)) {
                return (<Text style={ [styles.successText, styles.successTextErr] }>{ key } : { value }</Text>)
            }
        }
    };


    render() {
        const { navigate } = this.props.navigation;
        const { right } = this.state;
        const { isLogin, loginErrorMessage, login, token } = this.props.loginToProps;
        return (
            <View style={ styles.container }>
                <StatusBar hidden/>
                <Text style={ styles.pageTitle }>Giriş Yap</Text>
                <View style={ [styles.line, styles.lineTop] }/>
                <View style={ [styles.line, styles.lineBottom] }/>
                <View style={ styles.inputWrapper }>
                    <View style={ styles.inputBox }>
                        <UserIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="Kullanıcı Adı"
                                   style={ styles.input }
                                   onChangeText={ this.onEmailChanged.bind(this) }
                        />
                    </View>
                    <View style={ styles.inputBox }>
                        <PasswordIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="Parola"
                                   style={ styles.input }
                                   secureTextEntry
                                   onChangeText={ this.onPasswordChanged.bind(this) }
                        />
                    </View>
                    <Animated.View style={ [styles.button, { right: right }] }>
                        <TouchableOpacity style={ styles.buttonIn } onPress={ this.goLogin.bind(this) }>
                            <RightArrowIcon fill="white" style={ styles.buttonIcon }/>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                { this.renderItem(isLogin, loginErrorMessage, login, token) }
                <TouchableOpacity style={ styles.goButton } onPress={ () => navigate('Register') }>
                    <Text style={ styles.goButtonTitle }>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    loginToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        loginToProps: state.loginReducer,
    }
};

export default connect(mapStateToProps, { login, emailChanged, passwordChanged, registerDefault })(Login)
