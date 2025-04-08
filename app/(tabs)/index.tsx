import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const App = () => {
  // Estados principais
  const [searchQuery, setSearchQuery] = useState<string>('');  // Estado para o input de pesquisa
  const [animeList, setAnimeList] = useState<any[]>([]);       // Estado para armazenar a lista de animes encontrados
  const [loading, setLoading] = useState<boolean>(false);      // Estado para controlar o loading
  const [error, setError] = useState<string | null>(null);     // Estado para erros

  // Estados para o botão personalizável
  const [buttonText, setButtonText] = useState<string>('Buscar'); // Texto do botão
  const [buttonColor, setButtonColor] = useState<string>('black'); // Cor do botão

  // URL da API Jikan
  const JIKAN_API_URL = 'https://api.jikan.moe/v4';

  // Função para buscar animes pelo nome
  const searchAnimes = async (query: string) => {
    if (query.trim() === '') return;  // Não faz nada se a pesquisa estiver vazia

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${JIKAN_API_URL}/anime`, {
        params: { q: query, limit: 10 },  // Limita a 10 resultados
      });
      setAnimeList(response.data.data);
    } catch (err) {
      setError('Erro ao buscar os animes.');
    } finally {
      setLoading(false);
    }
  };

  // Função para mostrar detalhes de um anime
  const showAnimeDetails = (anime: any) => {
    alert(`Detalhes do Anime: ${anime.title}\n${anime.synopsis}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Busca de Animes</Text>

      {/* Input para o nome do anime */}
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Digite o nome do anime"
      />

      {/* Botão personalizável */}
      <Button
        title={buttonText}
        onPress={() => searchAnimes(searchQuery)}
        color={buttonColor} // Cor do botão
      />

      {loading && <Text style={styles.loading}>Carregando...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}

      {/* Exibe a lista de animes encontrados */}
      <FlatList
        data={animeList}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => showAnimeDetails(item)} style={styles.animeItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.genres?.map((genre: any) => genre.name).join(', ')}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5
  },
  loading: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
    
  },
  error: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'red',
  },
  animeItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,  // Sombra para Android
    shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});

export default App;
