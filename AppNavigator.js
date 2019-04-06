import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import { Main, Follower } from './src/screens'

const AppNavigator = createStackNavigator({

        Main,
        Follower,

    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

export default createAppContainer(AppNavigator);
