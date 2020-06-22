
# Index

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Back-end](#back-end)
- [Database](#database)
- [Front-end](#front-end)
- [Iniciar aplicação](#inicializacao)

<a id="sobre"></a>

Essa aplicação permite adicionar uma empresa e funcinários utilizando <strong>JavaScript</strong>. Foram realizadas requisções <strong>post</strong> para adicionar um empresa e/ou um funcionário e <strong>get</strong> para que seja possível mostrar os dados retornados pela API no website.


<a id="documentacao"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [Ant design](https://ant.design/)
- [Mongodb](https://www.mongodb.com/)


<a id="back-end"></a>
<h1>Back end</h1>

<h3>Comandos iniciais</h3>

- Download e instalação do node js.
- Iniciar o projeto:

```
npm init -y
```

<h5>Criar as pastas para organizar o proejto<h5>
  
- src 
  
- Dentro de src criar: controllers, database e models

<a id="database"></a>

<h1>Database</h1>

Foi utilizado o <strong>Mongodb</strong> como banco de dados.

<h2>Dependências: </h2>

- Mongodb
- Mongoose

<h3>Mongodb</h3>
  
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

<h2>Dependências: </h2>

- Express
- Cors

<h3>Express</h3>

O Express é responsável pelo roteamento do servidor.
 
- Instalação do express

```
npm install express
```

<h3>Cors</h3>

O Cors permite que outras urls acessem nossa API.  

```
npm install cors
```

<a id="front-end"></a>
<h1>Front end</h1>

<h2>Dependências: </h2>

- Axios
- React router dom
- React icons
- Ant Design
- React Select


<h3>Criar o template React </h3>

Para começar a parte front end, executar o react app.

 ```
 npx create-react-app nomedoApp
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
<h3>React icons</h3>

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
npm install antd
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
- localhost:300/funcionarios/create

Comandos:

- Primeiro rodar o backend.
<h5>Back end</h5>

```
node src/index.js
```
<h5>Front end</h5>

```
npm start
```
