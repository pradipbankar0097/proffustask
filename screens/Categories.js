import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import db from '../temp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();

function Categories() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{backgroundColor:'red'},
                headerRight:()=>{
                    <Icon name="bag" size={30} />
                }
            }}
        >
            <Stack.Screen 
                name="Categories"
                options={{
                    headerStyle:{ backgroundColor:'#fff' },
                    headerRight: ({ color, size }) => (
                        <View
                            style={{
                                paddingRight:15,
                            }}
                        >
                        <Icon name={"shopping-bag"} size={30} color={'green'} />
                        </View>
                      ),
                }}
            >{()=>(
                 <View style={ styles.container }>
                      <Text>Categories</Text>
                 </View>        )}
            </Stack.Screen>
        </Stack.Navigator>
        // <View style={ styles.container }>
        //     <Text>Categories</Text>
        // </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
})
