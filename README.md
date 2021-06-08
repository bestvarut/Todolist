# Todolist project

scripts
start: node index.js
server: nodemon index.js
client: npm start --prefix client
clientinstall: npm install --prefix client
dev : concurrently \"npm run server\" \"npm run client\"
