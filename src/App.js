import React from 'react';

import {AuthStack, HomeStack} from './routes';
import './i18n.config';

import codePush from 'react-native-code-push';
let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const App = () => {
  return <HomeStack />;
};

export default codePush(codePushOptions)(App);
