FROM node

WORKDIR /app


COPY package*.json .

# COPY package-lock.json package-lock.json

RUN npm install
# COPY index.js  index.js
COPY . .
CMD [ "node" ,"index.js" ]
