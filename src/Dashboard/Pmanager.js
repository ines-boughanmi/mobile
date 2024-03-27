// NavPmanager.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import profile from '../components/pmanager/Profile';
import assignments from '../components/pmanager/Assignments';
import parking from '../components/pmanager/Parking';


const Tab = createBottomTabNavigator();

const NavPmanager = () => {
  return (
<Tab.Navigator>
<Tab.Screen name="Parking" component={parking}/>
<Tab.Screen name="Assignments" component={assignments} />
<Tab.Screen name="Pofile" component={profile}/>
</Tab.Navigator>

  );

}



export default NavPmanager ;