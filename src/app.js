const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');


const app = express();

// importing routes
const empleadoRoutes = require('./routes/empleado');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var db_config = require ('./db_config.json');
// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: db_config['host'],
    user: db_config['user'],
    password: db_config['password'],
    port: 3306,
    database: db_config['database']
  }, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', empleadoRoutes);

// // static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});