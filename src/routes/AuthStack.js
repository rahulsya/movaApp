import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from '../screens/Auth/Onboarding';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="On Boarding"
          options={{headerShown: false}}
          component={Onboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
