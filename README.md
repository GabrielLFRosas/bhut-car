# **Bhut Car - Aplicação de Gerenciamento de Carros**

**Descrição**  
Esta aplicação é um sistema de gerenciamento de carros que utiliza **RabbitMQ** para comunicação assíncrona e **MongoDB** para armazenamento de dados. A aplicação é construída com **Node.js** e **Express**.

---

## **Pré-requisitos**

Antes de rodar a aplicação, você precisará ter os seguintes softwares instalados:

- **Node.js**: versão **16.x** ou superior.
- **Docker**: versão **20.x** ou superior.

---

## **Passos para Inicialização**

Siga as etapas abaixo para configurar e iniciar a aplicação:

### 1. **Clonar o Repositório**

Clone o repositório da aplicação para sua máquina local:

```bash
git clone <URL_DO_REPOSITORIO>
cd bhut-car
```

### 2. **Instalar Dependências**
Instale as dependências do projeto utilizando o npm:

```bash
npm install
```

### 3. **Configurar Variáveis de Ambiente**
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

 *Para gerar uma URL para o webhook, acesse: https://webhook.site e copie a URL.

```env
MONGO_URI=<sua_uri_do_mongodb>
RABBITMQ_URL=amqp://localhost
AUTH_API_TOKEN=<seu_token_de_autenticacao>
WEBHOOK_URL=<url_gerada *>
PORT=3000
```

### 4. **Iniciar o RabbitMQ**
Execute o seguinte comando para iniciar o container do RabbitMQ:

```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

### 5. **Subir container Docker**
Execute o seguinte comando:
```bash
docker-compose up -d
```

### 6. **Iniciar a Aplicação**
Inicie a aplicação utilizando o comando:

```bash
npx nodemon src/server.ts
```

### 7. **Acessar a Interface do RabbitMQ**
A interface de gerenciamento do RabbitMQ pode ser acessada em http://localhost:15672.
Usuário padrão: guest
Senha padrão: guest