# Projeto React Native com Expo Router 👋

Este é um projeto mobile desenvolvido com **React Native**, utilizando **Expo**, **React Navigation** e o sistema de rotas do **expo-router**. O layout principal é definido no arquivo `RootLayout`, responsável por carregar fontes personalizadas, controlar o tema (claro/escuro) e gerenciar a tela de splash.

---

## 📁 Estrutura do Projeto

```bash
.
├── app/                         # Contém as rotas da aplicação
│   ├── (tabs)/                  # Rotas com navegação por abas
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
├── components/                 # Componentes reutilizáveis da interface
│   ├── __tests__/              # Testes automatizados dos componentes
│   ├── ui/                     # Componentes visuais reutilizáveis (UI)
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

Na saída, você encontrará opções para abrir o aplicativo em um

- [build de desenvolvimento](https://docs.expo.dev/develop/development-builds/introduction/)
- [Emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [simulador iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), um sandbox limitado para testar o desenvolvimento de aplicativos com o Expo

Você pode começar a desenvolver editando os arquivos dentro do diretório **app**. Este projeto usa [roteamento baseado em arquivo](https://docs.expo.dev/router/introduction).



## 🧱 Tecnologias utilizadas

- React Native

- Expo

- Expo Router

- TypeScript

- React Navigation



## 🚀 Como executar

1. **Instale as dependências:**

```bash
npm install
# ou
yarn install
Execute o projeto em modo de desenvolvimento:

bash
Copiar
Editar
npx expo start
Abra no emulador ou dispositivo físico usando o app Expo Go ou um emulador Android/iOS.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.



## ⚠️ Desafios e Soluções
| Desafio | Solução |
|---------|---------|
| Splash screen travando | Uso do SplashScreen.preventAutoHideAsync() e verificação do carregamento de fontes com useFonts |
| Tema claro/escuro automático | Separação das rotas dentro de (tabs)/ e uso de _layout.tsx em diferentes níveis |
| Organização da navegação com abas | Implementado com hooks personalizados (useColorScheme.ts, useThemeColor.ts) |



## 🔍 Comparativo: Fetch vs Axios
| Critério | Fetch | Axios |
|---------|-------|-------|
| Simplicidade | Nativo no JS, leve | Mais completo e robusto |
| Manipulação de erros | Mais manual | Mais fácil com interceptors |
| Configuração | Requer mais código | Simples de configurar baseURL, headers etc |
| Uso no projeto | ✅ (se você usou fetch) |



## 🧠 Criatividade e Funcionalidades Extras
* 🌗 Suporte a tema claro/escuro automático

* 🎨 Interface personalizada com fontes e imagens

* 📱 Navegação com abas intuitiva

* ⚙️ Componentes reutilizáveis e organização modular

* 🚫 Página 404 customizada com +not-found.tsx

  

## 📌 Observações
Certifique-se de estar com o Node.js e Expo CLI atualizados.

Este projeto utiliza fontes customizadas e temas adaptáveis (claro/escuro).

Arquivos de imagem e fontes estão organizados na pasta assets.



---




## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
