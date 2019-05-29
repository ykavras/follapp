import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.four,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    pageTitle: {
        fontSize: 30,
        fontFamily: theme.fontSemiBold,
        color: theme.accent,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        borderWidth: 2,
        borderColor: theme.accent,
    },
    buttonTitle: {
        fontSize: 16,
        fontFamily: theme.fontSemiBold,
        color: theme.accent,
        textAlign: 'center',
    },
    inputBox: {
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: theme.accent,
        color: 'black'
    },
    input: {
        backgroundColor: theme.accent,
        padding: 14,
        fontSize: 14,
        fontFamily: theme.fontSemiBold
    },
    loading: {
        marginTop: 40,
    },
    successText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 14,
        fontFamily: theme.fontSemiBold,
        color: theme.accent
    },
    successTextErr: {
        color: theme.primary,
    },
});
