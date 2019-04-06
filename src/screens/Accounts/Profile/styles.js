import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../lib/theme'

export default StyleSheet.create({
    profile: {
        flex: 1,
    },
    content: {
        zIndex: 1,
    },
    contentIn: {
        minHeight: 140,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 2
    },
    backButton: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 15,
        top: 15,
        zIndex: 3,
    },
    backButtonIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    image: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottom: {
        top: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    user: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderWidth: 4,
        borderColor: theme.accent,
        borderRadius: 80 / 2,
    },
    contentTitle: {
        fontFamily: theme.fontSemiBold,
        color: theme.accent,
        fontSize: 16,
        paddingLeft: 10,
        flex: 1,
    },
    color: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    flatList: {
        paddingTop: 35,
        paddingHorizontal: 15,
    }
});
