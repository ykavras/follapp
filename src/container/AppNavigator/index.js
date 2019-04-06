import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation';
import { Main, Follower, Like, Credit } from '../../screens'
import React from 'react'
import Drawer from '../Drawer'
import theme from "../../lib/theme";
import styles from './styles'
import AccountsIcon from '../../icons/Accounts'
import FollowerIcon from '../../icons/Follower'
import LikeIcon from '../../icons/Like'
import CreditIcon from '../../icons/Credit'

const Tabs = createBottomTabNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <AccountsIcon style={styles.icon}/>
                        :
                        <AccountsIcon style={[styles.icon, { opacity: 0.5 }]}/>
                )
            }
        },
        Follower: {
            screen: Follower,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <FollowerIcon style={styles.icon}/>
                        :
                        <FollowerIcon style={[styles.icon, { opacity: 0.5 }]}/>
                )
            }
        },
        Like: {
            screen: Like,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <LikeIcon style={styles.icon}/>
                        :
                        <LikeIcon style={[styles.icon, { opacity: 0.5 }]}/>
                )
            }
        },
        Credit: {
            screen: Credit,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <CreditIcon style={styles.icon}/>
                        :
                        <CreditIcon style={[styles.icon, { opacity: 0.5 }]}/>
                )
            }
        },
    },
    {
        tabBarOptions: {
            labelStyle: {
                display: 'none'
            },
            tabStyle: {},
            style: {
                height: 50,
                backgroundColor: theme.accent,
                borderTopWidth: 0,
            },
            swipeEnabled: true,
        },
    }
);

const contentComponent = props => <Drawer {...props} />

const DrawerNavigator = createDrawerNavigator(
    {
        app: { screen: Tabs }
    },
    {
        drawerWidth: 300,
        drawerBackgroundColor: 'transparent',
        initialRouteName: 'app',
        contentComponent
    }
)

const StackNavigator = createStackNavigator(
    {
        subNavigator: {
            screen: DrawerNavigator,
            navigationOptions: { header: null }
        },
        Main,
        Follower,
        Like,
        Credit,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                borderBottomWidth: 0
            }
        }
    }
)


const RootNavigator = createSwitchNavigator({
    StackNavigator,
}, {
    initialRouteName: 'StackNavigator',
});

export default createAppContainer(RootNavigator)
