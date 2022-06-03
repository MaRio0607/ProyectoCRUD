const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM paciente', (err, pacientes) => {
     if (err) {
      res.json(err);
     }
     res.render('pacientes', {
        data: pacientes
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO paciente set ?', data, (err, paciente) => {
      console.log(paciente)
      res.redirect('/paciente');
    })
  })
};

controller.edit = (req, res) => {
  const { id_paciente  } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM paciente WHERE id_paciente  = ?", [id_paciente ], (err, rows) => {
      res.render('pacientes_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_paciente  } = req.params;
  const newPaciente= req.body;
  console.log(newPaciente);
  req.getConnection((err, conn) => {
    conn.query('UPDATE paciente set ? where id_paciente  = ?', [newPaciente, id_paciente ], (err, rows) => {
    res.redirect('/paciente');
  });
  });
};

controller.delete = (req, res) => {
  const { id_paciente  } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM paciente WHERE id_paciente  = ?', [id_paciente ], (err, rows) => {
      res.redirect('/paciente');
    });
  });
}

module.exports = controller;