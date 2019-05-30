import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../lib/theme';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDFE7'
    },
    flatList: {
        paddingTop: 35,
        paddingHorizontal: 15,
    },
    header: {
        height: height / 3.5,
        backgroundColor: theme.four,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 20,
        width: 30,
        height: 30,
    },
    backButtonIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 140,
        resizeMode: 'cover',
        borderRadius: 20,
        bottom: -20,
    },
    headerInfo: {
        flex: 1,
        paddingLeft: 20,
    },
    username: {
        color: '#DCDFE4',
        fontSize: 20,
        fontFamily: theme.fontSemiBold,
    },
    bio: {
        color: '#DCDFE4',
        fontSize: 14,
        fontFamily: theme.fontMedium,
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
