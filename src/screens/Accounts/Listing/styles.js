import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../lib/theme';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    accountList: {
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    loadingWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        paddingHorizontal: 4,
        fontSize: 14,
        textAlign: 'center',
        color: theme.four,
        fontFamily: theme.fontSemiBold
    },
});
