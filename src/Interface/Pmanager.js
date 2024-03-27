
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StyleSheet, Text, View , Image } from 'react-native';
import profile from '../components/pmanager/Profile';
import assignments from '../components/pmanager/Assignments';
import parking from '../components/pmanager/Parking';

import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialBottomTabNavigator();

const NavPmanager = () => {
  return (
    <Tab.Navigator
      barStyle={{
        showLabel: false,
      position: 'absolute',
      bottom: 60,
      left: 10,
      right: 10,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height:35,}}

      activeColor="#f08700"
      inactiveColor="#748c94"
      shifting={true}
    >
      <Tab.Screen 

        name="Parking" component={parking} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="profile" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Assignments" component={assignments} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Pofile" component={profile} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavPmanager;
