import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme'

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.four,
        overflow: 'hidden',
    },
    pageTitle: {
        fontSize: 30,
        fontFamily: theme.fontSemiBold,
        textAlign: 'center',
        color: theme.accent,
        marginBottom: 30,
    },
    inputWrapper: {
        backgroundColor: theme.accent,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 10,
        width: width - 40,
        justifyContent: 'center'
    },
    inputBox: {
        justifyContent: 'center',
    },
    inputIcon: {
        position: 'absolute',
        left: 10,
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    inputBoxTop: {
        //borderTopRightRadius: 20,
    },
    inputBoxBottom: {
        //borderBottomRightRadius: 20
    },
    input: {
        paddingVertical: 24,
        paddingLeft: 50,
        paddingRight: 40,
        fontFamily: theme.fontSemiBold,
        color: theme.four,
        fontSize: 16,
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: theme.four,
        borderRadius: 60 / 2,
    },
    buttonIn: {
        padding: 18,
    },
    buttonIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    line: {
        position: 'absolute',
        width: width * 2,
        left: -(width / 2),
        height: 200,
        backgroundColor: theme.accent
    },
    lineTop: {
        top: -100,
        transform: [
            { skewY: '20deg' }
        ]
    },
    lineBottom: {
        bottom: -100,
        transform: [
            { skewY: '20deg' }
        ]
    },
    goButton: {
        marginTop: 40,
        backgroundColor: theme.accent,
        alignSelf: 'flex-start',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    goButtonTitle: {
        fontFamily: theme.fontSemiBold,
        color: theme.four,
        fontSize: 16,
        paddingVertical: 14,
        paddingHorizontal: 30,
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
