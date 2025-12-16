import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent } from '../../components/Card';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { buscarJogos } from '../../services/jogosService.js';

import { styles } from './style.js';

export default function Home({ navigation }) {
    const [jogos, setJogos] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);

    async function carregarJogos() {
        setLoading(true);

        try {
            const data = await buscarJogos();
            setJogos(data);
        } catch (err) {
            setMensagem(err.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarJogos();
    }, []);


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Jogos</Text>

                {loading? (
                    <Text>Carregando Jogos...</Text>
                ):(
                    jogos.length > 0?(
                        <FlatList
                        data={jogos}
                        renderItem={({ item }) => (
                            <Card>
                                <CardTitle>{item.nome} </CardTitle>
                                <CardContent>
                                    <Text>Genero: {item.genero}</Text>
                                    <Text>Ano: {item.ano}</Text>
                                    <Text>Plataforma: {item.plataforma}</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('EditarJogo', { jogo: item })}
                                    >
                                        <Text>
                                            Editar
                                        </Text>
                                    </TouchableOpacity>
                                </CardContent>
                            </Card>
                        )}
                        keyExtractor={item => item.id.toString()}
                        />
                    ) : (
                        <Text>Nenhum Jogo cadastrado no momento.</Text>
                    )
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}