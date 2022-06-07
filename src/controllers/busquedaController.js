const controller = {};

controller.search = (req, res) => {
      res.redirect("/buscarpaciente/"+req.body.nombre_busqueda);
  }

controller.get = (req, res) => {
  const nombre_paciente= req.params.nombre_busqueda;
  console.log(nombre_paciente);

  req.getConnection((err, conn) => {
    conn.query('CALL buscarPaciente(?)',nombre_paciente, (err, pacientes) => {
      if (err) {
      res.json(err);
      }
      res.render("busquedaPacientes",{
        data : pacientes
      });
      console.log(pacientes);
    });
  });
};


module.exports = controller;
