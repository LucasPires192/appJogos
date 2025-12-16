import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { styles } from './style.js';

export default function Registro({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                name,
                bio
            });

            Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso!', [
                { text: 'OK', onPress: () => navigation.replace('Home') }
            ]);
        } catch (err) {
            //Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente.');
            console.log('ERRO FIREBASE:', err);
            Alert.alert('Erro', err.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.formCard}>
                <View style={styles.inputGroup}>
                    <Text>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text>Bio</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Bio"
                        value={bio}
                        onChangeText={setBio}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={handleRegister}
                    >
                        <Text style={styles.buttonsText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => { navigation.replace('Login') }}
                    >
                        <Text style={styles.buttonsText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}