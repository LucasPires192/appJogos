import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import { styles } from './style';

import { criarJogo } from '../../services/jogosService';

export default function CriarJogo({ navigation }) {
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [ano, setAno] = useState('');
    const [plataforma, setPlataforma] = useState('');

    const handleSubmit = async () => {
        if (!nome || !genero || !ano || !plataforma) {
            Alert.alert('Atenção', 'Preencha todos os campos antes de cadastrar.');
            return;
        }

        const newJogo = {
            nome,
            genero,
            ano: Number(ano),
            plataforma
        };

        try {
            const addedJogo = await criarJogo(newJogo);

            if (addedJogo) {
                Alert.alert('Sucesso!', 'Cadastro realizado com sucesso!', [
                    { text: 'OK', onPress: () => navigation.navigate('Home') },
                ]);

                setNome('');
                setGenero('');
                setAno('');
                setPlataforma('');
            }
        } catch (error) {
            Alert.alert('Erro', error.message || 'Erro ao cadastrar jogo');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Jogo</Text>
            <View style={styles.cardForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Jogo"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Gênero"
                    value={genero}
                    onChangeText={setGenero}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ano"
                    value={ano}
                    keyboardType="numeric"
                    onChangeText={setAno}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Plataforma"
                    value={plataforma}
                    onChangeText={setPlataforma}
                />

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonsText}>Cadastrar Jogo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => navigation.replace('Home')}
                    >
                        <Text style={styles.buttonsText}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}