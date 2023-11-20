# compartilhe-web: Guidelines do Projeto

Bem-vindo ao projeto compartilhe-web, um aplicativo web ReactJS que faz parte do ecossistema **compartilhe**. Este projeto, que segue a arquitetura two-tier, tem como objetivo facilitar a doação de itens, utensílios e a solicitação de ajuda. Leia as diretrizes abaixo para contribuir efetivamente para o desenvolvimento do compartilhe-web.

## Sobre o Projeto

O compartilhe-web é uma plataforma que permite que as pessoas postem campanhas de doação e pedidos de ajuda, conectando doadores e beneficiários de maneira eficiente e fácil. É importante notar que o compartilhe-web é dependente do backend compartilhe-api.

## Pré-requisitos

Antes de começar a contribuir para o projeto, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js
- npm (ou yarn)
- Git

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/compartilhe-online/compartilhe-web.git
cd compartilhe-web
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie a aplicação localmente:

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

A estrutura de pastas do projeto segue as melhores práticas recomendadas para projetos ReactJS. Certifique-se de entender a organização do código antes de fazer contribuições.

```
compartilhe-web/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- helpers/
|   |-- services/
|   |-- pages/
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

## Dependência da API

O compartilhe-web é dependente do compartilhe-api. Certifique-se de que a API esteja configurada corretamente para garantir o funcionamento adequado do frontend.

## Diretrizes de Contribuição

1. **Branching Model:**
   - Utilize o modelo de branching trunk-based.
   - Commits devem ser feitos diretamente na branch `main`.

2. **Padrões de Codificação:**
   - Siga as [Diretrizes de Estilo de Código do Airbnb](https://github.com/airbnb/javascript).
   - Utilize componentes funcionais sempre que possível.

3. **Comentários e Documentação:**
   - Documente funções e componentes complexos.
   - Mantenha os comentários relevantes e atualizados.

4. **Testes:**
   - Escreva testes unitários para novas funcionalidades.
   - Certifique-se de que todos os testes existentes passem antes de enviar uma solicitação de pull.

5. **Solicitações de Pull (PRs):**
   - Descreva claramente as alterações feitas na solicitação de pull.
   - Referencie problemas relacionados usando #<número do problema>.

6. **Versionamento Semântico:**
   - Siga as convenções de [Versionamento Semântico](https://semver.org/).

7. **Boas Práticas de Git:**
   - Commits devem ser claros e concisos.
   - Evite commits grandes e monolíticos.

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato com a equipe de desenvolvimento:

- Email: dev@compartilhe.online

Obrigado por contribuir para o compartilhe-web!