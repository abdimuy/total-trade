/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppWrapper from './src/components/common/AppWrapper/AppWrapper';
import {name as appName} from './app.json';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
