import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import CheckIcon from '../../icons/Check'
export function Account(props) {
    const { account, accountTitle } = props;
    return (
        <TouchableOpacity style={styles.account}>
            <Text style={styles.accountText}>{account} {accountTitle}</Text>
            <CheckIcon style={styles.check}/>
        </TouchableOpacity>
    );
}

Account.defaultProps = {
    account: "@Account",
    accountTitle: "Account 1"
}

export default Account;
