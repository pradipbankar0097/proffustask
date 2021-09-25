import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from './Categories';
import CategoryItems from './CategoryItems';
import Item from './Item';

const fullHeight = Dimensions.get('screen').height;
const fullWidth = Dimensions.get('screen').width;

const Stack = createNativeStackNavigator();


function Menu(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

Menu.propTypes = {

}

export default Menu;

/*
<View
            style={{
                display:'flex',height:fullHeight,flex:1,backgroundColor:'white',
            }}
        >
            <Text>hello</Text>
            <View
                style={{
                    display:'flex',flexDirection:'column-reverse',alignSelf:'baseline'
                }}
            >
                <Text>bye</Text>
            </View>
        </View>
*/