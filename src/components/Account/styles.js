import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
    account: {
        backgroundColor: theme.accent,
        shadowColor: theme.four,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        minHeight: 60,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        paddingRight: 50,
    },
    accountText: {
        fontSize: 20,
        color: theme.four,
        width: '100%',
        fontFamily: theme.fontSemiBold,
    },
    check: {
        position: 'absolute',
        right: 15,
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
