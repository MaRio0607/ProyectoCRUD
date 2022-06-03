const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM empleado', (err, empleados) => {
     if (err) {
      res.json(err);
     }
     res.render('empleados', {
        data: empleados
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO empleado set ?', data, (err, empleado) => {
      console.log(empleado)
      res.redirect('/empleado');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM empleado WHERE id = ?", [id], (err, rows) => {
      res.render('empleados_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newEmpleado= req.body;
  console.log(newEmpleado);
  req.getConnection((err, conn) => {
    conn.query('UPDATE empleado set ? where id = ?', [newEmpleado, id], (err, rows) => {
    res.redirect('/empleado');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM empleado WHERE id = ?', [id], (err, rows) => {
      res.redirect('/empleado');
    });
  });
}

module.exports = controller;