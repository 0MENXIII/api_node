# Utiliza una imagen oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json .
COPY app.js .

# Expone el puerto de la API
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]