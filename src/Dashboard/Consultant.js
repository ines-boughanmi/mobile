// NavConsultant.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View , Image } from 'react-native';
import Profile from '../components/consultant/Profile';
import Mission from '../components/consultant/Mission';
import Schedule from '../components/consultant/Schedule';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const NavConsultant = () => {
  return (
    <Tab.Navigator
      
    >
      <Tab.Screen name="Mission" component={Mission}
      options={{tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent:'center', top:10
        }}>
          <Image
          source={require('../assets/icons/profile.png')}
          resizeMode='contain'
          style={{
            width:25,
            height:25,
            tintColor: focused ? '#e32f45' : '#748c94',
          }}
          />
          <Text style={{Color: focused ? '#e32f45' : '#748c94', fontSize:12}}></Text>
        </View>
      )}}
      />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,

  },

})

export default NavConsultant;

