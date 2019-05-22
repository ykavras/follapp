import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles.js';
import CheckedIcon from '../../assets/icons/Checked';
import UserIcon from '../../assets/icons/User';
import PasswordIcon from '../../assets/icons/Password';
import EmailIcon from '../../assets/icons/Email';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigate } = this.props.navigation;
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
                                   style={ styles.input }/>
                    </View>
                    <View style={ styles.inputBox }>
                        <PasswordIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="Parola"
                                   style={ styles.input }
                                   secureTextEntry/>
                    </View>
                    <View style={ styles.inputBox }>
                        <EmailIcon style={ styles.inputIcon }/>
                        <TextInput placeholderTextColor="rgba(0,0,0,0.6)"
                                   placeholder="E-Posta"
                                   style={ styles.input }/>
                    </View>
                    <TouchableOpacity style={ styles.button }>
                        <CheckedIcon fill="white" style={ styles.buttonIcon }/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={ styles.goButton } onPress={ () => navigate('Login') }>
                    <Text style={ styles.goButtonTitle }>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Register;