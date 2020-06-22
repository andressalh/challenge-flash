
# Index

- [Sobre](#sobre)
- [Documentação](#documentacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Database](#database)
- [Back-end](#back-end)
- [Front-end](#front-end)
- [Iniciar aplicação](#inicializacao)

<a id="sobre"></a>

Criação de empresa e funcinários utilizando javascript. Utilizar a API criado e fazer requisição get para pegar os dados das empresas e funcionários e mostrar no frontend utilizando react. 

<a id="documentacao"></a>

## :file_folder: Documentação

Para fixar melhor o conteúdo e conceitos fiz algumas anotações.
<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [Ant design](https://ant.design/)
- [Mongodb](https://www.mongodb.com/)


<p align="center">
  <img width="200" height="80" src="https://github.com/andressalh/next-level-week/blob/master/rockset/web/src/assets/logo.svg">
</p>

<a id="database"></a>
<h1>Database</h1>

Foi utilizado o <strong>Mongodb</strong> como banco de dados.

<h2>Dependências: </h2>

- Mongodb
- Mongoose

<h3>sqlite3</h3>
  
Instalação do driver <strong>Mongodb</strong> na aplicação.

- Instalação: 

```
npm i mongodb
```
  
<h3>Mongoose</h3>
  
O <strong>Mongoose</strong> é uma ferramenta de modelagem de objeto MongoDB.

- Instalação:

```
npm i mongoose
```

<a id="back-end"></a>
<h1>Back end</h1>

<h2>Dependências: </h2>

- Express
- Cors

<h3>Comandos iniciais</h3>

```
npm init -y
```

<h3>Express</h3>

O Express é responsável pelo roteamento do servidor.
 
- Instalação do express

```
npm install express
```

<h3>cors</h3>

O Cors permite que outras urls acessem nossa API.  

```npm install cors
```

<a id="front-end"></a>
<h1>Front end</h1>

<h2>Dependências: </h2>

- Axios
- React router dom
- React-icons
- Ant Design
- React Select


<h3>Criar o template React </h3>

Para começar a parte front end, executar o react app.

 ```
 npx create-react-app nomedapasta
 ```

<h3>Axios</h3>

Axios é utilizado para fazer requisições HTTP.

- Instalação:

```
npm install axios
```

<h3>React Router DOM</h3>

O React Router DOM será responsável pelo roteamento da aplicação web. 

- Instalação:
```
npm install react-router-dom
```
<h3>React-icons</h3>

O react-icons permite usar icons nas aplicações.

- Instalação:

 ```npm install react-icons```
 
- Para utiliza-los

 ```
 // Importação
import { FiArrowLeft} from 'react-icons/fi';

// Component
<FiArrowLeft/>
```


<h3>Ant Design</h3>

Foi utilizado a bibioteca <strong>Ant Design</strong> que permite construir de forma rápida e com um ótimo design.

- Instalação:

```
npm install axios
```

<h3>React select</h3>


- Instalação:

```
npm add react-select
```

<a id="inicializacao"></a>

<h3>Criação do banco</h3>

Criar mongodb database "empresas"

<h3>Popular o banco de dados</h3>

Foi utilizado o insomnia para popular o banco de dados:

Rotas:
- localhost:300/empresa/create
- localhost:300/empresa/funcionarios

Comandos:

<h5>Back end</h5>
```
node src/index.js
```
<h5>Front end</h5>
```
npm start
```
