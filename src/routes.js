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
            
         />

         <Stack.Screen
            name='Detail'
            component={Detail}
         />
      </Stack.Navigator>
   )
}

export default Routes;