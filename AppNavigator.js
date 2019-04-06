import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation';
import { Main, Follower } from './src/screens'
import React from 'react'
import { Text } from 'react-native';
import Drawer from './src/container/Drawer'

const Tabs = createBottomTabNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ? <Text>1</Text> : <Text>2</Text>
                )
            }
        },
        Follower: {
            screen: Follower,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused ? <Text>1</Text> : <Text>2</Text>
                )
            }
        },
    },
    {
        tabBarOptions: {
            labelStyle: {
                display: 'none'
            },
            style: {
                height: 40,
                backgroundColor: 'pink',
                borderTopWidth: 0,
            }
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
