# passo 1 - definir o ambiente para o app
#já tem o node v16, npm v7, alphine (linux)
FROM node:15-alpine

# passo 2 - criando um diretório no container
WORKDIR /app

# passo 3 - copiar o package pra dentro do container
COPY package*.json ./

# passo 4 - executar o npm install
RUN npm install

# passo 5 - vamos copiar todos os arquivos para o container 
# todos incluindo o node_modules, entao eu crio o .dockerignore para nao copiar o node_modules
COPY . .

# passo 6 - definir os envs
ENV PORT=5000

# passo 7 - export a port da aplicação
EXPOSE 5000

# passo 8 - executar a aplicação
CMD ["npm", "start"]