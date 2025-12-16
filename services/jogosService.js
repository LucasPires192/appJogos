const API_URL = process.env.EXPO_PUBLIC_API_URL;

import { Alert } from 'react-native';

export async function buscarJogos() {
    try {
        const response = await fetch(`${API_URL}/jogos`);
        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Erro ao buscar jogos');
        }

        return Array.isArray(data.data.items) ? data.data.items : [];
    } catch (error) {
        console.error('Erro em buscarJogos:', error.message);
        throw error;
    }
}

export const atualizarJogo = async (jogoId, updatedData, navigation) => {
    try {
        const response = await fetch(`${API_URL}/jogos/${jogoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        console.log('Dados enviados:', updatedData);

        if (response.status === 200) {
            Alert.alert('Sucesso!', 'Jogo atualizado com sucesso!');
            navigation.navigate('Home');
        } else {
            const textResponse = await response.text();
            let responseData;
            try {
                responseData = JSON.parse(textResponse);
            } catch (error) {
                console.warn('A resposta não é um JSON válido.');
                responseData = null;
            }

            throw new Error(responseData?.message || 'Erro desconhecido ao atualizar o jogo');
        }
    } catch (error) {
        console.error('Erro ao atualizar o jogo:', error.message);
        Alert.alert('Erro ao atualizar', `Detalhes: ${error.message}`);
    }
};

export const deletarJogos = async (jogoId, setRegistros) => {
    try {
        const response = await fetch(`${API_URL}/jogos/${jogoId}`, {
            method: 'DELETE',
        });


        if (response.ok) {
            const responseData = await response.json();

            if (responseData.success) {
                Alert.alert('Sucesso!', responseData.message);

                setRegistros((prevRegistros) => {
                    const novaLista = prevRegistros.filter((jogo) => jogo.id != jogoId);
                    console.log('Nova lista de jogos:', novaLista);
                    return novaLista;
                });

            } else {
                Alert.alert('Erro', responseData.message);
            }
        } else {

            const textResponse = await response.text();
            let responseData = null;

            try {
                responseData = JSON.parse(textResponse);
            } catch (error) {
                console.warn('A resposta não é um JSON válido.');
            }

            throw new Error(responseData?.message || 'Erro desconhecido ao excluir o jogo');
        }
    } catch (error) {
        console.error('Erro ao excluir o produto:', error.message);
        Alert.alert('Erro ao excluir', `Detalhes: ${error.message}`);
    }
};

export const criarJogo = async (jogoData) => {
    try {
        const response = await fetch(`${API_URL}/jogos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jogoData),
        });

        // Verifica se a API retornou status 204 (sem conteúdo)
        if (response.status === 204) {
            Alert.alert('Sucesso!', 'Cadastro realizado com sucesso!');
            return {}; // Retorna um objeto vazio para evitar erro
        }

        // Caso a API retorne conteúdo, tentamos converter para JSON
        const textResponse = await response.text();
        console.log('Resposta bruta da API:', textResponse);

        let responseData;
        try {
            responseData = JSON.parse(textResponse);
        } catch (error) {
            console.warn('A resposta não é um JSON válido.');
            responseData = null;
        }

        if (!response.ok || !responseData) {
            throw new Error(responseData?.message || 'Erro desconhecido na API');
        }

        return responseData;
    } catch (error) {
        console.error('Erro ao cadastrar o jogo:', error.message);
        Alert.alert('Erro ao cadastrar', `Detalhes: ${error.message}`);
        return null;
    }
};