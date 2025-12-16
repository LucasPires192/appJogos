import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

import { styles } from './style.js';

export default function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigation.replace('Home');
        }catch (err){
            setError('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    const handlePasswordReset = async () => {
        if(!email){
            Alert.alert('Atenção', 'Informe seu email para recuperar a senha.');
            return;
        }

        try{
            await sendPasswordResetEmail(auth, email);
            Alert.alert('Sucesso', 'Email de recuperação enviado. Verifique sua caixa de entrada.');
        }catch (err){
            Alert.alert('Erro', 'Não foi possível enviar o email de recuperação.');
        }
    };

    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput 
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput 
                style={styles.input}
                placeholder='Senha'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonsText}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => navigation.navigate('Registro')}
                >
                    <Text style={styles.buttonsText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={handlePasswordReset}
                >
                    <Text style={styles.buttonsText}>
                        Esqueci a senha
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}