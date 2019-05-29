import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './styles.js';
import RightArrowIcon from '../../assets/icons/RightArrow';
import UserIcon from '../../assets/icons/User';
import PasswordIcon from '../../assets/icons/Password';
import { connect } from 'react-redux';
import { login } from "../../store/actions/login";
import PropTypes from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            right: new Animated.Value(30),
        };
    }

    animated = (state, value) => {
        Animated.timing(state, { toValue: value, duration: 1000, easing: Easing.elastic() }).start()
    };

    componentWillMount() {
        this.animated(this.state.right, -30);
    }

    goLogin = async () => {
        try {
            await this.props.login(this.state.username, this.state.password)
        } catch (e) {
            console.log(error)
        }
    };

    renderItem = (isLogin, loginErrorMessage, login) => {
        if (isLogin) {
            return (<ActivityIndicator style={ styles.loading } color="white"/>)
        }
        if (login) {
            console.log(login);
            return (<Text style={ styles.successText }>OK...</Text>)
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
        const { isLogin, loginErrorMessage, login } = this.props.loginToProps;
        return (
            <View style={ styles.container }>
                <StatusBar barStyle="dark-content"/>
                <Text style={ styles.pageTitle }>Giriş Yap</Text>
                <View style={ [styles.line, styles.lineTop] }/>
                <View style={ [styles.line, styles.lineBottom] }/>
                <View style={ styles.inputWrapper }>
                    <View style={ styles.inputBox }>
                        <UserIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="Kullanıcı Adı"
                                   style={ styles.input }
                                   onChangeText={ (text) => this.setState({ username: text }) }
                        />
                    </View>
                    <View style={ styles.inputBox }>
                        <PasswordIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="Parola"
                                   style={ styles.input }
                                   secureTextEntry
                                   onChangeText={ (text) => this.setState({ password: text }) }
                        />
                    </View>
                    <Animated.View style={ [styles.button, { right: right }] }>
                        <TouchableOpacity style={ styles.buttonIn } onPress={ this.goLogin.bind(this) }>
                            <RightArrowIcon fill="white" style={ styles.buttonIcon }/>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                { this.renderItem(isLogin, loginErrorMessage, login) }
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

export default connect(mapStateToProps, { login })(Login)
