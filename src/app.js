const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection')
      bodyParser = require('body-parser');


const app = express();

// importing routes
const homeRoutes = require('./routes/homeRoute');
const empleadoRoutes = require('./routes/empleado');
const pacienteRoutes = require('./routes/paciente');
const instructorRoutes = require('./routes/instructor');
const actividadesRoutes = require('./routes/actividad');
const buscarPaciente = require('./routes/buscarPaciente');






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
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/', homeRoutes);
app.use('/', empleadoRoutes);
app.use('/', pacienteRoutes);
app.use('/', instructorRoutes);
app.use('/', actividadesRoutes);
app.use('/', buscarPaciente)



// // static files
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.set('css', path.join(__dirname,'css'));
app.set('js', path.join(__dirname,'js'));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});