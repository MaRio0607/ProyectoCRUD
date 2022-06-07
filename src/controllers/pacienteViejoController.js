const controller = {};

controller.list = (req, res) => {
    const newPacienteGet= req.body;
  
    req.getConnection((err, conn) => {
      conn.query('SELECT*FROM pacientes_mas_viejos', (err, pacientes) => {
       if (err) {
        res.json(err);
       }
       res.render('pacientesViejos', {
          data: pacientes
       });
      });
    });
  };

module.exports = controller;