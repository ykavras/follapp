import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import CheckIcon from '../../icons/Check'

export function Account(props) {
    const { account, title, check, onPress } = props;
    return (
        <TouchableOpacity style={styles.account} onPress={onPress}>
            <Text style={styles.accountTitle}>{account} {title}</Text>
            {
                check ? <CheckIcon style={styles.check}/> : null
            }
        </TouchableOpacity>
    );
}

Account.defaultProps = {
    account: "@Account",
    title: "Account 1",
    check: false,
};

export default Account;
