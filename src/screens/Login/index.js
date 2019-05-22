import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles.js';
import RightArrowIcon from '../../assets/icons/RightArrow';
import UserIcon from '../../assets/icons/User';
import PasswordIcon from '../../assets/icons/Password';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigate } = this.props.navigation;
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
                                   style={ styles.input }/>
                    </View>
                    <View style={ styles.inputBox }>
                        <PasswordIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="Parola"
                                   style={ styles.input }
                                   secureTextEntry/>
                    </View>
                    <TouchableOpacity style={ styles.button }>
                        <RightArrowIcon fill="white" style={ styles.buttonIcon }/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={ styles.goButton } onPress={ () => navigate('Register') }>
                    <Text style={ styles.goButtonTitle }>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Login;