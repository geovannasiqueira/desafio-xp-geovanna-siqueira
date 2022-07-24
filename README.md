# Desafio Técnico para XPinc

status: em andamento

# Contexto
Esse projeto foi desenvolvido como requisito para prosseguir no processo seletivo da XP. A proposta foi uma aplicação que simulasse uma conta digital que pudesse fazer aportes em ações, assim como saques e depósitos na conta.

## Técnologias usadas

> Desenvolvido usando: React, ContextAPI, Tailwind, DaisyUI, ES6, RTL

## Instalação do projeto

Para rodar o projeto localmente siga esse tutorial:

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _geovanna.carolline.gcs@gmail.com_.

1. Clone esse repositório:
```javascript
  git clone git@github.com:geovannasiqueira/desafio-xp-geovanna-siqueira.git
```

2. Entre no diretório criando:
```javascript
  cd desafio-xp-geovanna-siqueira/
```
3. Instale as dependências:
```javascript
  npm install
```

## Executando aplicação

  ```
    npm start
  ```
**por padrão a aplicação rodará em  _http://localhost:3000/_

## Executando Testes

  ```
    npm test
  ```
  **até o momento, testa a tela de login e a tela inicial de ações 

## Link para o deploy:

https://stocks-geovanna-xp.herokuapp.com/

# Funcionalidades:

## Tela de Login
  - Possui um input para inserir o email, e uma validação se o email tem o formato 'email@test.com';
  - Possui um input para inserir a senha, e uma validação se a senha possui pelo menos 6 caracteres;
  - Possui um botão que só fica habilitado quando as duas validações são satisfeitas;
  - Ao clicar o botão, o usuário é direcionado a página inical de ações.

## Tela de Ações
  - Após carregada essa tela faz requisição para uma API fictícia através dessa URL: _https://api-desafio-xp-geovanna.herokuapp.com/stocks_
  (**Essa API foi desenvolvida por mim, é uma API bem simples utilizando Node.js e Express, link do Repositório: _https://github.com/geovannasiqueira/api-desafio_)
  - Essa requisição retorna uma lista de ações que é renderizada na tela em uma tabela;
  - Essa tela possui duas tabelas, uma com todas as ações disponíveis e outra com as ações do usuário;
  - Se o usuário ainda não possui nenhuma ação uma mensagem aparece na tela ao invés da tabela, quando o usuário compra uma ação, essa ação aparece na tabela com o título "Minhas ações";
  - Ambas as tabelas possuem botões com "C" e a tabela "Minhas ações" possui também um botão "V";
  - Ao clicar no botão C, abre a tela de Compra/Venda;
  - Ainda nessa tela temos uma barra superior, com o email logado e um botão para fazer 'logout';
  - Temos também uma barra inferior com dois botões, o primeiro com um icone de 'casa' que leva para a tela inicial e outro com um ícone de 'porquinho' que leva para a tela de saldo;

## Tela de Saldo
  - Essa tela também possui uma barra superior e inferior assim como a tela de ações;
  - Possui o saldo atual;
  (**foi setado como valor inicial de saldo de 10000)
  - A tela possui um input para inserir um valor e dois botões (depositar e sacar);
  - Se clicado no botão de 'DEPOSITAR' o valor será somado ao saldo atual;
  - Se clicado no botão de 'SACAR' o valor será subtraído do saldo atual:
  (**O usuário não pode sacar um valor maior que o saldo atual)
  - O saldo é atualizado a cada ação de saque, depósito, compra e venda**;
  (**A funcionalidade de venda ainda está sendo implementada)
  
## Tela de compra/venda
  - Ao clicar no botão 'C' ou 'V', disposto nas tabelas, um modal é aberto na tela;
  - Essa tela possui uma tabela com a ação em interesse (clicada);
  - possui um botão de quantidade, que desabilita o botão de confirmar se:
      - a quantidade inserida for maior que a quantidade disponível;
      - se não estiver sido adicionada nenhuma ação;
      - se a quantidade superar o saldo atual;
  - possui um input se o usuário preferir informar quanto quer gastar, esse input atualiza a quantidade de acordo com o valor adicionado;
  - se estiver tudo certo, o botão 'CONFIRMAR' fica habilitado e ao ser clicado:
      - a ação é adicionada a tabela 'Minhas ações'
      - a quantidade da ação é atualizada na tabela de 'Disponiveis para investir'
      - o saldo é atualizado
  
## Imagens da aplicação

![image](https://user-images.githubusercontent.com/86933556/180664312-794ce18c-517b-4169-8607-df2a587c4d4c.png)
![image](https://user-images.githubusercontent.com/86933556/180664514-44e2cfa6-9f11-4f59-8de2-5f34a1e1e330.png)
![image](https://user-images.githubusercontent.com/86933556/180664530-765bcfbc-9b81-49c6-9591-dcdad56d0158.png)
![image](https://user-images.githubusercontent.com/86933556/180664545-998c3886-0307-48d0-bfb2-c05356a33feb.png)
![image](https://user-images.githubusercontent.com/86933556/180664559-4e7e1edb-295c-454b-921f-c44b78ea2243.png)






