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
