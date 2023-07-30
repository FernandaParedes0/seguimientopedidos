const express = require('express');
const sequelize = require('./utils/db');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/', routes);

const PORT = 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });
});



