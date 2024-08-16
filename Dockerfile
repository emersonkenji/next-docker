# Use uma imagem base adequada para Node.js
FROM node:20-alpine

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências e instale-as
COPY package*.json ./
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Construa a aplicação
RUN npm run build

# Exponha a porta que a aplicação utilizará
EXPOSE 3000

# Inicie a aplicação
CMD ["npm", "start"]
