# DesafioAngular

Esse projeto foi o desafio da sprint de angular do [Programa de Formação em TI](https://portal.formacaoti.senaicimatec.com.br/) do  do SENAI CIMATEC.

A proposta do desafio era desenvolver 3 páginas(login, home, dashboard).

A página Login deve conter os seguintes elementos:

- Formulário para aquisição de nome e senha.
- Botão para confirmar o login.
- O módulo login deve ser capaz de buscar os dados de usuário cadastrado no back-end e gerar autenticação 
no sistema. 
- usuário e senha cadastrados:
usuário: admin
senha: 123456

A página Home é acessada após efetuar o login e nela deve conter:

- Cartão com informação de boas-vindas ao sistema.
- Item de logout.
- Uma imagem de fundo.
- Link para acessar a página dashboard.

A página dashboard é acessada através do sidebar e nela deve conter:

- Um cartão com campo de busca, por nome, do modelo do veículo.
As opções para preenchimento devem ser buscadas no back-end.
Endereço da busca: http://localhost:3000/vehicle
- Três cartões apresentando os dados de total de vendas, número de veículos conectados ao sistema Ford e 
número de veículos com software atualizado.
Essas informações devem ser atualizadas de acordo com o modelo selecionando no primeiro 
cartão.
- Uma imagem do veículo correspondente ao selecionado no primeiro cartão no centro da página.
- Uma tabela com um campo de busca, por código do veículo, e cinco campos de apresentação de dados. 
Endereço da busca: http://localhost:3000/vehicleData
Exemplo de código do veículo: 2FRHDUYS2Y63NHD22454

Para executar o código:
- Faça o download do projeto ou execute no git Bash -> git clone <https://github.com/DemetriusBraga/Desafio-Angular-Front_Senai.git>
- Para compilar e executar a API abra o arquivo no terminal e execute os comandos “npm install” e, depois, 
“npm start”. Os dados estarão disponíveis em http://localhost:3000.
- Para executar o Front, abra o arquivo no terminal e execute os comandos "npm install" e, depois, "ng serve -o". A página deve ser carregada automaticamente em http://localhost:4200/login.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
