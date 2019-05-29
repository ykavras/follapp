import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './styles.js';
import CheckedIcon from '../../assets/icons/Checked';
import UserIcon from '../../assets/icons/User';
import PasswordIcon from '../../assets/icons/Password';
import EmailIcon from '../../assets/icons/Email';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../store/actions/register";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
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

    goRegister = async () => {
        try {
            await this.props.register(this.state.username, this.state.email, this.state.password)
        } catch (e) {
            console.log(error)
        }
    };

    renderItem = (isRegister, registerErrorMessage, register) => {
        if (isRegister) {
            return (<ActivityIndicator style={ styles.loading } color="white"/>)
        }
        if (register) {
            console.log(register);
            return (<Text style={ styles.successText }>OK...</Text>)
        }
        if (registerErrorMessage) {
            for (let [key, value] of Object.entries(registerErrorMessage.data)) {
                return (<Text style={ [styles.successText, styles.successTextErr] }>{ key } : { value }</Text>)
            }
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { right } = this.state;
        const { isRegister, registerErrorMessage, register } = this.props.registerToProps;
        return (
            <View style={ styles.container }>
                <StatusBar barStyle="dark-content"/>
                <Text style={ styles.pageTitle }>Kayıt Ol</Text>
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
                    <View style={ styles.inputBox }>
                        <EmailIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="E-Posta"
                                   style={ styles.input }
                                   onChangeText={ (text) => this.setState({ email: text }) }
                        />
                    </View>
                    <Animated.View style={ [styles.button, { right: right }] }>
                        <TouchableOpacity style={ styles.buttonIn } onPress={ this.goRegister.bind(this) }>
                            <CheckedIcon fill="white" style={ styles.buttonIcon }/>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                { this.renderItem(isRegister, registerErrorMessage, register) }
                <TouchableOpacity style={ styles.goButton } onPress={ () => navigate('Login') }>
                    <Text style={ styles.goButtonTitle }>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


Register.propTypes = {
    register: PropTypes.func.isRequired,
    registerToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        registerToProps: state.registerReducer,
    }
};

export default connect(mapStateToProps, { register })(Register)
