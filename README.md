# DHSchools!

Esse repositório é destinado á um projeto a ser desenvolvido com os alunos da Digital House. O objetivo da prática a ser desenvolvida é revisar os conceitos de MVC utilizando o Express e aplicar o Sequelize ao processo.


# Roadmap

### Primeira Parte: Criando um ciclo Rota → View → Controller

 1. Crie um arquivo `AreasRouter.js` na pasta /routes
 2. Crie um roteador com uma rota get para '/areas' no arquivo AreasRouter:\
    - *Essa rota deve direcionar a requisição para o método AreasController.index (ainda inexistente)*\
    - *Lembre-se de exportar o roteador para que ele seja importado e usado no app.js*\
**[commit 7f6b24a]**

 3. Altere o app.js para que ele possa utilizar o roteador definido em AreasRouter.js
    - *Nesse momento o seu node deve estar mostrando uma mensagem de erro*
        ```
        router.get('/areas', AreasController.index);
                ^
        ReferenceError: AreasController is not defined
        ```
4. Crie uma pasta /controllers:
5. Crie na pasta /controllers um arquivo `AreasController.js`
6. Crie um objeto literal com a função index.:
    - *A função index recebe dois parâmetros; req e res.*
    - *O objeto leteral que você acabou de criar é o seu controller!*
    - *A função index deve retornar a requisição, por enquanto, somente com uma string qualquer, por exemplo: `res.send("Olá, áreas");`*
    - *Lembre-se de exportar o objeto literal criado para que ele possa ser utilizado em outros scripts*


7. Importe o controller AreasController em AreasRouter para que o método `AreasController.index` seja encontrado:\
    
    > **Teste** - Ao acessar http://localhost:3000/areas você deve ver uma página escrita "Olá, áreas"
    >
    > **[commit 31d93d4]**
    

8. Faça o `AreasController.index` retornar a view 'areas/areas-index':\
    
    > **Teste** - Ao acessar http://localhost:3000/areas você deve ver uma página com a interface do sistema.
    > 
    > **[commit 053a306]**
    ***

### Segunda Parte: Instalando o sequelize e criando um model simples

9. Instale os pacotes sequelize-cli, sequelize e mysql2
10. Crie um arquivo `.sequelizerc` na raíz do projeto.
11. No arquivo `.sequelizerc`
    - Importe a biblioteca `path`;
    - Crie exporte um objeto literal com os quatro atributos que definem as pastas importantes para o sequelize. Seu conteúdo deve ficar assim:
    ```
    const path = require('path')

    module.exports = {
        config: path.resolve('./database/config', 'config.js'),
        'models-path': path.resolve('./database/models'),
        'seeders-path': path.resolve('./database/seeders'),
        'migrations-path': path.resolve('./database/migrations'),
    }
    ```

12. Inicie o sequelize em seu projeto com o `sequelize init`.\
        
    > **Teste** - O comando `sequelize init` deve ter criado uma pasta database e, dentro dela, outras quatro: config, migrations, models e seeders.
    > 
    > **commit f2f3f75**

13. Altere o arquivo `/database/config.js`:
    - *Modifique os valores para que ele consiga se conectar ao seu banco de dados no MySQL*
    - *Exporte o objeto literal definido no arquivo usando o `module.exports`*
  

    >**Teste**
    > 
    > - Crie uma pasta `tests`
    > - Crie um arquivo `dbcon.test.js` e adicione o código
    > ```
    > const {QueryTypes, Sequelize} = require('sequelize');
    > const config = require('../database/config/config').development;
    > 
    > const sequelize = new Sequelize(config);
    > sequelize.query("SELECT * FROM areas",{ type: QueryTypes.SELECT }).then(
    >     areas => {
    >         console.log(areas);
    >         process.exit();
    >     }
    > )
    > ```
    > - Execute o script criado com o comando `node tests/dbcon.test.js`
    > Espera-se que a saída seja algo assim:
    > ```
    > Executing (default): SELECT * FROM areas
    > []
    > ```
    >
    >**commit d3b1147**

14. Na pasta `database/models` crie um arquivo Area.js. Este arquivo conterá o model que representa a entidade *Area*
    - *Neste script você deve definir e exportar uma função que recebe dois parâmetros: sequelize e DataTypes (nesta ordem)*
    - *Esta função deve retornar um objeto*
    - *Este objeto a ser retornado é criado pela execução da função `sequelize.define()`*
    - *A função `sequelize.define()` recebe três parâmetros.*
      1. Uma string que será o nome do model. No caso, 'Area'.
      2. Um objeto identifica as colunas da tabela com seus respectivos tipos. Neste caso, são duas colunas: tipo e ano_matricula
      ```
      {
          tipo: DataTypes.STRING(100),
          ano_matricula: DataTypes.INTEGER,
      }
      ```
      3. Um objeto carregando algumas configurações. A primeira será o nome da tabela no atributo tableName: 'areas'. A segunda será para dizer que essa tabela não tem timestamps.
      ```
      {
        tableName: 'areas',
        timestamps: false
      }
      ```

    - *Lembre de retornar o objeto criado pela execução da função sequelize.define()*

    > **Teste**
    > - Crie um script areas.test.js na pasta tests com o seguinte conteúdo
    >   ```
    >    const { sequelize, Area } = require('../database/models');
    >    
    >    Area.findAll().then(
    >        data => {
    >            console.log(data.map( u => u.toJSON()));
    >            sequelize.close();
    >        }
    >    )
    >   ```
    > - Execute o script com o comando `node tests/areas.test.js`
    > - Espera-se obter o resultado
    >   ```
    >   Executing (default): SELECT `id`, `tipo`, `ano_matricula` FROM `areas` AS `Area`;
    >   []
    >   ```
    > Insira alguns dados na tabela areas e repita o teste. :wink: 