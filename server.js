const express = require('express');
const routes = require('./routes');
// import sequelize connection DONE
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server DONE
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
});
