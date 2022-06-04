const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM instructor', (err, instructor) => {
     if (err) {
      res.json(err);
     }
     res.render('instructores', {
        data: instructor
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO instructor set ?', data, (err, instructor) => {
      console.log(instructor)
      res.redirect('/instructor');
    })
  })
};

controller.edit = (req, res) => {
  const { id_instructor } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM instructor WHERE id_instructor = ?", [id_instructor], (err, rows) => {
      res.render('instructores_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_instructor } = req.params;
  const newInstructor= req.body;
  console.log(newInstructor);
  req.getConnection((err, conn) => {
    conn.query('UPDATE instructor set ? where id_instructor = ?', [newInstructor, id_instructor], (err, rows) => {
    res.redirect('/instructor');
  });
  });
};

controller.delete = (req, res) => {
  const { id_instructor } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM instructor WHERE id_instructor = ?', [id_instructor], (err, rows) => {
      res.redirect('/instructor');
    });
  });
}

module.exports = controller;