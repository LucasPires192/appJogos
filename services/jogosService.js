// const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_URL = 'http://10.0.2.2:8000/api';

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
        const response = await fetch(`${API_URL}/${produtoId}`, {
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