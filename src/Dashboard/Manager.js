// NavManager.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import profile from '../components/manager/Profile';
import projects from '../components/manager/Projects';
import consultants from '../components/manager/Consultants';
import planning from '../components/manager/Planning';


const Tab = createBottomTabNavigator();

const NavManager = () => {
  return (
<Tab.Navigator
tabBarOptions={{
  showLabel: false,
  style: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
   
    
    

  }
}}
>
<Tab.Screen name="Projects" component={projects}/>
<Tab.Screen name="Planning" component={planning} />
<Tab.Screen name="Consultant" component={consultants}/>
<Tab.Screen name="Profile" component={profile}/>
</Tab.Navigator>

  );

}



export default NavManager ;