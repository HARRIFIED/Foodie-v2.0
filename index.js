

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';



const Foodie = () => 
    <Provider {...{store}}>
        <App />
    </Provider>


AppRegistry.registerComponent(appName, () => Foodie);
