import React from 'react';
import AppNavigator from './src/container/AppNavigator';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './src/store'

import NavigationService from './src/lib/NavigatorService';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <AppContainer ref={ navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                } }/>
            </Provider>
        );
    }
}
console.disableYellowBox = true;