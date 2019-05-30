import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import { Login, Register, Accounts, AccountListing, AccountProfile, Follower, Like, Credit } from '../../screens'
import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import theme from "../../lib/theme";
import styles from './styles'
import AccountsIcon from '../../icons/Accounts'
import FollowerIcon from '../../icons/Follower'
import LikeIcon from '../../icons/Like'
import CreditIcon from '../../icons/Credit'


const Tabs = createBottomTabNavigator(
    {
        Accounts: {
            screen: Accounts,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <AccountsIcon style={ styles.icon }/>
                        :
                        <AccountsIcon style={ [styles.icon, { opacity: 0.5 }] }/>
                )
            }
        },
        Follower: {
            screen: Follower,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <FollowerIcon style={ styles.icon }/>
                        :
                        <FollowerIcon style={ [styles.icon, { opacity: 0.5 }] }/>
                )
            }
        },
        Like: {
            screen: Like,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <LikeIcon style={ styles.icon }/>
                        :
                        <LikeIcon style={ [styles.icon, { opacity: 0.5 }] }/>
                )
            }
        },
        Credit: {
            screen: Credit,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <CreditIcon style={ styles.icon }/>
                        :
                        <CreditIcon style={ [styles.icon, { opacity: 0.5 }] }/>
                )
            }
        },
    }, {
        tabBarComponent: (props) => {
            const {
                navigation: { state: { index, routes } },
                style,
                activeTintColor,
                inactiveTintColor,
                renderIcon,
                jumpTo
            } = props;
            return (
                <View style={ {
                    flexDirection: 'row',
                    height: 70,
                    width: '100%',
                    ...style
                } }>
                    {
                        routes.map((route, idx) => (
                            <View
                                key={ route.key }
                                style={ {
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                } }
                            >
                                <TouchableOpacity onPress={ () => jumpTo(route.key) }>
                                    { renderIcon({
                                        route,
                                        focused: index === idx,
                                        tintColor: index === idx ? activeTintColor : inactiveTintColor
                                    }) }
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
            );
        },
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: theme.four
            },
        }
    }
);


const StackNavigator = createStackNavigator(
    {
        subNavigator: {
            screen: Tabs,
            navigationOptions: { header: null }
        },
        Login,
        Register,
        Accounts,
        AccountProfile,
        Follower,
        Like,
        Credit,
    }, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);


const RootNavigator = createSwitchNavigator({
    StackNavigator,
    AccountListing,
}, {
    initialRouteName: 'AccountListing',
});

export default createAppContainer(RootNavigator)
