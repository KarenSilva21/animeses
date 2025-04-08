import axios from 'axios';

const JIKAN_API_URL = 'https://api.jikan.moe/v4';

export const fetchAnime = async (id: number) => {
    try {
        const response = await axios.get(`${JIKAN_API_URL}/anime/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar dados do anime:', error);
        throw error;
    }
};
