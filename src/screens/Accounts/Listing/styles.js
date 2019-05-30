import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../lib/theme';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDFE7'
    },
    accountList: {
        paddingHorizontal: 10,
        paddingTop: 30,
        paddingBottom: 10,
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
    line: {
        position: 'absolute',
        left: 0,
        width,
        height: 200,
    },
    lineTop: {
        top: -190,
        height: 140,
        zIndex: 1,
        elevation: 1,
        transform: [
            { skewY: '45deg' }
        ],
        backgroundColor: theme.four,
    },
    lineBottom: {
        bottom: -100,
        transform: [
            { skewY: '20deg' }
        ],
        backgroundColor: theme.four
    },
    button: {
        position: 'absolute',
        right: 20,
        top: 20,
        width: 40,
        height: 40,
        zIndex: 2,
        elevation: 2,
    },
    buttonIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
});
