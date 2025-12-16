import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import { styles } from './style.js';

export default function SplashScreen({ navigation }){
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.splashContainer}>
            <Image 
                source={require('../../assets/splashscreen.jpg')}
                style={styles.splashImage} />
            <ActivityIndicator 
                size="large" 
                color="#0000ff" 
                style={styles.loader} 
            />
        </View>
    );
};