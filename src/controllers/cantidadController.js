const controller = {};

controller.list = (req, res) => {
  const nombre_paciente= req.body;
  console.log(nombre_paciente);

  req.getConnection((err, conn) => {
    conn.query('SELECT cantidad_actividad(?) ',1, (err, actividades) => {
     if (err) {
      res.json(err);
     }
     res.render('cantidades', {
        data: actividades
     })     
        console.log(actividades[0]['cantidad_actividad(1)']);
       ;
    });
  });
};
module.exports = controller;