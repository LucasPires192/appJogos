import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Card, CardTitle, CardContent } from '../../components/Card';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { buscarJogos, deletarJogo } from '../../services/jogosService.js';

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
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarJogos();
    }, []);


    const handleDelete = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza de que deseja deletar este Jogo?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Deletar', onPress: () => deletarJogo(id, setJogos) },
            ]
        );
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Jogos</Text>

                {loading ? (
                    <Text>Carregando Jogos...</Text>
                ) : (
                    jogos.length > 0 ? (
                        <FlatList
                            style={styles.flatlist}
                            data={jogos}
                            renderItem={({ item }) => (
                                <Card>
                                    <CardTitle>{item.nome} </CardTitle>
                                    <CardContent>
                                        <View>
                                            <Text>Genero: {item.genero}</Text>
                                            <Text>Ano: {item.ano}</Text>
                                            <Text>Plataforma: {item.plataforma}</Text>
                                        </View>
                                        <View style={styles.actionsColumn}>
                                            <IconButton
                                                icon="pencil"
                                                size={24}
                                                iconColor="#3498db"
                                                onPress={() => navigation.navigate('EditarJogo', { jogo: item })}
                                            />
                                            <IconButton
                                                icon="delete"
                                                size={24}
                                                iconColor="#e74c3c"
                                                onPress={() => handleDelete(item.id)}
                                            />
                                        </View>
                                    </CardContent>
                                </Card>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    ) : (
                        <Text>Nenhum Jogo cadastrado no momento.</Text>
                    )
                )}

                <TouchableOpacity
                    style={styles.floatingButton}
                    onPress={() => navigation.navigate('CriarJogo')}
                >
                    <Text style={styles.plusIcon}>＋</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}