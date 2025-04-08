# 📱 Expo Router API App

Este é um projeto mobile desenvolvido com **React Native**, utilizando **Expo**, **React Navigation** e o sistema de rotas do **expo-router**. O layout principal é definido no arquivo `RootLayout`, responsável por carregar fontes personalizadas, controlar o tema (claro/escuro) e gerenciar a tela de splash.

---

## 📁 Estrutura do Projeto

```
├── app/                          # Contém as rotas da aplicação
│   ├── (tabs)/                   # Rotas com navegação por abas
│   │   ├── _layout.tsx          # Layout das rotas dentro da aba (tabs)
│   │   ├── explore.tsx          # Tela de exploração (ex: feed, categorias)
│   │   └── index.tsx            # Tela inicial da aba principal
│   ├── _layout.tsx              # Layout padrão das rotas da pasta `app`
│   ├── +not-found.tsx           # Tela exibida para rotas não encontradas (404)
│   └── api.ts                   # Arquivo para configuração e chamadas à API    
├── assets/                      # Arquivos estáticos do projeto
│   ├── fonts/                   # Fontes customizadas utilizadas no app
│   │   └── SpaceMono-Regular.ttf
│   └── images/                  # Imagens utilizadas na interface
│       ├── adaptive-icon.png
│       ├── favicon.png
│       ├── icon.png
│       ├── partial-react-logo.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       └── splash-icon.png
├── components/                  # Componentes reutilizáveis da interface
│   ├── __tests__/               # Testes automatizados dos componentes
│   ├── ui/                      # Componentes visuais reutilizáveis (UI)
│   ├── IconSymbol.tsx          # Componente de ícone adaptado
│   ├── TabBarBackground.tsx    # Componente de fundo da barra de navegação
│   ├── ThemedText.tsx          # Componente de texto com suporte a temas
│   └── ...                     # Outros componentes visuais reutilizáveis
├── constants/                  # Constantes globais do app (cores, temas, etc.)
│   └── Colors.ts               # Definições de cores do app
├── hooks/                      # Hooks personalizados para lógica reutilizável
│   ├── useColorScheme.ts       # Detecta se o tema do sistema é claro ou escuro
│   ├── useColorScheme.web.ts   # Versão web do hook de tema
│   └── useThemeColor.ts        # Retorna cores do tema atual (claro/escuro)
└── ...                         # Outros arquivos e diretórios do projeto
```

---

## 📦 Tecnologias Utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.github.io/router/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- TypeScript

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Execute o app:**

```bash
npx expo start
```

4. **Abra no seu celular:**
   - Baixe o app **Expo Go** na Play Store ou App Store.
   - Escaneie o QR code exibido no terminal ou navegador.

---

## 🌐 API

O projeto consome dados da [Jikan API](https://docs.api.jikan.moe/), uma API pública baseada no MyAnimeList.

A URL utilizada é:  
`https://api.jikan.moe/v4/seasons/upcoming`  
Essa rota retorna animes que serão lançados nas próximas temporadas.

As requisições são feitas utilizando `fetch` no arquivo `app/api.ts`.

---

## ✨ Funcionalidades

- Navegação por abas com Expo Router
- Splash screen personalizada
- Fonte customizada via `expo-font`
- Suporte automático a tema claro/escuro
- Requisição a API REST e exibição de dados
- Layout responsivo e organizado
- Componentes reutilizáveis

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

