import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Homescreen from '../Home/Homescreen';
import Addscreen from '../Add/Addscreen';
import Editscreen from '../Edit/Editscreen';

const Rootstack = createStackNavigator(
	{
		Home : {
			screen : Homescreen,
			navigationOptions: ({ navigation }) => ({
		      title: 'Materi',
		    }),
		},
		Add : {
			screen : Addscreen,
			navigationOptions: ({ navigation }) => ({
		      header : null
		    }),
		},
		Edit : {
			screen : Editscreen,
			navigationOptions: ({ navigation }) => ({
		      header : null
		    }),
		}
	},
	{
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1e88e5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        left : 107,
      },
    },
  }
)

export default createAppContainer(Rootstack);