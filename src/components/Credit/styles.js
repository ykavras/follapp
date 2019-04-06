import React from 'react';
import { StyleSheet } from 'react-native';
import theme from "../../lib/theme";

export default StyleSheet.create({
    credit: {
        backgroundColor: theme.four,
        shadowColor: theme.four,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        minHeight: 60,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
    },
    creditText: {
        fontFamily: theme.fontSemiBold,
        color: theme.accent,
        fontSize: 20,
        textAlign: 'center',
    },
});
