import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={ SplashScreen } />
                <Stack.Screen name="Login" component={ Login } />
                <Stack.Screen name="Home" component={ Home } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}