import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Routes() {
   return(
      <Stack.Navigator>
         <Stack.Screen
            name='Home'
            component={Home}
            options={{
               headerShown: false
            }}
         />

         <Stack.Screen
            name='Detail'
            component={Detail}
            options={{
               headerTransparent: true,
               headerTitle: '',
               headerTintColor: '#F5B819'
            }}
         />
      </Stack.Navigator>
   )
}

export default Routes;