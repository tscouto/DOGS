# Dogs - Rede Social para Pets

O **Dogs** é um aplicativo web desenvolvido para os amantes de pets, onde é possível criar uma conta, compartilhar fotos dos seus pets, comentar nas fotos de outros usuários e visualizar estatísticas das suas postagens. O aplicativo oferece uma interface intuitiva e amigável, com funcionalidades completas para garantir uma experiência satisfatória para os usuários.

## Funcionalidades

- **Cadastro de Usuários**: Permite criar uma conta com informações como nome de usuário, email e senha.
- **Login e Autenticação**: Sistema de login seguro com validação de token.
- **Postagem de Fotos**: Usuários podem postar fotos dos seus pets, incluindo informações como nome, peso e idade.
- **Comentários**: Permite aos usuários comentar nas fotos postadas por outros usuários.
- **Visualização de Fotos**: Feed de fotos dos usuários, com a possibilidade de ampliar as imagens.
- **Estatísticas**: Visualização de estatísticas de acesso das fotos postadas pelo usuário.
- **Responsividade**: Design responsivo que se adapta a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js (Express) com JSON Server para simular o backend
- **Estilos**: CSS Modules
- **Gerenciamento de Rotas**: React Router
- **Gerenciamento de Estado**: useState e useEffect
- **Bibliotecas**:
  - React
  - React Router DOM
  - JSON Server (simula um banco de dados local)
  - React Icons (para ícones sociais)
  - Victory (para gráficos)

## Como Rodar o Projeto

### Passo 1: Clonar o Repositório

Primeiramente, clone o repositório do projeto para sua máquina local:

```bash
git clone https://github.com/tscouto/dogs.git
```

Passo 2: Instalar Dependências
Após clonar o repositório, navegue até a pasta do projeto e instale as dependências necessárias utilizando o npm:


```bash
cd dogs
npm install
```

Passo 3: Rodar o Projeto
Com as dependências instaladas, basta rodar o projeto em seu ambiente local com o comando abaixo:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador.

Passo 4: Simulação de Backend
Como o projeto usa o JSON Server para simular o backend, inicie o servidor JSON com o seguinte comando:

```bash
npm run server
```


Agora, a API do projeto estará rodando localmente na porta 5000, e você poderá testar a criação de novos projetos e serviços.

Como o Projeto Funciona
Home Page: Ao acessar o site, você será direcionado à página inicial, onde pode visualizar um resumo do projeto e um botão para criar novos projetos.

Criação de Projetos: A partir da página de criação de projetos, você pode preencher informações como o nome e descrição do projeto. Após isso, o projeto é salvo e você é redirecionado para a página de projetos.

Listagem de Projetos: Na página de projetos, você pode visualizar todos os projetos cadastrados, editar ou excluir se necessário.

Adição de Serviços: Para cada projeto, você pode adicionar serviços e associar custos a esses serviços.

Imagens do Projeto
Aqui estão algumas imagens que mostram a interface e como o aplicativo funciona na prática:

Tela principal de login:

![Tela de Login](https://github.com/user-attachments/assets/a6bf3457-af49-4ff0-b6a8-161856fc9ce1)

Tela de cadastro de login:
![Tela de cadastro de login](https://github.com/user-attachments/assets/ac7cca04-4933-483c-b019-b7129779c3f3)

Tela de menu principal:
![menu principal lista de fotos](https://github.com/user-attachments/assets/504da547-e4f5-4687-acac-18e64e99de22)

Tela de cadastro de pet:
![cadastrar foto](https://github.com/user-attachments/assets/69cc05c6-6b20-4480-aa83-b18f6852973f)

Tela Modal de comentarios de fotos:
![Menu de comentarios de fotos](https://github.com/user-attachments/assets/12d6311c-a96c-4427-856d-19919b31ac38)

Tela estástico do site:
![Menu estatistico de acessos](https://github.com/user-attachments/assets/f164893a-d5f1-4f5a-85eb-3b3ea8ac1ec7)



