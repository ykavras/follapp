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
        width: width * 2,
        left: -(width / 2),
        height: 200,
        backgroundColor: theme.four,
    },
    lineBottom: {
        bottom: -100,
        transform: [
            { skewY: '20deg' }
        ]
    },
    button: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 80,
        height: 80,
        zIndex: 2,
        elevation: 2,
        backgroundColor: theme.four,
        borderRadius: 80 / 2,
        borderTopRightRadius: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },
});
