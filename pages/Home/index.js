import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { buscarJogos } from '../../services/jogosservice.js';

import { styles } from './style.js';

export default function Home({ navigation }) {
    const [jogos, setJogos] = useState([]);
    const [mensagem, setMensagem] = useState('');

    async function carregarJogos() {
        try {
            const data = await buscarJogos();
            setJogos(data.data);
        } catch (err) {
            setMensagem(err.message);
        }
    }

    useEffect(() => {
        carregarJogos();
    }, []);


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text>Jogos</Text>

                <FlatList
                    data={jogos}
                    renderItem={({ item }) => <Item title={item.nome} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}