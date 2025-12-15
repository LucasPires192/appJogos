const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function buscarJogos() {
  try {
    const response = await fetch(`${API_URL}/jogos`);

    if (!response.ok) {
      throw new Error('Erro ao buscar jogos');
    }

    const data = await response.json();
    return data.data.items;
  } catch (error) {
    console.error('Erro em buscarJogos:', error);
    throw error;
  }
}