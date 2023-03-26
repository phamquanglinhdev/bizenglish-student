import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginActivity from "./src/activites/LoginActivity";
import {Provider} from 'react-redux'
import MainActivity from "./src/activites/MainActivity";
import {createStore} from "redux";
import {allReducers} from "./src/reducers/allReducers";

const Stack = createNativeStackNavigator();

export default function App() {
    const store =createStore(allReducers)
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="LoginActivity" component={LoginActivity} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name="MainActivity" component={MainActivity} options={{
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}