const controller = {};

controller.list = (req, res) => {
  const  id  = req.params['id_instructor'];
  console.log('Obtiniendo cantidad',typeof(parseInt(id)));

  req.getConnection((err, conn) => {
    conn.query('SELECT cantidad_actividad(?) ',parseInt(id), (err, actividades) => {
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