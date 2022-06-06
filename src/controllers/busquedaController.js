const controller = {};

controller.search = (req, res) => {
    const nombre_paciente= req.body;
    console.log(nombre_paciente);

    req.getConnection((err, conn) => {
      conn.query('CALL buscarPaciente(?)','martin', (err, pacientes) => {
       if (err) {
        res.json(err);
       }
       res.render('busquedaPacientes', {
          data: pacientes
       })     
          // console.log(nombre_paciente);
         ;
      });
    });
  };


module.exports = controller;