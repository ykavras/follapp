import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: theme.four,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    button: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        width: 34,
        height: '100%',
        resizeMode: 'contain',
    },
    title: {
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        color: theme.accent,
        fontWeight: 'bold',
    },
    addAccountNum: {
        fontSize: 12,
        color: theme.accent,
        fontWeight: 'bold',
        paddingRight: 4,
    },
});
