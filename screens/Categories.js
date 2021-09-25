import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import db from '../temp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { collection, doc, setDoc, getDoc,getDocs,query,where,limit } from '@firebase/firestore';

const fullHeight = Dimensions.get('screen').height;
const fullWidth = Dimensions.get('screen').width;
const Stack = createNativeStackNavigator();

function Categories() {

    const [categoriesData, setCategoriesData] = useState([]);
    // data retrieval from firebase
    // dklds
    useEffect(async () => {
        const q = query(collection(db, "categories"),limit(21));
        var i =0;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
             console.log("\n"+i);i++;
             setCategoriesData((prev) => {
                return [...prev, doc.data()];
              });
        });
    }, []);
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'red' },
                headerRight: () => {
                    <Icon name="bag" size={30} />
                }
            }}
        >
            <Stack.Screen
                name="Categories"
                options={{
                    headerStyle: { backgroundColor: '#fff' },
                    headerRight: ({ color, size }) => (
                        <View
                            style={{
                                paddingRight: 15,
                            }}
                        >
                            <Icon name={"shopping-bag"} size={30} color={'green'} />
                        </View>
                    ),
                }}
            >{() => (
                <View style={styles.container}>
                    <View
                        style={{
                            display: 'flex',
                            width: fullWidth,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom:4,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                top: 0,
                                //position: 'absolute',
                                shadowColor: '#411',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 0.4,
                                shadowRadius: 3,
                                elevation: 5,
                            }}
                        >
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 50,
                                    width: fullWidth * 0.8
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder="useless placeholder"
                                />
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 50,
                                    width: fullWidth * 0.15
                                }}
                            >
                                <Icon name="search" size={30} color={"green"} />
                            </View>
                        </View>
                    </View>
                    <ScrollView>
                    <View
                        style={{
                            flexWrap:'wrap',
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'center',
                        }}
                    >
                        
                        {categoriesData.map((data)=>
                        <View
                            style={{
                                width:fullWidth*0.3,
                                height:fullWidth*0.42,
                                padding:5,
                                borderRadius:10,
                                borderWidth:1,
                                borderColor:'#fcf',
                            }}
                        >
                            <Image source = {{uri:`${data.cphoto}`}}
                                style = {{ width: fullWidth*0.28, height:fullWidth*0.28 , borderTopStartRadius:10,borderTopEndRadius:10, }}
                            />
                            <Text>{data.cname}</Text>
                        </View>
                        )}
                    
                    </View>
                    </ScrollView>
                </View>
            )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'column',
    },
    input: {
        height: '100%',
        width: '100%',
    }
})
