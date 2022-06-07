const controller = {};

// controller.search = (req, res) => {
//   res.render("busquedaPacientes");
// }
  controller.post = (req, res) => {
    console.log("en post: ", req.body['nombre_busqueda']);
    // var nombre_paciente = req.body['nombre_busqueda'];
    // req.getConnection((err, conn) => {
    //   conn.query('CALL buscarPaciente(?)',nombre_paciente, (err, pacientes) => {
    //    if (err) {
    //     res.json(err);
    //    }
    //    res.render('busquedaPacientes', {
    //       data: pacientes
    //    })     
    //       // console.log(nombre_paciente);
    //      ;
    //   });
    // });
  res.render("busquedaPacientes");
  
  //console.log("en post: ", )
}
controller.submit = (req, res) => {
  res.send(req.query);
  console.log("en submit: ", req.query);
}

controller.submit_post = (req, res) => {
  console.log("en submit_post: ", req.body['nombre_busqueda']);
  nombre_paciente = req.body['nombre_busqueda'];
  req.getConnection((err, conn) => {
    conn.query('CALL buscarPaciente(?)',nombre_paciente, (err, pacientes) => {
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
  // res.send(req.body);
}

// controller.get = (req, res) => {
//   const nombre_paciente= req.params.nombre_busqueda;
//   console.log(nombre_paciente);

//   req.getConnection((err, conn) => {
//     conn.query('CALL buscarPaciente(?)',nombre_paciente, (err, pacientes) => {
//       if (err) {
//       res.json(err);
//       }
//       res.render("busquedaPacientes",{
//         data : pacientes
//       });
//       console.log(pacientes);
//     });
//   });
// };

// controller.search = (req, res) => {
//   const nombre_paciente= req.query.nombre_busqueda;
//   console.log("log ", nombre_paciente);

//   req.getConnection((err, conn) => {
//     conn.query('CALL buscarPaciente(?)','martin', (err, pacientes) => {
//      if (err) {
//       res.json(err);
//      }
//      res.render('busquedaPacientes', {
//         data: pacientes
//      })     
//         // console.log(nombre_paciente);
//        ;
//     });
//   });
// };
module.exports = controller;
