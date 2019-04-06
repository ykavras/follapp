import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export function Credit(props) {
    const { follower, credit } = props;
    return (
        <TouchableOpacity style={styles.credit}>
            <Text style={styles.creditText}>{follower} Takipçi {credit} Kredi</Text>
        </TouchableOpacity>
    );
}

Credit.defaultProps = {
    follower: 100,
    credit: 1000
}

export default Credit;
