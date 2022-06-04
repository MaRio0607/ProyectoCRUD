const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM actividad', (err, actividades) => {
     if (err) {
      res.json(err);
     }
     res.render('actividades', {
        data: actividades
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO actividad set ?', data, (err, actividad) => {
      console.log(actividad)
      res.redirect('/actividad');
    })
  })
};

controller.edit = (req, res) => {
  const { id_actividad } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM actividad WHERE id_actividad = ?", [id_actividad], (err, rows) => {
      res.render('actividades_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_actividad } = req.params;
  const newActividad= req.body;
  console.log(newActividad);
  req.getConnection((err, conn) => {
    conn.query('UPDATE actividad set ? where id_actividad = ?', [newActividad, id_actividad], (err, rows) => {
    res.redirect('/actividad');
  });
  });
};

controller.delete = (req, res) => {
  const { id_actividad } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM actividad WHERE id_actividad = ?', [id_actividad], (err, rows) => {
      res.redirect('/actividad');
    });
  });
}

module.exports = controller;