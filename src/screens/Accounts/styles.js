import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../lib/theme'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.four,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    profile: {
        width: 160,
        height: 160,
        borderRadius: 160 / 2,
        backgroundColor: theme.accent,
        padding: 6,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.accent,
        textAlign: 'center',
    },
});
