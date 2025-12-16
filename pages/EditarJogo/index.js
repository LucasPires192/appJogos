import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { atualizarJogo } from '../../services/jogosService';

import { styles } from './style.js';

export default function EditarJogo({ route, navigation }) {
    const { jogo } = route.params;
    const [nome, setNome] = useState(jogo.nome);
    const [genero, setGenero] = useState(jogo.genero);
    const [ano, setAno] = useState(jogo.ano);
    const [plataforma, setPlataforma] = useState(jogo.plataforma);


    const handleUpdate = () => {
        const updatedData = {
            nome,
            genero,
            ano,
            plataforma
        };

        Alert.alert(
            'Confirmação',
            'Tem certeza de que deseja alterar este Jogo?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Alterar',
                    onPress: () => atualizarJogo(jogo.id, updatedData, navigation),
                },
            ]
        );
    };


    return (
        <View>
            <Text style={styles.title}>Editar Jogo</Text>
            <TextInput
                placeholder="Jogo"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Genero"
                value={genero}
                onChangeText={setGenero}
            />
            <TextInput
                placeholder="Ano"
                value={ano.toString()}
                keyboardType="numeric"
                onChangeText={text => setAno(Number(text))}
            />
            <TextInput
                placeholder="Plataforma"
                value={plataforma}
                onChangeText={setPlataforma}
            />

            <Button title="Alterar" onPress={handleUpdate} />
        </View>
    );
}