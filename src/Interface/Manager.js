
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StyleSheet, Text, View , Image } from 'react-native';
import profile from '../components/manager/Profile';
import projects from '../components/manager/Projects';
import consultants from '../components/manager/Consultants';
import planning from '../components/manager/Planning';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

const NavManager = () => {
  return (
    <Tab.Navigator
      barStyle={{
        showLabel: false,
      position: 'absolute',
      bottom: 15,
      left: 10,
      right: 10,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height: 90,}}

      activeColor="#f08700"
      inactiveColor="#748c94"
      shifting={true}
    >
      <Tab.Screen 
        name="Projects" component={projects}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="profile" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Planning" component={planning}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Consultant" component={consultants}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" component={profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavManager;
