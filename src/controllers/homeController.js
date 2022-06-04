const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    res.render('home', {
     });
  });
};

module.exports = controller;