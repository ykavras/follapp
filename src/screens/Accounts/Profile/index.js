import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Credit } from "../../../components";

const background = require('../../../assets/img/background-profile.jpg');
const profile = require('../../../assets/img/user.png');
import BackIcon from '../../../icons/Back'

const mockData = [
    {
        id: 1,
        follower: 100,
        credit: 1000,
    },
    {
        id: 2,
        follower: 500,
        credit: 5000,
    },
    {
        id: 3,
        follower: 1000,
        credit: 10000,
    },
    {
        id: 4,
        follower: 5000,
        credit: 50000,
    },
];

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.profile}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.backButton} onPress={()=>navigate('AccountListing')}>
                        <BackIcon style={styles.backButtonIcon}/>
                    </TouchableOpacity>
                    <Image source={background} style={styles.image}/>
                    <View style={styles.contentIn}>
                        <View style={styles.bottom}>
                            <Image source={profile} style={styles.user}/>
                            <Text style={styles.contentTitle}>Aktif Hesap Bilgileri</Text>
                        </View>
                    </View>
                    <LinearGradient colors={['rgba(0,0,0,0.8)', '#002C3E']} style={styles.color}/>
                </View>
                <FlatList contentContainerStyle={styles.flatList} data={mockData}
                          renderItem={({ item }) => (<Credit follower={item.follower}
                                                             credit={item.credit}/>)}/>
            </View>
        );
    }
}


export default Profile;

