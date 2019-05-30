import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import BackIcon from '../../icons/Back'
import PlusIcon from '../../icons/Plus'

export function Header(props) {
    const { title, backOnPress, accountOnPress } = props;
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.button} onPress={backOnPress}>
                <BackIcon fill="white" style={styles.buttonIcon}/>
            </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={accountOnPress}>
                <PlusIcon style={styles.buttonIcon}/>
            </TouchableOpacity>
        </View>
    );
}

Header.defaultProps = {
    title: 'Başlık',
}

export default Header;
