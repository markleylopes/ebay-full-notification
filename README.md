# Ebay Notification Api
Através dessa api é possível cadastrar notificações para email, ao escolher um email, uma palavra e um intervalo de (2, 10, ou 30 minutos), e salvar essas informações, a api disparará nesse intervalo uma consulta ao ebay dos 3 produtos mais baratos para seu termo de pesquisa e você receberá a mensagem no email cadastrado;
## Requirements
1. Node 12+
2. Docker
3. Docker compose

## Configuração do backend para a api
No diretório do backend [/notification-api] verá um arquivo .env, edite para inserir suas credenciais, você precisa ter uma chave de acesso do ebay developers,
atribua seu app name do ebay à variável EBAY_APP_NAME=
Também precisará de configuração para servidor smtp, para ser possível enviar email, se não tiver configuração smtp, abra o link https://ethereal.email , clique em [ Create Ethereal Account], você verá uma configuração smtp, utilize, insira nas seguintes variáveis:
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=

O frontend já está com a url apontada segundo a configuração do container do backend

## Passos para executar a aplicação
1. Clone o projeto
```console
git clone git@github.com:markleylopes/ebay-full-notification.git
```
2. Entre no diretório da aplicação
```console
cd ebay-full-notification
```
2. Execute o comando abaixo
```console
docker-compose up --build
```
Após todos os containers iniciarem, abra no navegador o endereço local (http://localhost) e use a api através da interface,

## Explanação do projeto
No diretório notification-api/ estão todos os do backend, seguindo o modelo:
server.js: arquivo inicial da aplicação

src/: diretório que contém as rotas, serviços controllers e demais funções 
src/controllers: estão as funções de crud que acessa o mongoDb
src/errors: Classes de Erro para tratamento dos erros da API
src/middlewares: Está a função que intercepta os erros para enviar como json
src/models: modelos do mongodb com validações,
src/routes: rotas de acesso a API
src/services: Todos os demais serviços, nesse diretório estão os seguintes 

No frontend está sendo utilizado as seguintes tecnologias:
React, MaterialUi, Redux, React Hooks, Css in JS

## Como funciona? 
O módulo src/services/cron.js 3 crons no respectivo tempo  2, 10, 30 minutos, que efetuará uma requisição para o mongo db,  quando a solicitação for resolvida será feito um promisse com todos os termos cadastrados para consultar a api do ebay, ao retorno dessa promisse uma nova promisse é disparada enviando e email para as pessoas cadastradas em seus respectivos tempos, simples não é?!
