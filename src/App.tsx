import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './pages/Home';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </ApplicationProvider>
  </>
);
